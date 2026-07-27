import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, uiTranslations } from '../data/portfolioData';

export default function Timeline({ lang }) {
  const education = portfolioData[lang].education;
  const t = uiTranslations[lang];

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const cardLeftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardRightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="education" className="py-24 bg-purple-50/10 relative border-t border-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-950 mb-2">{t.educationTitle}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-teal mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={lineVariants}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan to-accent-teal origin-top"
          />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  
                  {/* Left / Right Card Wrap */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:order-last text-left'} pl-10 sm:pl-0`}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-100px' }}
                      variants={isEven ? cardLeftVariants : cardRightVariants}
                      className="glass-panel rounded-xl p-6 border border-purple-100 relative hover:border-purple-250 transition-colors shadow-sm"
                    >
                      {/* Hours Tag */}
                      <span className="inline-block px-2.5 py-1 rounded bg-accent-cyan/10 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
                        {edu.hours}
                      </span>
                      
                      <h3 className="font-heading text-lg font-bold text-purple-950">{edu.title}</h3>
                      <h4 className="text-xs font-semibold text-slate-500 mt-1">{edu.organization}</h4>
                      
                      <p className="text-slate-600 text-sm mt-4 font-sans leading-relaxed">
                        {edu.details}
                      </p>
                    </motion.div>
                  </div>

                  {/* Bullet Node Point */}
                  <div className="absolute left-2.5 sm:left-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-accent-cyan -translate-x-1/2 z-10 shadow-lg shadow-accent-cyan/20">
                    <span className="absolute -inset-1 rounded-full bg-accent-cyan/20 animate-ping"></span>
                  </div>

                  {/* Spacer for structural balance */}
                  <div className="hidden sm:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
