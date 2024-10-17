"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
//import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  console.log(activeSection)
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar activeSection={activeSection} /> */}
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Blog setActiveSection={setActiveSection} />
        <Testimonials setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </div>
  );
}
