import { motion } from "framer-motion";

import { projects } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="bg-surface-2 py-24 md:py-32">
      <div className="mx-auto max-w-330 px-6 md:px-10">
        <SectionLabel label="03 / SELECTED WORK" />

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-[clamp(2.4rem,5.5vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em] font-display text-fg">
            Things I've
            <br />
            <span className="text-accent">built.</span>
          </h2>
          <p className="max-w-75 text-sm text-fg/60">
            A selection of personal and professional game-development work.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid gap-4 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
