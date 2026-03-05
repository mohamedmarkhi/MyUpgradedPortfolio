"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate Full Stack Developer based in Casablanca, dedicated to building 
              digital solutions that combine technical excellence with exceptional user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="text-primary" size={32} />,
                title: "Who I Am",
                desc: "A problem solver at heart with a deep love for clean code and scalable architecture."
              },
              {
                icon: <Target className="text-primary" size={32} />,
                title: "My Mission",
                desc: "To bridge the gap between complex business requirements and elegant software solutions."
              },
              {
                icon: <Rocket className="text-primary" size={32} />,
                title: "My Vision",
                desc: "Pushing the boundaries of web technology using modern stacks like MERN and Laravel."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all text-center"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;