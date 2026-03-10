"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springY = useSpring(y, { stiffness: 400, damping: 25 });
  const cordHeight = useTransform(springY, [0, 60], [40, 100]);

  const handleDragEnd = () => {
    if (y.get() > 40) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    y.set(0);
  };

  return (
    <div className="fixed top-0 left-12 z-[60] flex flex-col items-center pointer-events-none">
      {/* The Cord */}
      <motion.div 
        style={{ height: cordHeight }}
        className="w-1 bg-gradient-to-b from-primary to-accent rounded-full origin-top"
      />
      
      {/* The Toggle Handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 60 }}
        dragElastic={0}
        style={{ y }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDragEnd={handleDragEnd}
        className="pointer-events-auto cursor-grab active:cursor-grabbing group"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            {theme === 'dark' ? (
              <Sun className="text-primary" size={24} />
            ) : (
              <Moon className="text-primary" size={24} />
            )}
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 40 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute top-3 left-full whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-primary bg-background px-2 py-1 rounded border border-primary/20 shadow-sm"
              >
                Pull to {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;