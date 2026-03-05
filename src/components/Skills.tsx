"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench, Cloud, Github, GitBranch } from 'lucide-react';

const SkillCategory = ({ title, icon, skills, delay }: { title: string, icon: React.ReactNode, skills: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-blue-500/50 transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-gray-400 rounded-md border border-zinc-200 dark:border-white/5">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Frontend Mastery",
      icon: <Layout size={24} />,
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "Figma"],
      delay: 0.1
    },
    {
      title: "Backend Architecture",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "PHP", "Laravel", "Blade"],
      delay: 0.2
    },
    {
      title: "Database & Modeling",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL", "Merise"],
      delay: 0.3
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Docker", "CI/CD"],
      delay: 0.4
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Postman", "Jira", "Agile"],
      delay: 0.5
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-zinc-500 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive suite of modern technologies I use to build scalable, secure, and beautiful applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <SkillCategory key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;