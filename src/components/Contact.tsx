"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Briefcase, Rocket } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Let's build something extraordinary.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your project to the next level? I'm currently available for freelance work and part-time opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Part 1: Hire Me / General Availability */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 lg:p-12 rounded-[40px] bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Hire Me</h3>
                  <p className="text-muted-foreground">General inquiries & roles</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Me</p>
                    <a href="mailto:markhimohamed@outlook.fr" className="text-lg font-semibold hover:text-primary transition-colors">
                      markhimohamed@outlook.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                    <p className="text-lg font-semibold">Al Hoceima, Morocco</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-3xl bg-primary/5 border border-primary/10">
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  "I'm always looking for exciting new challenges and teams where I can contribute my full-stack expertise."
                </p>
              </div>
            </motion.div>
            
            {/* Part 2: Build Something / Project Inquiry */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 lg:p-12 rounded-[40px] bg-primary text-primary-foreground shadow-2xl shadow-primary/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Rocket size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Build Something</h3>
                  <p className="text-primary-foreground/70">Start a new project</p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/50 focus:bg-white/20 outline-none transition-all"
                    placeholder="Your Name"
                  />
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/50 focus:bg-white/20 outline-none transition-all"
                    placeholder="Your Email"
                  />
                </div>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/50 focus:bg-white/20 outline-none transition-all"
                  placeholder="Project Type (e.g. Web App, E-commerce)"
                />
                <textarea 
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/50 focus:bg-white/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your vision..."
                />
                <button className="w-full bg-white text-primary font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-secondary transition-all transform active:scale-[0.98]">
                  Send Project Inquiry <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;