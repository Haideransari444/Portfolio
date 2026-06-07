"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { ProjectDrawer } from "@/components/project-drawer";
import { SectionShell } from "@/components/section-shell";
import { Project, ProjectFilter, projectFilters, projects } from "@/data/projects";

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <SectionShell
      id="projects"
      eyebrow="Featured projects"
      title="Project cards that open into case studies."
      subtitle="The work spans RAG systems, AI agents, automation, backend APIs, OSINT workflows, computer vision, and communication systems research."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {projectFilters.map((filter) => (
          <button
            aria-selected={activeFilter === filter}
            className="soft-button-ghost soft-button relative px-4 py-2 text-sm"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            role="tab"
            type="button"
          >
            <span className="relative z-10">{filter}</span>
            {activeFilter === filter ? (
              <motion.span
                className="absolute inset-1 rounded-md bg-mint-300"
                layoutId="active-project-filter"
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
              />
            ) : null}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.title}
            onOpen={setSelectedProject}
            project={project}
          />
        ))}
      </motion.div>

      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </SectionShell>
  );
}
