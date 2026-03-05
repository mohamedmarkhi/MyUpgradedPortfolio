"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', icon: <User size={16} />, href: '#about' },
    { name: 'Skills', icon: <Code2 size={16} />, href: '#skills' },
    { name: 'Projects', icon: <Briefcase size={16} />, href: '#projects' },
    { name: 'Contact', icon: <Mail size={16} />, href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl"
    >
      <div className="bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full px-4 py-2 flex items-center justify-between shadow-xl shadow-primary/5">
        <div className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-sm">
            M
          </div>
          <span className="font-bold text-foreground hidden sm:block">MARKHI</span>
        </div>

        <div className="flex items-center gap-1 md:gap-4">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary px-3 py-2 rounded-full transition-all flex items-center gap-2 hover:bg-primary/5"
            >
              <span className="hidden md:inline">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs md:text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;