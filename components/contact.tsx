"use client";

import { Github, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { SoftButton } from "@/components/soft-button";

const email = "muzamilhaider444@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Available for practical AI and automation work."
      subtitle="Reach out for RAG systems, AI agents, FastAPI backends, automation workflows, OSINT research automation, data analysis, or computer vision prototypes."
    >
      <Reveal className="soft-card p-6 md:p-8" pop>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h3 className="section-heading text-3xl">Muzammil Haider</h3>
            <p className="mt-3 text-lg leading-8 text-muted">
              AI Developer and Researcher focused on LLM applications, RAG systems, automation,
              backend APIs, OSINT workflows, and practical machine learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <SoftButton href={`mailto:${email}`} icon={Send} variant="primary">
                Send Email
              </SoftButton>
              <SoftButton href="https://github.com/Haideransari444" icon={Github}>
                View GitHub
              </SoftButton>
              <SoftButton onClick={copyEmail} icon={Mail} variant="ghost">
                {copied ? "Email Copied" : "Copy Email"}
              </SoftButton>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="soft-inset p-5">
              <div className="flex items-center gap-3">
                <Mail aria-hidden="true" size={19} />
                <span className="font-bold">Email</span>
              </div>
              <a className="mt-2 block break-words text-muted" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <div className="soft-inset p-5">
              <div className="flex items-center gap-3">
                <Github aria-hidden="true" size={19} />
                <span className="font-bold">GitHub</span>
              </div>
              <a className="mt-2 block break-words text-muted" href="https://github.com/Haideransari444">
                github.com/Haideransari444
              </a>
            </div>
            <div className="soft-inset p-5">
              <div className="flex items-center gap-3">
                <MapPin aria-hidden="true" size={19} />
                <span className="font-bold">Location</span>
              </div>
              <p className="mt-2 text-muted">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="py-10 text-center text-sm text-muted">
        Built around practical AI systems, retrieval, automation, and backend engineering.
      </footer>
    </SectionShell>
  );
}
