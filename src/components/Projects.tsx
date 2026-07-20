"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Badge } from "./ui/badge";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "BooksReader",
    description:
      "A digital reading platform with a clean interface for browsing and managing book collections.",
    technologies: ["React", "Next.js", "TypeScript", "Prisma"],
    github: "https://github.com/andrysdm",
  },
  {
    title: "Negocios Holguín",
    description:
      "Local business directory and management platform for the Holguín region.",
    technologies: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/andrysdm",
  },
  {
    title: "EntrenadorPC",
    description:
      "Desktop application for PC hardware training and diagnostics.",
    technologies: ["React", "Electron", "TypeScript", "SQLite"],
    github: "https://github.com/andrysdm",
  },
  {
    title: "Mando",
    description:
      "Remote control management application with real-time device synchronization.",
    technologies: ["React Native", "Expo", "WebSockets", "Supabase"],
    github: "https://github.com/andrysdm",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Projects" />
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-[#27272A] bg-[#111113] p-6 hover:border-[#2563EB]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-[#FAFAFA] group-hover:text-[#2563EB] transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A] text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
