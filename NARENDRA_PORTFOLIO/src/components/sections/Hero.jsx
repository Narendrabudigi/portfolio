import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '../../constants';
import profileImg from '../../assets/profile.png';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 text-white tracking-tight">
              {HERO_CONTENT.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 tracking-wide uppercase">
              {HERO_CONTENT.subheading}
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-lg md:mx-0 mx-auto leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            
            <div className="flex flex-col items-center md:items-start gap-8">
              {/* Main Action Buttons */}
              <div className="flex items-center gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-primary text-slate-900 font-bold text-base hover:shadow-xl hover:shadow-primary/20 transition-all cursor-pointer"
                >
                  {HERO_CONTENT.cta}
                </motion.a>
                <motion.a
                  href={HERO_CONTENT.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-slate-800 text-white font-bold text-base border border-slate-700 hover:bg-slate-700 transition-all cursor-pointer"
                >
                  {HERO_CONTENT.resume}
                </motion.a>
              </div>

              {/* Social Media Link Icons */}
              <div className="flex items-center gap-6">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#fff" }}
                  className="text-slate-400 p-2 hover:bg-slate-800 rounded-lg transition-all"
                  title="GitHub Profile"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#0077b5" }}
                  className="text-slate-400 p-2 hover:bg-slate-800 rounded-lg transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image (Portrait Box) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 relative group"
          >
            {/* Main Image Container - Increased Height (Portrait) */}
            <div className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl relative z-10 transition-shadow duration-300 group-hover:shadow-primary/30">
              <img 
                src={profileImg} 
                alt={HERO_CONTENT.name} 
                className="w-full h-full object-cover"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>

            {/* Aesthetic Glow Accents (Portrait) */}
            <div className="absolute -inset-4 border border-primary/10 rounded-3xl blur-[2px] animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
