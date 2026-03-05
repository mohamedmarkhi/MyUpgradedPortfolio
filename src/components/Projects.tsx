"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, delay }: { title: string, description: string, tags: string[], image: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10"
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-semibold">
          <ExternalLink size={18} /> Live Demo
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
          <Github size={18} /> Source
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Enterprise SaaS Platform",
      description: "A full-scale MERN application with real-time analytics, multi-tenant architecture, and AWS deployment.",
      tags: ["MERN", "AWS", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      delay: 0.1
    },
    {
      title: "E-Commerce Engine",
      description: "High-performance Laravel Blade storefront with complex MySQL relations and custom payment gateway integration.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      delay: 0.2
    },
    {
      title: "DevOps Dashboard",
      description: "Internal tool for monitoring Docker containers and Jira task automation using Node.js and Postman APIs.",
      tags: ["Node.js", "Docker", "Jira"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      delay: 0.3
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Works</h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my most challenging and impactful projects, ranging from enterprise solutions to creative experiments.
            </p>
          </div>
          <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2">
            View All Projects <ExternalLink size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;