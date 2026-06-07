import { Code2, Database, GitBranch, Terminal, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";

const terminalRows = [
  {
    command: "ingest_raw_inputs()",
    output: "docs, emails, sites, dashboards, OSINT feeds"
  },
  {
    command: "build_retrieval_layer()",
    output: "chunks -> embeddings -> vector search -> grounded answers"
  },
  {
    command: "connect_automation()",
    output: "APIs, agents, workflows, dashboards, human actions"
  },
  {
    command: "ship_real_system()",
    output: "search, reason, automate, explain, support"
  }
];

const focusCards = [
  {
    title: "Full AI Products",
    icon: Workflow,
    text: "Models connected to documents, databases, APIs, emails, dashboards, and automation flows."
  },
  {
    title: "Retrieval + Backend",
    icon: Database,
    text: "FastAPI, PostgreSQL, Supabase, FAISS, pgvector, chunking, embeddings, and grounded generation."
  },
  {
    title: "Real Debugging",
    icon: Code2,
    text: "Deployment issues, native runtime problems, Matrix/WebRTC research, and low-level investigation."
  }
];

export function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Building useful AI, not just demos."
      subtitle="Muzammil is an AI student and programmer from Islamabad who prefers full systems where models are only one part of the workflow."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="about-terminal" direction="up">
          <div className="terminal-topbar">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="terminal-dot bg-peach" />
              <span className="terminal-dot bg-butter" />
              <span className="terminal-dot bg-mint-500" />
            </div>
            <div className="terminal-title">
              <Terminal aria-hidden="true" size={16} />
              <span>mhaider@ai-systems</span>
            </div>
            <span className="terminal-status">live</span>
          </div>

          <div className="terminal-body">
            <p className="terminal-kicker">system blueprint</p>
            <h3 className="section-heading text-2xl md:text-3xl">From messy input to useful AI workflow.</h3>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              I build where LLMs meet real product work: retrieval, APIs, agents, automation, data pipelines,
              dashboards, OSINT, and self-hosted infrastructure.
            </p>

            <div className="terminal-stream" aria-label="AI system build sequence">
              {terminalRows.map((row, index) => (
                <div
                  className="terminal-row"
                  key={row.command}
                  style={{ animationDelay: `${180 + index * 160}ms` }}
                >
                  <div className="terminal-command">
                    <span className="terminal-prompt">~/build</span>
                    <span className="terminal-caret">$</span>
                    <span>{row.command}</span>
                  </div>
                  <div className="terminal-output">
                    <GitBranch aria-hidden="true" size={15} />
                    <span>{row.output}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="terminal-footer">
              <span className="terminal-pulse" aria-hidden="true" />
              <span>ready to search, reason, automate, explain, and support real users</span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {focusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.08} direction="left" pop>
                <article className="soft-card p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-mint-300 text-ink-900 shadow-insetSoft">
                    <Icon aria-hidden="true" size={21} />
                  </div>
                  <h3 className="section-heading text-xl">{card.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
