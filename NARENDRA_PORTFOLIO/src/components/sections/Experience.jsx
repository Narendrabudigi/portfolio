import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-slate-400">My professional path in the tech industry.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card relative"
              style={{ paddingLeft: '80px' }}
            >
              <div className="absolute left-8 top-12 bottom-12 w-px bg-slate-700/50 -translate-x-1/2" />
              <div className="absolute left-8 top-12 w-8 h-8 rounded-full bg-primary flex items-center justify-center -translate-x-1/2 border-4 border-slate-900 shadow-lg shadow-primary/20">
                <Briefcase className="w-4 h-4 text-slate-900" />
              </div>
              
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-slate-400 font-medium text-sm mt-1">{exp.company}</h4>
                  </div>
                  <span className="text-primary font-bold text-sm tracking-wider whitespace-nowrap bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 self-start">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="text-slate-500 space-y-3 mt-6">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary" />
                      <span className="leading-relaxed text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
