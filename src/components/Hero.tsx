"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiDocker,
  SiGit,
  SiLinux,
  SiSupabase,
  SiPrisma,
  SiSqlite,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

const terminalCode = `const developer = {
  name: "Andrys",
  location: "Cuba",
  experience: "1.5 years",
  languages: [
    "TypeScript",
    "JavaScript",
    "C++"
  ],
  frameworks: [
    "React",
    "Next.js",
    "React Native"
  ]
}`;

const techIcons = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next" },
  { icon: SiNodedotjs, label: "Node" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiGit, label: "Git" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiSupabase, label: "Supabase" },
  { icon: SiPrisma, label: "Prisma" },
  { icon: SiSqlite, label: "SQLite" },
];

function Typewriter({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-[#2563EB]">▌</span>
    </span>
  );
}

function TerminalPanel() {
  return (
    <div className="w-full rounded-xl border border-[#27272A] bg-[#111113] overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#27272A]">
        <span className="size-2.5 rounded-full bg-red-500" />
        <span className="size-2.5 rounded-full bg-yellow-500" />
        <span className="size-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-[#A1A1AA] font-mono">developer.ts</span>
      </div>
      <pre className="p-4 text-sm font-mono leading-relaxed text-[#A1A1AA] overflow-x-auto">
        <code>
          <Typewriter text={terminalCode} speed={20} />
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  const handleScroll = () => {
    const el = document.querySelector("#featured-project");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase"
            >
              Software Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA] leading-tight"
            >
              Andrys
              <br />
              Domínguez Moreno
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-lg"
            >
              Software developer specialized in React Native, Next.js and
              TypeScript. Passionate about building high-quality applications
              and solving complex problems through software engineering and
              competitive programming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={handleScroll}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-[#FAFAFA] text-sm font-medium hover:bg-[#3B82F6] transition-all duration-200"
              >
                View Projects
                <ArrowDown size={16} />
              </button>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#27272A] text-[#FAFAFA] text-sm font-medium hover:bg-[#111113] transition-all duration-200"
              >
                Download CV
              </a>
              <a
                href="https://github.com/andrysdm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#27272A] text-[#FAFAFA] text-sm font-medium hover:bg-[#111113] transition-all duration-200"
              >
                <FaGithub size={16} />
                View GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-10"
            >
              <p className="text-xs text-[#A1A1AA] mb-4 tracking-wide uppercase">
                Technologies I work with
              </p>
              <div className="flex flex-wrap gap-4">
                {techIcons.map((tech) => (
                  <div
                    key={tech.label}
                    className="group relative flex items-center gap-2"
                  >
                    <tech.icon className="size-5 text-[#A1A1AA] hover:text-[#2563EB] transition-colors" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-[#A1A1AA] bg-[#111113] px-2 py-1 rounded border border-[#27272A] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block"
          >
            <TerminalPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
