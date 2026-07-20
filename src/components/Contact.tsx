"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Mail, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: FaGithub,
    label: "andrysdm",
    href: "https://github.com/andrysdm",
    description: "Check my repositories",
  },
  {
    icon: Mail,
    label: "andrysmoreno4@gmail.com",
    href: "mailto:andrysmoreno4@gmail.com",
    description: "Send me an email",
  },
  {
    icon: SiCodeforces,
    label: "Codeforces",
    href: "https://codeforces.com/profile/andrys",
    description: "View my competitive programming profile",
  },
];

function GitHubStats() {
  return (
    <div className="rounded-xl border border-[#27272A] bg-[#111113] p-6">
      <h3 className="text-sm font-semibold text-[#FAFAFA] mb-4">
        GitHub Activity
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-2xl font-bold text-[#FAFAFA]">8+</p>
          <p className="text-xs text-[#A1A1AA] mt-1">Repositories</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#FAFAFA]">TypeScript</p>
          <p className="text-xs text-[#A1A1AA] mt-1">Main Language</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#FAFAFA]">Active</p>
          <p className="text-xs text-[#A1A1AA] mt-1">Contributions</p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Contact" />
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center justify-between rounded-xl border border-[#27272A] bg-[#111113] p-5 hover:border-[#2563EB]/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="size-5 text-[#2563EB]" />
                  <div>
                    <p className="text-sm font-medium text-[#FAFAFA]">
                      {link.label}
                    </p>
                    <p className="text-xs text-[#A1A1AA]">
                      {link.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-[#A1A1AA] group-hover:text-[#FAFAFA] transition-colors" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="space-y-4"
          >
            <GitHubStats />

            <a
              href="mailto:andrysmoreno4@gmail.com"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#2563EB] text-[#FAFAFA] text-sm font-medium hover:bg-[#3B82F6] transition-all"
            >
              <Mail size={16} />
              Let&apos;s work together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
