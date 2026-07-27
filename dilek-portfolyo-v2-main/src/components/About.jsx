import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCompass, FaGraduationCap, FaServer } from 'react-icons/fa';
import { portfolioData, uiTranslations } from '../data/portfolioData';

export default function About({ lang }) {
  const profile = portfolioData[lang].profile;
  const t = uiTranslations[lang];

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const statItems = [
    { icon: <FaGraduationCap className="text-accent-cyan" />, title: t.statHours, desc: t.statHoursVal },
    { icon: <FaServer className="text-accent-teal" />, title: t.statFocus, desc: t.statFocusVal },
    { icon: <FaCompass className="text-amber-500" />, title: t.statLocLabel, desc: profile.location },
  ];

  return (
    <section id="about" className="py-24 bg-purple-50/10 relative border-t border-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-950 mb-2">{t.about}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <FaUser className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-purple-900">{t.aboutTitle}</h3>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-light">
              {profile.about}
            </p>

            <div className="border-l-2 border-accent-teal pl-4 py-1 mt-6">
              <h4 className="font-heading font-semibold text-purple-950 mb-1">{t.aboutGoals}</h4>
              <p className="text-slate-500 text-sm italic leading-relaxed">
                {profile.goals}
              </p>
            </div>
          </motion.div>

          {/* Right: Stats and Visual Panel */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            <div className="glass-panel rounded-xl p-6 border border-purple-100/50 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-xl group-hover:bg-accent-cyan/10 transition-colors"></div>
              
              <h3 className="font-heading text-lg font-bold text-purple-950 mb-6">{t.aboutStatsTitle}</h3>
              
              <div className="space-y-6">
                {statItems.map((stat, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-50/50 flex items-center justify-center text-lg shrink-0 border border-purple-100">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.title}</h4>
                      <p className="text-slate-700 text-sm font-semibold mt-0.5">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick terminal banner inside About section */}
            <div className="bg-terminal-bg rounded-xl border border-purple-100 p-6 flex flex-col justify-between shadow-sm">
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                <span className="pl-2 text-[10px]">terminal-preview.sh</span>
              </div>
              <p className="font-mono text-xs text-slate-650 text-left">
                <span className="text-terminal-cyan font-bold">guest@dilek-dev:~$</span> cat motto.txt <br />
                <span className="text-accent-teal font-medium">"{profile.motto}"</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
