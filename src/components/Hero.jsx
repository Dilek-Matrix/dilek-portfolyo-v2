import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { portfolioData, uiTranslations } from '../data/portfolioData';

export default function Hero({ lang }) {
  const profile = portfolioData[lang].profile;
  const t = uiTranslations[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-purple-50/30 to-transparent">
      {/* Decorative Light Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 text-center z-10"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping"></span>
          <span>{t.badgeText}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-purple-950 tracking-tight mb-4"
        >
          {t.welcome} <span className="bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent">{profile.name}</span>
        </motion.h1>

        {/* Dynamic Subheading / Role */}
        <motion.h2 
          variants={itemVariants}
          className="font-heading text-xl sm:text-2xl md:text-3xl text-slate-700 font-semibold tracking-wide mb-6"
        >
          {profile.role} &amp; <span className="text-accent-teal font-bold">{t.systemsSubtitle}</span>
        </motion.h2>

        {/* Motto */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 italic font-light leading-relaxed mb-10"
        >
          "{profile.motto}"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-teal text-white font-semibold hover:shadow-lg hover:shadow-accent-cyan/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>{t.ctaProjects}</span>
            <FaArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-white border border-purple-100 hover:border-accent-cyan text-slate-750 hover:bg-purple-50/20 transition-all duration-200 shadow-sm"
          >
            <FaEnvelope className="w-4 h-4 text-accent-cyan" />
            <span>{t.ctaContact}</span>
          </a>

          <button
            onClick={() => alert(lang === 'tr' ? "Özgeçmiş indirme simülasyonu tetiklendi." : "CV download simulation triggered.")}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-transparent border border-dashed border-purple-200 hover:border-accent-teal text-slate-500 hover:text-accent-teal transition-all duration-200"
          >
            <FaFileDownload className="w-4 h-4" />
            <span>{t.ctaCv}</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
