import { Activity, DatabaseZap, MailCheck, Network, Radar, ScanLine } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { labSystems } from "@/data/lab";

const icons = [DatabaseZap, MailCheck, Radar, ScanLine, Network, Activity];

export function AiSystemsLab() {
  return (
    <SectionShell
      id="lab"
      eyebrow="AI systems lab"
      title="A soft control panel for the current technical worlds."
      subtitle="Each lab card represents a recurring area of work: retrieval, email agents, OSINT, vision, communication systems, and infrastructure."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {labSystems.map((system, index) => {
          const Icon = icons[index] ?? Activity;
          return (
            <Reveal key={system.title} delay={index * 0.06} direction={index % 2 ? "left" : "up"} pop>
              <article className="lab-card soft-card min-h-[260px] p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky text-ink-900 shadow-insetSoft">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <span className="mint-chip px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-mint-500" />
                    {system.status}
                  </span>
                </div>
                <h3 className="section-heading text-2xl">{system.title}</h3>
                <p className="mt-3 leading-7 text-muted">{system.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {system.tools.map((tool) => (
                    <span className="mint-chip px-3 py-2" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
                <span className="card-glow-line" aria-hidden="true" />
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
