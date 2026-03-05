"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Cloud, 
  Wrench, Cpu, Zap, Layout
} from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }: { title: string, icon: any, skills: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-8 rounded-[32px] bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors" />
    
    <div className="flex items-start justify-between mb-6">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
        <Icon size={28} />
      </div>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
        ))}
      </div>
    </div>

    <h3 className="text-xl font-black mb-4 text-foreground group-hover:text-primary transition-colors">{title}</h3>
    
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-secondary text-primary rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: Layout,
      skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS"],
      delay: 0.1
    },
    {
      title: "Backend Systems",
      icon: Server,
      skills: ["Node.js", "Express", "Laravel", "PHP", "REST APIs"],
      delay: 0.2
    },
    {
      title: "Data Management",
      icon: Database,
      skills: ["MongoDB", "MySQL"],
      delay: 0.3
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["AWS", "Docker", "CI/CD", "Vercel"],
      delay: 0.4
    },
    {
      title: "System Analysis & Design",
      icon: Cpu,
      skills: ["Merise", "StarUML"],
      delay: 0.5
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: ["Git", "Postman", "Jira", "Agile", "Linux"],
      delay: 0.6
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6"
          >
            <Zap size={14} />
            <span>Technical Arsenal</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tight">
            Powering <span className="text-primary">Innovation</span> with Modern Tech.
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            A curated selection of technologies I've mastered to build world-class digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <SkillCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;