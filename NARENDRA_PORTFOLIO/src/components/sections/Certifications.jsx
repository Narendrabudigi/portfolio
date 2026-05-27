import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../../constants';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications <span className="text-gradient">& Achievements</span></h2>
          <p className="text-slate-400">Professional recognition and specialized training.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-slate-700/50 flex items-center justify-between group hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <p className="text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              <a href={cert.link} className="p-2 rounded-full hover:bg-slate-800 text-slate-500 hover:text-white transition-all">
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
