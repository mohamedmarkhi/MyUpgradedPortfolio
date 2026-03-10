"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Briefcase, Zap, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").transform(str => str.trim()),
  email: z.string().email("Please enter a valid email address").transform(str => str.trim()),
  projectType: z.string().min(3, "Please specify the project type").transform(str => str.trim()),
  message: z.string().min(10, "Message must be at least 10 characters").transform(str => str.trim()),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send");
    }

    toast.success("Inquiry sent successfully! I'll get back to you soon.");
    reset();

    } catch (error) {
      console.error(error);
      toast.error("Failed to send inquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-7xl font-black mb-6 text-foreground tracking-tight">
                Let's build something <span className="text-primary">extraordinary</span>.
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Ready to take your project to the next level? I'm currently available for freelance work and part-time opportunities.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Part 1: Hire Me / General Availability */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-14 rounded-[32px] md:rounded-[48px] bg-card border border-border hover:border-primary/40 transition-all duration-500 group shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">Hire Me</h3>
                  <p className="text-muted-foreground font-bold uppercase tracking-widest text-[9px] md:text-[10px]">General inquiries & roles</p>
                </div>
              </div>

              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center gap-4 md:gap-6 group/item">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Email Me</p>
                    <a href="mailto:markhimohamed@outlook.fr" className="text-base md:text-xl font-bold hover:text-primary transition-colors truncate block">
                      markhimohamed@outlook.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group/item">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                    <p className="text-base md:text-xl font-bold">Al Hoceima, Morocco</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-secondary/50 border border-primary/10 relative">
                <MessageSquare className="absolute top-4 right-4 text-primary/20" size={20} />
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground italic font-medium">
                  "I'm always looking for exciting new challenges and teams where I can contribute my full-stack expertise."
                </p>
              </div>
            </motion.div>
            
            {/* Part 2: Launch Your Vision / Project Inquiry */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-14 rounded-[32px] md:rounded-[48px] bg-card border border-border hover:border-primary/40 transition-all duration-500 group shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors" />

              <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Zap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">Launch Vision</h3>
                  <p className="text-muted-foreground font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Start a custom project</p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <input 
                      {...register("name")}
                      type="text" 
                      className={`w-full bg-secondary/50 border ${errors.name ? 'border-destructive' : 'border-border'} rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background outline-none transition-all font-medium`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-[9px] md:text-[10px] font-bold text-destructive uppercase tracking-wider px-2">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <input 
                      {...register("email")}
                      type="email" 
                      className={`w-full bg-secondary/50 border ${errors.email ? 'border-destructive' : 'border-border'} rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background outline-none transition-all font-medium`}
                      placeholder="Your Email"
                    />
                    {errors.email && <p className="text-[9px] md:text-[10px] font-bold text-destructive uppercase tracking-wider px-2">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <input 
                    {...register("projectType")}
                    type="text" 
                    className={`w-full bg-secondary/50 border ${errors.projectType ? 'border-destructive' : 'border-border'} rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background outline-none transition-all font-medium`}
                    placeholder="Project Type (e.g. Web App, E-commerce)"
                  />
                  {errors.projectType && <p className="text-[9px] md:text-[10px] font-bold text-destructive uppercase tracking-wider px-2">{errors.projectType.message}</p>}
                </div>
                <div className="space-y-2">
                  <textarea 
                    {...register("message")}
                    rows={3}
                    className={`w-full bg-secondary/50 border ${errors.message ? 'border-destructive' : 'border-border'} rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background outline-none transition-all resize-none font-medium`}
                    placeholder="Tell me about your vision..."
                  />
                  {errors.message && <p className="text-[9px] md:text-[10px] font-bold text-destructive uppercase tracking-wider px-2">{errors.message.message}</p>}
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all transform active:scale-[0.98] shadow-xl shadow-primary/20 uppercase tracking-widest text-[10px] md:text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Project Inquiry"} <Send size={18} />
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