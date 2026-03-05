"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', icon: <User size={18} />, href: '#about' },
    { name: 'Skills', icon: <Code2 size={18} />, href: '#skills' },
    { name: 'Projects', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          MM.
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;