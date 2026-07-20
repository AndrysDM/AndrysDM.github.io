"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Badge } from "./ui/badge";
import { SiCodeforces, SiCplusplus } from "react-icons/si";

const skills = [
  "Problem Solving",
  "Algorithms",
  "Optimization",
  "Data Structures",
];

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Competitive Programming" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 rounded-xl border border-[#27272A] bg-[#111113] p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex gap-3 shrink-0">
              <div className="size-12 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center">
                <SiCodeforces className="size-6 text-[#2563EB]" />
              </div>
              <div className="size-12 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center">
                <SiCplusplus className="size-6 text-[#2563EB]" />
              </div>
            </div>

            <div>
              <p className="text-[#A1A1AA] leading-relaxed">
                I actively participate in competitive programming contests on
                Codeforces, solving algorithmic problems using C++. This
                practice strengthens my ability to write efficient code, think
                critically under pressure, and design optimal solutions for
                complex computational problems — skills that directly translate
                to building performant software.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
