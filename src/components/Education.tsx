"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Education" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 rounded-xl border border-[#27272A] bg-[#111113] p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center shrink-0">
              <GraduationCap className="size-6 text-[#2563EB]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FAFAFA]">
                Universidad de La Habana
              </h3>
              <p className="text-sm text-[#2563EB] mt-0.5">
                Licenciatura en Física
              </p>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                Studied physics with a strong foundation in mathematics,
                analytical thinking, and computational modeling. Developed a
                rigorous approach to problem-solving that complements software
                engineering practice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
