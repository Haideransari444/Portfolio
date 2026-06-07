import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: SectionShellProps) {
  return (
    <section id={id} className="site-shell scroll-mt-24 py-16 md:py-24">
      <Reveal className="max-w-3xl" direction="right">
        <p className="mb-3 text-sm font-bold uppercase text-muted">{eyebrow}</p>
        <h2 className="section-heading text-3xl md:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-8 text-muted md:text-lg">{subtitle}</p>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
