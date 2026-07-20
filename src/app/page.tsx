"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <Experience />
        <Projects />
        <Skills />
        <CompetitiveProgramming />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
