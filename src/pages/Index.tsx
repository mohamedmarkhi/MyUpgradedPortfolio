"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import SpaceBackground from '@/components/SpaceBackground';
// import { MadeWithMohamedMarkhi} from '@/components/made-with-medmarkhi';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#c6d8af]/30 selection:text-[#c6d8af] transition-colors duration-500">
      <SpaceBackground />
      <ThemeToggle />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 py-12 border-t border-border text-center bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm mb-4">
            © {new Date().getFullYear()} Mohamed MARKHI. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/mohamedmarkhi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Github
            </a>
            <a 
              href="https://www.linkedin.com/in/markhimohamed/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
          {/* <MadeWithMohamedMarkhi /> */}
        </div>
      </footer>
    </div>
  );
};

export default Index;