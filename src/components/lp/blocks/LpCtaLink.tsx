"use client";

import Link from "next/link";
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
    console.log("[LpCtaLink] CTA clicked", {
      event,
      section,
      label,
      lp,
      href,
    });
    trackLpCta(event, { lp, section, label });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
