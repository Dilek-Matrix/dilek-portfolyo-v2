import React from 'react';
import { FaTerminal } from 'react-icons/fa';
import { uiTranslations } from '../data/portfolioData';

export default function Footer({ lang }) {
  const t = uiTranslations[lang];

  const menuItems = [
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.education, href: '#education' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-purple-100 bg-white/20 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-accent-cyan to-accent-teal flex items-center justify-center font-bold text-white text-sm">
            D
          </div>
          <span className="font-heading font-bold text-base tracking-wide text-purple-950">
            Dilek.dev
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-slate-500 hover:text-accent-cyan transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#terminal"
            className="flex items-center space-x-1 text-xs font-medium text-accent-teal hover:text-accent-cyan transition-colors"
          >
            <FaTerminal className="w-2.5 h-2.5" />
            <span>{t.terminal}</span>
          </a>
        </div>

        {/* Info */}
        <div className="text-center md:text-right text-xs text-slate-450 space-y-1">
          <p>© {new Date().getFullYear()} Dilek. {t.footerRights}</p>
          <p className="text-slate-400">{t.footerBuilt}</p>
        </div>
      </div>
    </footer>
  );
}
