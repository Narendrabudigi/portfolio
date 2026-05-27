import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tools and technologies I use to build world-class backend systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium border border-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
