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
  <div className="flex-shrink-0 w-[280px] px-3 py-4">
    <div className="group/card relative overflow-hidden rounded-[32px] bg-card border border-border h-[320px] flex flex-col transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary">
      <div className="h-32 overflow-hidden bg-muted/50 flex items-center justify-center relative transition-colors group-hover/card:bg-primary/10">
        <Github className="text-primary/10 w-16 h-16 absolute group-hover/card:text-primary/20" />
        <div className="z-10 text-center p-4">
          <span className="text-[9px] uppercase tracking-widest font-bold text-primary-foreground bg-primary px-2 py-0.5 rounded-full">
            {repo.language || 'Code'}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Star size={12} className="text-primary" /> {repo.stargazers_count}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <GitFork size={12} /> {repo.forks_count}
          </div>
        </div>

        <h3 className="text-base font-bold text-foreground mb-2 line-clamp-1 group-hover/card:text-primary transition-colors">
          {repo.name.replace(/-/g, ' ')}
        </h3>
        <p className="text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-3">
          {repo.description || "A sophisticated project exploring modern web architectures and scalable solutions."}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-2 border-t border-border/50">
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70 transition-opacity flex items-center gap-1.5 text-xs font-bold">
              <ExternalLink size={14} /> Demo
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-bold">
            <Github size={14} /> Source
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

  // Duplicate repos for seamless infinite loop
  const duplicatedRepos = [...repos, ...repos, ...repos];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Live Repositories</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Directly synced from my GitHub. Hover to pause and explore.
          </p>
        </motion.div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="relative flex overflow-hidden group">
          {/* Gradient Overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -100 * repos.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: repos.length * 3, // Adjust speed here
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