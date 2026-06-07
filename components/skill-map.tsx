import { Boxes, Brain, Radio, ScanEye, Server, Workflow } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";

const icons = [Brain, Server, Workflow, ScanEye, Boxes, Radio];

export function SkillMap() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skill map"
      title="Grouped skill islands for real workflows."
      subtitle="The stack is organized around what each tool helps build: retrieval, APIs, automation, infrastructure, vision, and systems research."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Brain;
          return (
            <Reveal key={group.title} delay={index * 0.06} direction={index % 2 ? "left" : "up"} pop>
              <article className="soft-card group min-h-[265px] p-6 transition duration-300 hover:-translate-y-1">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mint-300 text-ink-900 shadow-insetSoft">
                    <Icon aria-hidden="true" size={23} />
                  </div>
                  <span className="mint-chip px-3 py-2">{group.skills.length} tools</span>
                </div>
                <h3 className="section-heading text-2xl">{group.title}</h3>
                <p className="mt-3 max-h-0 overflow-hidden leading-7 text-muted opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
                  {group.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span className="mint-chip px-3 py-2" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
