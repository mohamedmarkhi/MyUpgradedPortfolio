"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Ghost } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const y = useMotionValue(0);
  const [isPulling, setIsPulling] = useState(false);

  // Physics for the cord
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const cordHeight = useTransform(springY, [0, 150], [60, 210]);

  const handleDragEnd = () => {
    if (y.get() > 100) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    y.set(0);
    setIsPulling(false);
  };

  return (
    <div className="fixed top-0 right-12 z-[60] flex flex-col items-center pointer-events-none">
      {/* The Cord */}
      <motion.div 
        style={{ height: cordHeight }}
        className="w-1 bg-gradient-to-b from-blue-500 to-emerald-400 rounded-full origin-top"
      />
      
      {/* The Alien Handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 150 }}
        dragElastic={0.2}
        style={{ y }}
        onDragStart={() => setIsPulling(true)}
        onDragEnd={handleDragEnd}
        className="pointer-events-auto cursor-grab active:cursor-grabbing group"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-12 h-12 bg-white dark:bg-zinc-900 border-2 border-blue-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Ghost 
              className={`transition-colors ${theme === 'dark' ? 'text-emerald-400' : 'text-blue-600'}`} 
              size={24} 
            />
          </div>
          {isPulling && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-blue-400"
            >
              Pull to Switch
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;