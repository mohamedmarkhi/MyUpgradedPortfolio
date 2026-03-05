"use client";

import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image }: { title: string, description: string, tags: string[], image: string }) => (
  <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
    <div className="group relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-blue-500 dark:text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{title}</h3>
        <p className="text-zinc-500 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="flex items-center gap-4 mt-auto">
          <a href="#" className="text-zinc-900 dark:text-white hover:text-blue-500 transition-colors flex items-center gap-2 text-sm font-semibold">
            <ExternalLink size={18} /> Preview
          </a>
          <a href="https://github.com/mohamedmarkhi" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
            <Github size={18} /> Source
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const projects = [
    {
      title: "Enterprise SaaS Platform",
      description: "A full-scale MERN application with real-time analytics, multi-tenant architecture, and AWS deployment.",
      tags: ["MERN", "AWS", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "E-Commerce Engine",
      description: "High-performance Laravel Blade storefront with complex MySQL relations and custom payment gateway integration.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "DevOps Dashboard",
      description: "Internal tool for monitoring Docker containers and Jira task automation using Node.js and Postman APIs.",
      tags: ["Node.js", "Docker", "Jira"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Real-time Chat App",
      description: "Scalable messaging platform built with Socket.io, Express, and MongoDB for instant communication.",
      tags: ["Socket.io", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Featured Works</h2>
            <p className="text-zinc-500 dark:text-gray-400 max-w-xl">
              A selection of my most challenging and impactful projects, ranging from enterprise solutions to creative experiments.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="p-4 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-4 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;