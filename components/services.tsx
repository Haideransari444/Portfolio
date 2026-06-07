import { BarChart3, Bot, Code, Eye, FileSearch, Network, Search, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/data/services";

const icons = [Bot, Search, Network, Workflow, Code, BarChart3, FileSearch, Eye];

export function Services() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Practical services around AI systems."
      subtitle="Focused offers for AI applications, RAG, agents, automation, backend development, data, OSINT, and computer vision prototypes."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[index] ?? Bot;
          return (
            <Reveal key={service.title} delay={index * 0.045} direction="up" pop>
              <article className="soft-card min-h-[285px] p-5 transition duration-300 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-peach text-ink-900 shadow-insetSoft">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3 className="section-heading text-xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span className="mint-chip px-3 py-2" key={tool}>
                      {tool}
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
