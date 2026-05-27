import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { LEADERSHIP } from '../../constants';

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Leadership <span className="text-gradient">& Impact</span></h2>
          <p className="text-slate-400">Roles where I led teams and drove community initiatives.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {LEADERSHIP.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-slate-700/50 flex gap-6"
            >
              <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Users className="text-secondary w-6 h-6" />
              </div>
              <div>
                <span className="text-primary font-bold text-sm tracking-wider uppercase">{item.period}</span>
                <h3 className="text-2xl font-bold mb-2 mt-1">{item.role}</h3>
                <h4 className="text-slate-400 font-medium mb-4">{item.organization}</h4>
                <ul className="text-slate-500 space-y-2">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary/40" />
                      <span className="leading-relaxed">{point}</span>
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

export default Leadership;
