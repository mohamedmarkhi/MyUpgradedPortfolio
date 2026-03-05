"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <h2 className="text-4xl font-bold mb-8">Let's build something extraordinary.</h2>
              <p className="text-blue-100 mb-12 text-lg">
                Ready to take your project to the next level? I'm currently available for freelance work and full-time opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email Me</p>
                    <p className="font-semibold">mohamed.markhi@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Location</p>
                    <p className="font-semibold">Casablanca, Morocco</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 lg:p-16">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;