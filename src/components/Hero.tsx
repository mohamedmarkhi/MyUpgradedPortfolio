"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              Full Stack Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Mohamed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">MARKHI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Crafting high-performance digital experiences with the MERN stack, Laravel, and AWS. 
              Bridging the gap between sophisticated design and robust architecture.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-all">
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <div className="flex items-center gap-4 px-4">
              <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;