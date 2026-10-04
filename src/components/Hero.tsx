import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Download, Terminal, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen bg-gray-950 text-white flex items-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern background subtle overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Bio & Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <p className="text-blue-400 text-lg md:text-xl font-semibold mb-3 tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none">
            {personalInfo.name}{' '}
            <span className="text-blue-500">{personalInfo.nameHighlight}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6 leading-snug">
            {personalInfo.subtitle}
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            {personalInfo.bio}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Direct Resume Pill Button */}
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 border border-blue-400/40 hover:-translate-y-0.5 cursor-pointer"
                title="View & Print Resume"
              >
                <FileText className="w-4 h-4 text-blue-100" />
                <span>RESUME</span>
              </button>
            )}

            <a
              href="#projects"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 border border-blue-500/80 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>

            <a
              href="#certificates"
              className="px-5 py-3.5 text-gray-400 hover:text-white rounded-xl font-medium transition flex items-center gap-2 hover:bg-gray-900 border border-transparent hover:border-gray-800"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Certificates</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-10">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-600/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-blue-500 hover:bg-blue-600/10 transition-all"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Avatar & Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-md">
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-400/20 rounded-3xl blur-2xl transform -rotate-3 scale-95" />

            {/* Profile Frame Card */}
            <div className="relative bg-gray-900/90 border border-gray-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-blue-500/60 transition-all duration-500">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-800/80 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>portfolio.ts</span>
                </div>
              </div>

              {/* Avatar Center Graphic */}
              <div className="relative mx-auto w-56 h-56 md:w-64 md:h-64 my-2 flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 shadow-2xl shadow-blue-500/30">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-950 flex flex-col items-center justify-center text-center p-4 border border-blue-400/20 relative group-hover:scale-105 transition-transform duration-500">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2 shadow-inner">
                      <Sparkles className="w-10 h-10 text-blue-400 animate-pulse" />
                    </div>
                    <span className="font-mono font-black text-lg md:text-xl text-white tracking-wide">
                      {personalInfo.name}
                    </span>
                    <span className="text-xs text-blue-400 font-mono tracking-wider font-semibold">
                      {personalInfo.nameHighlight}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono mt-1">
                      ECE • SASI Institute
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
