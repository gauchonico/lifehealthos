<?php
// Receives video uploads from the /workspace Videos form, straight from the
// browser, in chunks. Deployed by hand to Hostinger (see web/README.md →
// "Video uploads (Hostinger)"); it is not served by the Next.js app.
//
// The Next.js server never sees the file itself — Vercel caps request bodies
// at ~4.5MB. Instead it hands the browser a short-lived token, HMAC-signed
// with VIDEO_UPLOAD_SECRET, that names the final filename and total size.
// This script verifies that token on every chunk, so only a signed-in
// workspace user can upload, and only the file they were issued a token for.

// ---- Configuration -------------------------------------------------------

// Must match VIDEO_UPLOAD_SECRET in the Next.js app's environment.
const UPLOAD_SECRET = 'REPLACE_WITH_VIDEO_UPLOAD_SECRET';

// Sites allowed to upload from a browser (scheme + host, no trailing slash).
const ALLOWED_ORIGINS = [
    'https://lhn.lifehealth.global',
    'http://localhost:3000',
    'https://lifehealth.global',
    'https://www.lifehealth.global',
];


// Finished videos are saved next to this script; partial uploads go in a
// private subfolder until complete.
const UPLOAD_DIR = __DIR__;
const INCOMING_DIR = __DIR__ . '/.incoming';

const ALLOWED_EXTENSIONS = ['mp4', 'webm', 'mov', 'm4v'];

// ---- Helpers -------------------------------------------------------------

function respond(int $status, array $body): void
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($body);
    exit;
}

function base64url_encode(string $bytes): string
{
    return rtrim(strtr(base64_encode($bytes), '+/', '-_'), '=');
}

function base64url_decode(string $str): string
{
    return base64_decode(strtr($str, '-_', '+/') . str_repeat('=', (4 - strlen($str) % 4) % 4));
}

function verify_token(string $token): ?array
{
    $parts = explode('.', $token);
    if (count($parts) !== 2) return null;
    [$payloadB64, $signature] = $parts;

    $expected = base64url_encode(hash_hmac('sha256', $payloadB64, UPLOAD_SECRET, true));
    if (!hash_equals($expected, $signature)) return null;

    $payload = json_decode(base64url_decode($payloadB64), true);
    if (!is_array($payload) || !isset($payload['name'], $payload['size'], $payload['exp'])) return null;
    if ($payload['exp'] < time()) return null;

    // The name is chosen by the Next.js server, but re-check it anyway so a
    // leaked secret still can't write outside this folder or drop a script.
    $name = (string) $payload['name'];
    if (!preg_match('/^[A-Za-z0-9._-]+$/', $name) || str_starts_with($name, '.')) return null;
    $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    if (!in_array($ext, ALLOWED_EXTENSIONS, true)) return null;

    return ['name' => $name, 'size' => (int) $payload['size']];
}

// ---- CORS ----------------------------------------------------------------

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Method not allowed']);
}

// ---- Upload --------------------------------------------------------------

if (UPLOAD_SECRET === 'REPLACE_WITH_VIDEO_UPLOAD_SECRET' || UPLOAD_SECRET === '') {
    respond(500, ['error' => 'upload.php is not configured: set UPLOAD_SECRET.']);
}

// PHP silently drops the whole body when it exceeds post_max_size.
if (empty($_POST) && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 0) {
    respond(413, ['error' => 'Chunk is larger than PHP post_max_size on Hostinger. Raise post_max_size and upload_max_filesize to at least 16M.']);
}

$target = verify_token((string) ($_POST['token'] ?? ''));
if (!$target) {
    respond(403, ['error' => 'Upload link is invalid or has expired. Choose the file again.']);
}

$chunk = $_FILES['chunk'] ?? null;
if (!$chunk || $chunk['error'] !== UPLOAD_ERR_OK) {
    $code = $chunk['error'] ?? UPLOAD_ERR_NO_FILE;
    if ($code === UPLOAD_ERR_INI_SIZE || $code === UPLOAD_ERR_FORM_SIZE) {
        respond(413, ['error' => 'Chunk is larger than PHP upload_max_filesize on Hostinger. Raise it to at least 16M.']);
    }
    respond(400, ['error' => 'Missing upload chunk (PHP error ' . $code . ').']);
}

if (!is_dir(INCOMING_DIR)) {
    mkdir(INCOMING_DIR, 0755, true);
    file_put_contents(INCOMING_DIR . '/.htaccess', "Require all denied\n");
}

$partPath = INCOMING_DIR . '/' . $target['name'] . '.part';
$offset = (int) ($_POST['offset'] ?? -1);

clearstatcache();
$current = $offset === 0 ? 0 : (is_file($partPath) ? filesize($partPath) : 0);
if ($offset !== $current) {
    // Out of sync (e.g. a retried chunk that actually landed) — tell the
    // browser where to continue from.
    respond(409, ['error' => 'Offset mismatch', 'received' => $current]);
}

$out = fopen($partPath, $offset === 0 ? 'wb' : 'ab');
$in = fopen($chunk['tmp_name'], 'rb');
if (!$out || !$in) {
    respond(500, ['error' => 'Could not write the upload on the server.']);
}
stream_copy_to_stream($in, $out);
fclose($in);
fclose($out);

clearstatcache();
$received = filesize($partPath);

if ($received > $target['size']) {
    unlink($partPath);
    respond(400, ['error' => 'Upload is larger than expected.']);
}

if ($received === $target['size']) {
    if (!rename($partPath, UPLOAD_DIR . '/' . $target['name'])) {
        respond(500, ['error' => 'Could not finalise the upload on the server.']);
    }
    respond(200, ['done' => true, 'received' => $received]);
}

respond(200, ['done' => false, 'received' => $received]);
