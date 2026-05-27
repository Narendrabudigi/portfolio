import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../../constants';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my expertise in backend engineering, database design, and system architecture.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-primary/20 backdrop-blur-sm transition-all duration-300 flex flex-col group"
            >
              {/* Project Image Container */}
              <div className="h-52 overflow-hidden relative">
                {/* Individual Gradient Overlay to match theme */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color || 'from-primary/20 to-transparent'} z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Bullets */}
                <ul className="mb-6 space-y-2 flex-grow">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/30 group-hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> View Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-colors group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
