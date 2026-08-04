import TrustSubnav from "@/components/trust/TrustSubnav";

export default function TrustCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TrustSubnav />
      {children}
    </>
  );
}
