export default function ScanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#080808", color: "#fff" }}>
      {children}
    </div>
  );
}