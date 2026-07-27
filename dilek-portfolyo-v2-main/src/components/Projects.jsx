import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { portfolioData, uiTranslations } from '../data/portfolioData';

export default function Projects({ lang }) {
  const [filter, setFilter] = useState('All');
  const projects = portfolioData[lang].projects;
  const t = uiTranslations[lang];

  const categories = [
    { label: t.projectsFilterAll, value: 'All' },
    { label: t.projectsFilterReact, value: 'React' },
    { label: t.projectsFilterVanilla, value: 'JavaScript' },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-950 mb-2">{t.projects}</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {t.projectsSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-teal mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center space-x-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                filter === cat.value
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-teal text-white border-transparent shadow-lg shadow-accent-cyan/20'
                  : 'bg-white border-purple-100 text-slate-500 hover:text-accent-cyan hover:border-purple-250 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col justify-between h-full border border-purple-100/50 shadow-sm"
              >
                {/* Visual Header card decoration */}
                <div className="h-32 bg-purple-50/40 relative flex items-center justify-center border-b border-purple-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/5 to-accent-teal/5 opacity-40"></div>
                  <FaCode className="w-10 h-10 text-purple-250" />
                  
                  {/* Technology Badges */}
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/90 text-[10px] text-slate-600 border border-purple-100 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 text-left flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-purple-950 mb-2 hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-550 text-xs font-semibold mb-3 uppercase tracking-wider text-accent-teal">
                      {lang === 'tr' ? 'Rol' : 'Role'}: {project.role}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.projectsFeatures}</h4>
                    <ul className="text-xs text-slate-500 space-y-1.5 mb-6">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-accent-cyan select-none font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-purple-50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1 text-xs text-slate-500 hover:text-accent-cyan transition-colors"
                    >
                      <FaGithub className="w-4 h-4 text-slate-400 hover:text-accent-cyan" />
                      <span>GitHub</span>
                    </a>
                    
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1 text-xs text-slate-500 hover:text-accent-cyan transition-colors"
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5 text-slate-400 hover:text-accent-cyan" />
                        <span>{t.projectsDemo}</span>
                      </a>
                    ) : (
                      <span className="text-[10px] text-slate-400 italic">{t.projectsDemoRepo}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
