import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { uiTranslations } from '../data/portfolioData';

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = uiTranslations[lang];

  const menuItems = [
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.education, href: '#education' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'tr' ? 'en' : 'tr');
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-purple-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-cyan to-accent-teal flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-accent-cyan/20 group-hover:scale-105 transition-transform duration-200">
            D
          </div>
          <span className="font-heading font-bold text-lg tracking-wide bg-gradient-to-r from-purple-950 to-slate-600 bg-clip-text text-transparent group-hover:from-purple-950 group-hover:to-accent-cyan transition-colors">
            Dilek.dev
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-accent-cyan transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent-cyan after:transition-all after:duration-350 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#terminal"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/35 text-xs font-semibold text-accent-cyan hover:bg-accent-cyan/25 transition-all duration-200"
          >
            <FaTerminal className="w-3 h-3" />
            <span>{t.terminal}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-md border border-purple-200 hover:border-accent-cyan text-xs font-semibold text-slate-600 hover:text-accent-cyan transition-all cursor-pointer"
            title={lang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
          >
            <FaGlobe className="w-3.5 h-3.5 text-slate-500" />
            <span className="uppercase">{lang === 'tr' ? 'en' : 'tr'}</span>
          </button>
        </div>

        {/* Mobile Menu Button / Language Switcher */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-2 py-1 rounded border border-purple-250 text-xs font-semibold text-slate-600"
          >
            <FaGlobe className="w-3 h-3" />
            <span className="uppercase">{lang === 'tr' ? 'en' : 'tr'}</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-purple-950 transition-colors focus:outline-none"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 border-b border-purple-100 px-4 py-4"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-accent-cyan transition-colors text-left"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#terminal"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-1.5 px-4 py-2 rounded-md bg-accent-cyan/15 border border-accent-cyan/30 text-sm font-semibold text-accent-cyan hover:bg-accent-cyan/25 transition-all"
              >
                <FaTerminal className="w-3.5 h-3.5" />
                <span>{t.terminal} Console</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
