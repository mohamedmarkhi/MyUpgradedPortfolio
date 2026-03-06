"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Briefcase, Mail, FileDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl"
    >
      <div className="bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full px-3 md:px-4 py-2 flex items-center justify-between shadow-xl shadow-primary/5">
        {/* Logo */}
        <div className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-sm">
            M
          </div>
          <span className="font-black text-foreground tracking-tighter">MARKHI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-[11px] lg:text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary px-3 py-2 rounded-full transition-all flex items-center gap-2 hover:bg-primary/5"
            >
              <span className="hidden lg:inline">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a 
            href="/resume.pdf" 
            download
            className="hidden sm:flex p-2.5 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
            title="Download CV"
          >
            <FileDown size={18} />
          </a>
          
          <a 
            href="#contact"
            className="hidden sm:block bg-primary text-primary-foreground px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-auto rounded-b-[32px] border-primary/20 bg-background/95 backdrop-blur-xl pt-12 pb-8">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-2 items-center">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-4 w-full py-4 rounded-2xl hover:bg-primary/10 text-foreground font-black uppercase tracking-widest text-sm transition-all"
                  >
                    <span className="text-primary">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
                <div className="h-px w-full bg-border my-4" />
                <div className="flex flex-col gap-3 w-full px-6">
                  <a 
                    href="/resume.pdf" 
                    download
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-secondary text-primary font-black uppercase tracking-widest text-xs"
                  >
                    <FileDown size={18} /> Download CV
                  </a>
                  <a 
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;