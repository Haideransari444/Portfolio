import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { timelineItems } from "@/data/timeline";

export function Timeline() {
  return (
    <SectionShell
      id="timeline"
      eyebrow="Technical timeline"
      title="A path through AI, automation, research, and infrastructure."
      subtitle="The timeline keeps the portfolio grounded in education, professional experience, project builds, and current focus areas."
    >
      <div className="relative grid gap-5">
        <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-mint-200 md:block" aria-hidden="true" />
        {timelineItems.map((item, index) => (
          <Reveal
            className="relative md:pl-12"
            delay={index * 0.06}
            direction={index % 2 ? "left" : "right"}
            key={item.title}
            pop
          >
            <span
              className="absolute left-[11px] top-7 hidden h-3 w-3 rounded-full border border-mint-900/20 bg-mint-500 shadow-soft md:block"
              aria-hidden="true"
            />
            <article className="soft-card p-6">
              <p className="text-sm font-bold uppercase text-muted">{item.period}</p>
              <h3 className="section-heading mt-2 text-2xl break-words">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.detail}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span className="mint-chip px-3 py-2" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
