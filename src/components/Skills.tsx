"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiExpo,
  SiSqlite,
  SiPrisma,
  SiDocker,
  SiLinux,
  SiGit,
  SiCplusplus,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillGroup {
  category: string;
  items: { icon: IconType; label: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { icon: SiReact, label: "React" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiTailwindcss, label: "Tailwind" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: SiNodedotjs, label: "Node" },
      { icon: SiSupabase, label: "REST" },
      { icon: SiSupabase, label: "Supabase" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { icon: SiReact, label: "React Native" },
      { icon: SiExpo, label: "Expo" },
    ],
  },
  {
    category: "Database",
    items: [
      { icon: SiSqlite, label: "SQLite" },
      { icon: SiPrisma, label: "Prisma" },
      { icon: SiSupabase, label: "Supabase" },
    ],
  },
  {
    category: "Programming",
    items: [
      { icon: SiCplusplus, label: "C++" },
      { icon: SiReact, label: "Algorithms" },
      { icon: SiReact, label: "Competitive" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { icon: SiDocker, label: "Docker" },
      { icon: SiLinux, label: "Linux" },
      { icon: SiGit, label: "Git" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Skills" />
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-xl border border-[#27272A] bg-[#111113] p-5 hover:border-[#2563EB]/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-[#FAFAFA] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 text-xs text-[#A1A1AA]"
                  >
                    <item.icon className="size-4 text-[#2563EB]" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
