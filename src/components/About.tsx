"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  const items = [
    {
      icon: <User className="text-[#0a1741] dark:text-[#c6d8af]" size={32} />,
      title: "Who I Am",
      desc: "A problem solver at heart with a deep love for clean code and scalable architecture.",
      color: "bg-blue-500/5"
    },
    {
      icon: <Target className="text-[#0a1741] dark:text-[#c6d8af]" size={32} />,
      title: "My Mission",
      desc: "To bridge the gap between complex business requirements and elegant software solutions.",
      color: "bg-emerald-500/5"
    },
    {
      icon: <Rocket className="text-[#0a1741] dark:text-[#c6d8af]" size={32} />,
      title: "My Vision",
      desc: "Pushing the boundaries of web technology using modern stacks like MERN and Laravel.",
      color: "bg-purple-500/5"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c6d8af]/10 border border-[#c6d8af]/20 text-[#0a1741] dark:text-[#c6d8af] text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>The Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#0a1741] dark:text-[#c6d8af]">Crafting Digital Excellence</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Based in Casablanca, I transform complex ideas into seamless digital experiences. 
              My approach combines technical rigor with a relentless focus on user-centric design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-10 rounded-[40px] bg-card border border-border hover:border-[#c6d8af] transition-all relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c6d8af]/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#c6d8af]/20 transition-colors" />
                
                <div className="mb-8 w-16 h-16 rounded-2xl bg-[#c6d8af]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-[#0a1741] dark:text-[#c6d8af]">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {item.desc}
                </p>
                
                <div className="mt-8 h-1 w-12 bg-[#c6d8af] rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;