"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Badge } from "./ui/badge";

const experiences = [
  {
    role: "React Native Developer",
    company: "Fast Learning Systems",
    period: "2024 - 2025",
    description:
      "Developed and maintained the BrainPress mobile application using React Native. Implemented real-time collaboration features, offline-first architecture, and optimized performance for cross-platform deployment.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "WebSockets",
    ],
  },
  {
    role: "Software Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Built multiple full-stack applications for clients using Next.js, React, and Node.js. Developed custom solutions including inventory systems, e-commerce platforms, and management dashboards.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Experience" />
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#27272A]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-12"
              >
                <div className="absolute left-2.5 top-1.5 size-3.5 rounded-full border-2 border-[#2563EB] bg-[#09090B]" />

                <div className="rounded-xl border border-[#27272A] bg-[#111113] p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-[#FAFAFA]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#2563EB] mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-[#A1A1AA] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A] text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
