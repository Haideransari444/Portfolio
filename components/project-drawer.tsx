"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

type ProjectDrawerProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-50 flex justify-end bg-ink-900/20 p-3 backdrop-blur-sm md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
        >
          <button className="absolute inset-0 cursor-default" onClick={onClose} type="button" aria-label="Close case study" />
          <motion.aside
            className="soft-card relative h-full w-full max-w-2xl overflow-y-auto p-6 md:p-8"
            initial={{ x: 72, opacity: 0, scale: 0.98 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 72, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <button
              className="soft-button absolute right-4 top-4 h-11 w-11 p-0"
              onClick={onClose}
              type="button"
              aria-label="Close case study"
            >
              <X aria-hidden="true" size={18} />
            </button>

            <div className="pr-14">
              <p className="text-sm font-bold uppercase text-muted">{project.category}</p>
              <h3 className="section-heading mt-2 text-3xl md:text-4xl">{project.title}</h3>
              <p className="mt-4 leading-8 text-muted">{project.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span className="mint-chip px-3 py-2" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4">
              {[
                ["Problem", project.problem],
                ["Solution", project.solution],
                ["Architecture", project.architecture],
                ["Technical Challenge", project.challenge],
                ["Outcome", project.outcome]
              ].map(([title, text]) => (
                <section className="soft-inset p-5" key={title}>
                  <h4 className="section-heading text-xl">{title}</h4>
                  <p className="mt-2 leading-7 text-muted">{text}</p>
                </section>
              ))}
            </div>

            <section className="mt-6">
              <h4 className="section-heading text-xl">Key Features</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div className="soft-inset p-4 text-sm font-semibold text-ink-700" key={feature}>
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
