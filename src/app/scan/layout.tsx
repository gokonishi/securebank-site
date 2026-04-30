export default function ScanLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0, background: "#080808", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}