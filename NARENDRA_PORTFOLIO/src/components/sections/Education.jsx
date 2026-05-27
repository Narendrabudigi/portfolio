import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../../constants';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Academic <span className="text-gradient">Background</span></h2>
          <p className="text-slate-400">Strong foundation in computer science and backend development.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-slate-700/50 flex gap-6"
            >
              <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <GraduationCap className="text-secondary w-6 h-6" />
              </div>
              <div>
                <span className="text-primary font-bold text-sm">{edu.year}</span>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <h4 className="text-slate-400 font-medium mb-3">{edu.institution}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
