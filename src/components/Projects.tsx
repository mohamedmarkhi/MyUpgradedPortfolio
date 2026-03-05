"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, GitFork } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const ProjectCard = ({ repo }: { repo: Repo }) => (
  <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4 py-8">
    <div className="group/card relative overflow-hidden rounded-[40px] bg-zinc-50 dark:bg-[#313e47] border border-zinc-200 dark:border-[#c6d8af]/10 h-full flex flex-col transition-all duration-500 group-hover/carousel:opacity-40 hover:!opacity-100 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:bg-primary hover:border-primary dark:hover:bg-primary dark:hover:border-primary">
      <div className="aspect-video overflow-hidden bg-[#0a1741]/10 dark:bg-[#0a1741]/40 flex items-center justify-center relative transition-colors group-hover/card:bg-white/10">
        <Github className="text-[#c6d8af]/20 w-20 h-20 absolute group-hover/card:text-white/20" />
        <div className="z-10 text-center p-6">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#0a1741] dark:text-[#c6d8af] bg-[#c6d8af] dark:bg-[#0a1741] px-3 py-1 rounded-full group-hover/card:bg-white group-hover/card:text-primary">
            {repo.language || 'Code'}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover/card:text-white/70">
              <Star size={14} className="text-yellow-500 group-hover/card:text-yellow-300" /> {repo.stargazers_count}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover/card:text-white/70">
              <GitFork size={14} /> {repo.forks_count}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-[#c6d8af] mb-3 line-clamp-1 group-hover/card:text-white">{repo.name.replace(/-/g, ' ')}</h3>
        <p className="text-zinc-500 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3 group-hover/card:text-white/80">
          {repo.description || "A sophisticated project exploring modern web architectures and scalable solutions."}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(repo.topics?.slice(0, 3) || []).map(topic => (
            <span key={topic} className="text-[9px] uppercase font-bold text-[#0a1741] dark:text-[#c6d8af] border border-[#0a1741]/10 dark:border-[#c6d8af]/20 px-2 py-0.5 rounded group-hover/card:border-white/30 group-hover/card:text-white">
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-[#0a1741] dark:text-[#c6d8af] hover:opacity-70 transition-opacity flex items-center gap-2 text-sm font-semibold group-hover/card:text-white">
              <ExternalLink size={16} /> Demo
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold group-hover/card:text-white/70 group-hover/card:hover:text-white">
            <Github size={16} /> Source
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mohamedmarkhi/repos?sort=updated&per_page=10');
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-[#c6d8af] mb-4">Live Repositories</h2>
            <p className="text-zinc-500 dark:text-gray-400 max-w-xl">
              Directly synced from my GitHub. These represent my latest explorations in full-stack development and architecture.
            </p>
          </motion.div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="p-4 rounded-full border border-zinc-200 dark:border-[#c6d8af]/10 text-zinc-900 dark:text-[#c6d8af] hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-4 rounded-full border border-zinc-200 dark:border-[#c6d8af]/10 text-zinc-900 dark:text-[#c6d8af] hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="overflow-hidden group/carousel" ref={emblaRef}>
            <div className="flex -mx-4">
              {repos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;