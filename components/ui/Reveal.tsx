"use client";

import { useScrollReveal } from "@/lib/utils/useScrollReveal";

export function Reveal({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={className}>{children}</div>;
}
