"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SoftButton } from "@/components/soft-button";
import { sitePath } from "@/lib/site-path";

const badges = ["Python", "LangChain", "FastAPI", "Supabase", "RAG", "AI Agents", "Automation", "OSINT"];

const terminalLines = [
  "building_rag_systems()",
  "automating_workflows()",
  "deploying_ai_backends()",
  "debugging_real_systems()"
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduceMotion) {
      setTyped(terminalLines.join("\n"));
      return;
    }

    const current = terminalLines[lineIndex];
    if (typed.length < current.length) {
      const timer = window.setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1));
      }, 42);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setLineIndex((lineIndex + 1) % terminalLines.length);
      setTyped("");
    }, 1100);
    return () => window.clearTimeout(timer);
  }, [lineIndex, reduceMotion, typed]);

  return (
    <section id="home" className="hero-section scroll-mt-24">
      <div className="hero-image">
        <Image
          src={sitePath("/hero-technical.png")}
          alt="Soft technical workspace visual with AI system cards and data flow elements"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" />

      <div className="site-shell relative">
        <div className="hero-content">
          <div className="hero-copy">
            <Reveal direction="right">
              <p className="mb-4 text-sm font-bold uppercase text-muted">Muzammil Haider</p>
              <h1 className="section-heading max-w-4xl text-4xl md:text-6xl xl:text-7xl">
                I build practical AI systems that connect LLMs, data, automation, and backend engineering.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
                BS Artificial Intelligence student from Islamabad focused on RAG systems, AI agents,
                LangChain workflows, FastAPI backends, OSINT automation, and real world AI products.
              </p>
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.12} pop>
              <SoftButton href="#projects" icon={ArrowDown} variant="primary">
                View Projects
              </SoftButton>
              <SoftButton href={sitePath("/Muzammil_Haider.pdf")} icon={Download} download>
                Download Resume
              </SoftButton>
              <SoftButton href="#contact" icon={Mail} variant="ghost">
                Contact Me
              </SoftButton>
            </Reveal>

            <Reveal className="mt-8 flex max-w-3xl flex-wrap gap-2" delay={0.22} direction="left">
              {badges.map((badge, index) => (
                <motion.span
                  className="mint-chip px-3 py-2"
                  key={badge}
                  initial={reduceMotion ? false : { y: 8, opacity: 0 }}
                  animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 + index * 0.04 }}
                >
                  {badge}
                </motion.span>
              ))}
            </Reveal>

            <Reveal className="mt-10 w-full max-w-xl soft-card p-5" delay={0.32} direction="up" pop>
              <div className="mb-4 flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-peach" />
                <span className="h-3 w-3 rounded-full bg-butter" />
                <span className="h-3 w-3 rounded-full bg-mint-500" />
              </div>
              <div className="font-mono text-sm leading-7 text-ink-700">
                {reduceMotion ? (
                  terminalLines.map((line) => (
                    <div key={line} className="terminal-line">
                      {line}
                    </div>
                  ))
                ) : (
                  <div className="terminal-line min-h-7">{typed}</div>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-portrait-shell" delay={0.18} direction="left" pop>
            <div className="hero-portrait-frame">
              <Image
                src={sitePath("/muzammil-portrait-portfolio.png")}
                alt="Portrait of Muzammil Haider"
                fill
                priority
                sizes="(max-width: 760px) 78vw, (max-width: 1180px) 34vw, 380px"
                className="hero-portrait"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
