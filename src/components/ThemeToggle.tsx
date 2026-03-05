"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Ghost } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const cordHeight = useTransform(springY, [0, 150], [60, 210]);

  const handleDragEnd = () => {
    if (y.get() > 100) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    y.set(0);
  };

  return (
    <div className="fixed top-0 left-12 z-[60] flex flex-col items-center pointer-events-none">
      {/* The Cord */}
      <motion.div 
        style={{ height: cordHeight }}
        className="w-1 bg-gradient-to-b from-[#0a1741] to-[#c6d8af] rounded-full origin-top"
      />
      
      {/* The Alien Handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 150 }}
        dragElastic={0.2}
        style={{ y }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDragEnd={handleDragEnd}
        className="pointer-events-auto cursor-grab active:cursor-grabbing group"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-[#c6d8af]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-12 h-12 bg-[#313e47] border-2 border-[#c6d8af] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Ghost 
              className="text-[#c6d8af]" 
              size={24} 
            />
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 40 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute top-3 left-full whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-[#c6d8af] bg-[#0a1741] px-2 py-1 rounded border border-[#c6d8af]/20"
              >
                Pull to Switch
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;