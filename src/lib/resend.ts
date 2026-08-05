import { Resend } from "resend";

// Defaults to Resend's shared test sender so this works with zero DNS setup.
// Swap in a verified sending domain (e.g. workspace@lifehealth.global) once
// one's set up in the Resend dashboard, via WORKSPACE_EMAIL_FROM.
const FROM_ADDRESS = process.env.WORKSPACE_EMAIL_FROM || "LifeHealth Workspace <onboarding@resend.dev>";

export async function sendWorkspaceAccessEmail(email: string, password: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: email,
    subject: "Your LifeHealth Workspace access code",
    text: `Here's your one-time workspace password: ${password}\n\nEnter it along with your email at the workspace login page. It expires in 30 minutes.\n\nIf you didn't request this, you can ignore this email.`,
    html: `
      <p>Here's your one-time workspace password:</p>
      <p style="font-size:20px;font-weight:700;font-family:monospace;letter-spacing:0.5px;">${password}</p>
      <p>Enter it along with your email at the workspace login page. It expires in <strong>30 minutes</strong>.</p>
      <p style="color:#6b7280;font-size:13px;">If you didn't request this, you can ignore this email.</p>
    `,
  });
}
