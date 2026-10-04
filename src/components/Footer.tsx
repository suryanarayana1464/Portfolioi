import React, { useState, useEffect } from 'react';
import { ChevronUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-800 text-white relative">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col items-center text-center">
            {/* Logo / Brand Heading */}
            <a
              href="#home"
              className="inline-flex items-center gap-2 group font-mono font-bold text-2xl tracking-tight text-white mb-3 hover:text-blue-400 transition"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                <Code2 className="w-5 h-5" />
              </div>
              <span>
                {personalInfo.name}{' '}
                <span className="text-blue-500">{personalInfo.nameHighlight}</span>
              </span>
            </a>

            {/* Tagline */}
            <p className="text-gray-400 max-w-xl text-sm md:text-base mb-8">
              {personalInfo.role}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Links Navigation */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-sm text-gray-400">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright Line */}
            <div className="border-t border-gray-800/80 pt-8 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
              <p>
                © {new Date().getFullYear()} {personalInfo.name} {personalInfo.nameHighlight}. All rights reserved.
              </p>
              <p className="flex items-center gap-1.5">
                <span>Designed & built with</span>
                <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
                <span>using React, TypeScript & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ring-4 ring-blue-600/20 active:scale-95"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
