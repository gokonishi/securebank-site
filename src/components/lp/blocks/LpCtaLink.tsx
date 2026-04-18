"use client";

import { usePathname } from "next/navigation";
import { trackLpCta, type LpCtaEvent } from "@/app/lp/lp-analytics";

type Props = {
  event: LpCtaEvent;
  section: string;
  label: string;
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function LpCtaLink({
  event,
  section,
  label,
  href,
  className,
  children,
}: Props) {
  const pathname = usePathname();

  const handleClick = () => {
    const lp = pathname?.replace(/^\/lp\//, "") ?? "unknown";
    trackLpCta(event, { lp, section, label });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
