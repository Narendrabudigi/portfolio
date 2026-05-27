import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT } from '../../constants';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="about" className="py-12 bg-slate-900/20">
      <div className="container mx-auto px-6 flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl w-full p-8 md:p-10 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Background Glow Inside Card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Expertise Focus
            </h2>
            
            <ul className="space-y-6">
              {ABOUT_CONTENT.bullets.map((bullet, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                    {bullet.text}
                    {bullet.highlight && <span className="text-white font-bold">{bullet.highlight}</span>}
                    {bullet.suffix && bullet.suffix}
                    {bullet.secondaryHighlight && <span className="text-white font-bold">{bullet.secondaryHighlight}</span>}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
