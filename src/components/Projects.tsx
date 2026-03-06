"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

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
  <div className="flex-shrink-0 w-[280px] sm:w-[300px] px-3 sm:px-4 py-6">
    <div className="group/card relative overflow-hidden rounded-[32px] bg-card border border-border h-[340px] flex flex-col transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
      {/* Header Area */}
      <div className="h-32 overflow-hidden bg-secondary/50 flex items-center justify-center relative transition-colors group-hover/card:bg-primary/5">
        <Github className="text-primary/5 w-20 h-20 absolute group-hover/card:text-primary/10 transition-colors" />
        <div className="z-10">
          <span className="text-[10px] uppercase tracking-widest font-black text-primary-foreground bg-primary px-3 py-1 rounded-full shadow-sm">
            {repo.language || 'Project'}
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-primary">
            <Star size={14} fill="currentColor" /> {repo.stargazers_count}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground">
            <GitFork size={14} /> {repo.forks_count}
          </div>
        </div>

        <h3 className="text-lg font-black text-foreground mb-2 line-clamp-1 group-hover/card:text-primary transition-colors">
          {repo.name.replace(/-/g, ' ')}
        </h3>
        
        <p className="text-foreground/70 text-sm mb-4 leading-relaxed line-clamp-3 font-medium">
          {repo.description || "A high-performance digital solution built with modern web standards and scalable architecture."}
        </p>

        <div className="flex items-center gap-6 mt-auto pt-4 border-t border-border">
          {repo.homepage && (
            <a 
              href={repo.homepage} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-tight"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-tight"
          >
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

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mohamedmarkhi/repos?sort=updated&per_page=15');
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

  const duplicatedRepos = [...repos, ...repos, ...repos];

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-foreground mb-4">Live Repositories</h2>
          <p className="text-foreground/60 font-medium max-w-xl mx-auto">
            Real-time projects fetched directly from GitHub.
          </p>
        </motion.div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="relative flex overflow-hidden group py-4">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -100 * repos.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: repos.length * 4,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            <div className="flex">
              {duplicatedRepos.map((repo, idx) => (
                <ProjectCard key={`${repo.id}-${idx}`} repo={repo} />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;