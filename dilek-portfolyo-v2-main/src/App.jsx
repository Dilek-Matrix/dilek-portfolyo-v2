import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import InteractiveTerminal from './components/InteractiveTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { uiTranslations } from './data/portfolioData';

function App() {
  const [lang, setLang] = useState('tr');
  const t = uiTranslations[lang];

  return (
    <div className="min-h-screen bg-primary text-slate-700 flex flex-col font-sans selection:bg-accent-cyan/20 selection:text-purple-950 overflow-hidden">
      {/* Background Decorative Mesh Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf606_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf606_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20"></div>

      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Intro */}
      <Hero lang={lang} />

      {/* About Section */}
      <About lang={lang} />

      {/* Skills Visual Grid */}
      <Skills lang={lang} />

      {/* Timeline of Academy Education */}
      <Timeline lang={lang} />

      {/* Filterable Project Showcase */}
      <Projects lang={lang} />

      {/* System Console / Terminal Simulator Section */}
      <section id="terminal" className="py-24 relative overflow-hidden bg-purple-50/15 border-y border-purple-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/2 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-950 mb-2">{t.terminalTitle}</h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              {t.terminalSubtitle}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-teal mx-auto rounded-full mt-4"></div>
          </div>
          
          <InteractiveTerminal lang={lang} />
          
          {/* Tip */}
          <div className="mt-8 text-center text-xs text-slate-500 font-mono">
            {t.terminalTip}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact lang={lang} />

      {/* Footer copyright */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
