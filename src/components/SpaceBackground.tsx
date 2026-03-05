"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  const stars = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            top: '110%',
            left: `${(Math.random() * 100)}%`,
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute w-1 h-1 bg-[#c6d8af] rounded-full blur-[1px]"
        />
      ))}
      
      {/* Distant Planets/Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#c6d8af]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0a1741]/20 rounded-full blur-[120px]" />
    </div>
  );
};

export default SpaceBackground;