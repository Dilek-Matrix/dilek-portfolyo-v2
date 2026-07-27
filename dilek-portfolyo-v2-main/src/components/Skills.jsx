import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaTerminal, FaTools, FaCheckDouble } from 'react-icons/fa';
import { portfolioData, uiTranslations } from '../data/portfolioData';

export default function Skills({ lang }) {
  const skills = portfolioData[lang].skills;
  const t = uiTranslations[lang];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-950 mb-2">{t.skills}</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {t.skillsSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-teal mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Frontend Category */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-6 border border-purple-100 text-left shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <FaLaptopCode className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-purple-950">{t.skillsFront}</h3>
            </div>
            
            <div className="space-y-4">
              {skills.frontend.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-600">{skill.name}</span>
                    <span className="text-accent-cyan font-bold">{skill.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-purple-50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-accent-cyan to-accent-teal rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Systems Category */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-6 border border-purple-100 text-left shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 border border-pink-100">
                <FaTerminal className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-purple-950">{t.skillsSys}</h3>
            </div>

            <div className="space-y-4">
              {skills.systems.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-600">{skill.name}</span>
                    <span className="text-pink-500 font-bold">{skill.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-pink-50/50 rounded-full overflow-hidden border border-pink-50/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-450 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools Category */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-6 border border-purple-100 text-left shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 border border-purple-100">
                <FaTools className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-purple-950">{t.skillsTools}</h3>
            </div>

            <div className="space-y-4">
              {skills.tools.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-600">{skill.name}</span>
                    <span className="text-purple-600 font-bold">{skill.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-purple-50/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quality & Professional */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-6 border border-purple-100 text-left flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100">
                  <FaCheckDouble className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-purple-950">{t.skillsQuality}</h3>
              </div>

              <div className="space-y-4 mb-6">
                {skills.quality.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600">{skill.name}</span>
                      <span className="text-amber-500 font-bold">{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-amber-50/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50/40 rounded-lg p-4 border border-purple-100/60 shadow-inner">
              <h4 className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-2">{t.skillsProfessional}</h4>
              <ul className="text-xs text-slate-650 space-y-1.5">
                {skills.professional.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-accent-cyan font-bold select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
