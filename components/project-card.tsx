"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { forwardRef } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(function ProjectCard(
  { project, index, onOpen },
  ref
) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      className="project-card soft-card flex min-h-[390px] flex-col p-5"
      initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.95 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ type: "spring", stiffness: 92, damping: 18, delay: index * 0.045 }}
      whileHover={reduceMotion ? undefined : { y: -6, rotate: index % 2 ? -0.35 : 0.35 }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="mint-chip px-3 py-2">{project.maturity}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-300 text-ink-900 shadow-insetSoft">
          <Layers3 aria-hidden="true" size={18} />
        </div>
      </div>

      <p className="text-sm font-bold uppercase text-muted">{project.category}</p>
      <h3 className="section-heading mt-2 text-2xl">{project.title}</h3>
      <p className="mt-4 leading-7 text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <span className="mint-chip px-3 py-2 text-[0.72rem]" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 soft-inset p-4">
        <p className="text-sm font-bold text-ink-700">Problem</p>
        <p className="mt-2 text-sm leading-6 text-muted">{project.problem}</p>
      </div>

      <div className="mt-auto pt-5">
        <button
          className="soft-button w-full px-4 py-3 text-sm"
          onClick={() => onOpen(project)}
          type="button"
        >
          <span>View Case Study</span>
          <ArrowUpRight aria-hidden="true" size={17} />
        </button>
      </div>
      <span className="card-glow-line" aria-hidden="true" />
    </motion.article>
  );
});
