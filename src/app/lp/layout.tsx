import LpViewTracker from "./LpViewTracker";

export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lp-root">
      <LpViewTracker />
      {children}
    </div>
  );
}
