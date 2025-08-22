import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Hero from "~/components/Hero";
import Skills from "~/components/Skills";
import Projects from "~/components/Projects";
import Experience from "~/components/Experience";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export function Welcome() {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900' : 'bg-gray-100';
  }, [darkMode]);
  return (
<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <Hero darkMode={darkMode}/>
  <Skills darkMode={darkMode}/>
  <Projects darkMode={darkMode}/>
  <Experience darkMode={darkMode}/>
  {/* <Contact darkMode={darkMode}/> */}
  <Footer darkMode={darkMode === true ? 'bg-gray-900' : 'bg-gray-100'} />
</main>
  );
}

