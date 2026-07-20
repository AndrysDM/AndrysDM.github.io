"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Featured Project" />
          <p className="mt-2 text-[#A1A1AA] text-sm">
            A commercial product I helped build
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 rounded-xl border border-[#27272A] bg-[#111113] overflow-hidden"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-xl font-semibold text-[#FAFAFA]">
                  BrainPress
                </h3>
                <p className="text-sm text-[#2563EB] mt-1">
                  React Native Developer
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fastlearningsystems.brainpress&hl=en-US&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] text-[#FAFAFA] text-sm font-medium hover:bg-[#3B82F6] transition-all"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </div>
            </div>

            <p className="mt-6 text-[#A1A1AA] leading-relaxed">
              BrainPress is an edtech platform that helps students create
              interactive study materials, practice with adaptive quizzes, and
              collaborate in real-time. As a React Native developer, I worked on
              the mobile application, implementing core features such as
              real-time collaboration, offline-first architecture, and seamless
              cross-platform UI.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
              >
                React Native
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
              >
                TypeScript
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
              >
                Expo
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
              >
                Supabase
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
              >
                WebSockets
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
