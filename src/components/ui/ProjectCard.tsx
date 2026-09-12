import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Car,
  CircleDot,
  Crosshair,
  Glasses,
  Rocket,
  Squirrel,
  Swords,
  Vault,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Project, ProjectIconKey } from "../../data/projects";
import { revealChildVariants } from "../../lib/motion";

const iconMap: Record<ProjectIconKey, LucideIcon> = {
  swords: Swords,
  vault: Vault,
  rocket: Rocket,
  crosshair: Crosshair,
  car: Car,
  squirrel: Squirrel,
  basketball: CircleDot,
  vr: Glasses,
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon];
  const isProfessional = project.variant === "professional";

  const content = (
    <motion.article
      variants={revealChildVariants}
      className={`group flex h-full min-h-70 flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4c542e] ${
        project.featured
          ? "min-h-125 bg-[linear-gradient(145deg,#15191a,#101217)] md:row-span-2 md:p-8"
          : ""
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="font-display text-xs tracking-[0.2em] text-fg/40">
            {project.number}
          </span>
          <div className="flex items-center gap-2">
            {isProfessional && (
              <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-fg/50 uppercase">
                Professional
              </span>
            )}
            {project.href && (
              <ArrowUpRight className="size-4 text-fg/40 transition-colors group-hover:text-accent" />
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Icon
            className={`text-accent ${project.featured ? "size-8" : "size-6"}`}
          />
          <h3
            className={`font-display font-semibold text-fg ${
              project.featured ? "text-2xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-fg/60">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs text-fg/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (!project.href) {
    return content;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`block h-full ${project.featured ? "md:row-span-2" : ""}`}
    >
      {content}
    </a>
  );
}
