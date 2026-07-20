"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-xl border-b border-[#27272A]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <button
          onClick={() => handleClick("#")}
          className="text-sm font-medium tracking-tight text-[#FAFAFA] hover:text-[#2563EB] transition-colors"
        >
          Andrys Domínguez
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-b border-[#27272A] bg-[#09090B]/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
