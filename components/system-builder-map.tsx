"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";

const nodes = [
  {
    title: "Data Sources",
    detail: "Documents, websites, emails, public data, APIs, and project notes become structured inputs.",
    related: "LawBot Pakistan, PaperPal, Social Profile Preservation Tool"
  },
  {
    title: "Processing",
    detail: "Cleaning, chunking, extraction, parsing, and validation turn raw material into usable context.",
    related: "Invoice Agent, OpenHive, Islamabad AQI Predictor"
  },
  {
    title: "Vector Search",
    detail: "FAISS, pgvector, Supabase Vector, and hybrid search retrieve the most useful context.",
    related: "Book Brain, LawBot Pakistan, BeWhoop Agent"
  },
  {
    title: "LLM Layer",
    detail: "Gemini, local models, prompts, tools, and agent state convert retrieved context into action.",
    related: "Source Puller Agent, Alif AI Tutor, PaperPal"
  },
  {
    title: "API",
    detail: "FastAPI routes and database services make the AI workflow available to products and dashboards.",
    related: "BeWhoop Agent, OpenHive, Alif AI Tutor"
  },
  {
    title: "User Workflow",
    detail: "The final layer is a useful workflow: answers, summaries, reports, escalation, or automation.",
    related: "Email Outreach Agent, Homelab Sandbox, OSINT tools"
  }
];

export function SystemBuilderMap() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell
      id="system-map"
      eyebrow="System builder map"
      title="The core strength is connecting the whole pipeline."
      subtitle="Muzammil's projects are usually not isolated model calls. They connect input sources, retrieval, LLMs, APIs, and the user workflow around them."
    >
      <Reveal className="soft-card p-5 md:p-7" pop>
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {nodes.map((node, index) => (
              <motion.button
                className={`soft-inset min-h-[132px] p-4 text-left transition ${
                  active === index ? "bg-mint-300/70" : ""
                }`}
                key={node.title}
                onClick={() => setActive(index)}
                type="button"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mint-chip px-3 py-2">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="section-heading mt-4 text-xl">{node.title}</h3>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="soft-card p-6"
            key={active}
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 110, damping: 18 }}
          >
            <p className="text-sm font-bold uppercase text-muted">Active node</p>
            <h3 className="section-heading mt-2 text-3xl">{nodes[active].title}</h3>
            <p className="mt-4 leading-8 text-muted">{nodes[active].detail}</p>
            <div className="mt-5 soft-inset p-4">
              <p className="text-sm font-bold text-ink-700">Related projects</p>
              <p className="mt-2 leading-7 text-muted">{nodes[active].related}</p>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
