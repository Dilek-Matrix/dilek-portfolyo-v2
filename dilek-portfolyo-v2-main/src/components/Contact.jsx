import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData, uiTranslations } from '../data/portfolioData';

export default function Contact({ lang }) {
  const profile = portfolioData[lang].profile;
  const t = uiTranslations[lang];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ success: false, loading: false, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, loading: false, message: t.formError });
      return;
    }
    
    setStatus({ success: false, loading: true, message: '' });
    
    // Simulate API request
    setTimeout(() => {
      setStatus({ 
        success: true, 
        loading: false, 
        message: t.formSuccess
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
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
    <section id="contact" className="py-24 bg-purple-50/10 relative border-t border-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-950 mb-2">{t.contactTitle}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-teal mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={itemVariants}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-purple-900 mb-4">{t.contactInfoTitle}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-sans mb-8">
                {t.contactInfoDesc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan border border-accent-cyan/20">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-450 uppercase tracking-wider">{t.contactEmailLabel}</h4>
                  <a href={`mailto:${profile.email}`} className="text-slate-700 text-sm hover:text-accent-cyan transition-colors mt-0.5 inline-block font-medium">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal border border-accent-teal/20">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-450 uppercase tracking-wider">{t.contactLocLabel}</h4>
                  <p className="text-slate-700 text-sm mt-0.5 font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-6">
              <h4 className="text-xs font-bold text-slate-405 uppercase tracking-wider mb-4">{t.contactSocialLabel}</h4>
              <div className="flex space-x-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-purple-100 flex items-center justify-center text-slate-500 hover:bg-accent-cyan hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                  title="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-purple-100 flex items-center justify-center text-slate-500 hover:bg-accent-cyan hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-8 border border-purple-100/50 space-y-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.formName}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-purple-100 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    placeholder={t.formNamePlaceholder}
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.formEmail}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-purple-100 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    placeholder={t.formEmailPlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.formSubject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-purple-100 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                  placeholder={t.formSubjectPlaceholder}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.formMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white border border-purple-100 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none"
                  placeholder={t.formMessagePlaceholder}
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-lg text-sm font-medium ${status.success ? 'bg-emerald-50 border border-emerald-200 text-emerald-600' : 'bg-red-50 border border-red-250 text-red-650'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-teal text-white font-semibold hover:shadow-lg hover:shadow-accent-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                {status.loading ? (
                  <span>{t.formSubmitting}</span>
                ) : (
                  <>
                    <span>{t.formSubmit}</span>
                    <FaPaperPlane className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
