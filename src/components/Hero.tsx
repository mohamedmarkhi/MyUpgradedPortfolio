"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, FileDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
              Full Stack Engineer
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-foreground mb-6 tracking-tight">
              Mohamed <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">MARKHI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              Architecting high-performance digital ecosystems with the MERN stack, Laravel, and AWS. 
              Turning complex logic into elegant, user-centric experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="/resume.pdf" download className="group bg-secondary text-primary px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-primary/10 transition-all border border-primary/20">
              Download CV
              <FileDown className="group-hover:translate-y-0.5 transition-transform" size={18} />
            </a>
            <div className="flex items-center gap-3 px-2">
              <a 
                href="https://github.com/mohamedmarkhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/markhimohamed/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;