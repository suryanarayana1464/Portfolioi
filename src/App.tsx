import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Internship } from './components/Internship';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { portfolioData } from './data/portfolioData';
import { Sliders, X, Check, FileCode, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [showCustomizerTip, setShowCustomizerTip] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = portfolioData.navLinks.map((link) => link.href.replace('#', ''));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Navigation Header */}
      <Navbar 
        activeSection={activeSection} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      {/* Footer & Floating Scroll-To-Top */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Floating Customization Guide Toggle for Quick Setup */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setShowCustomizerTip(!showCustomizerTip)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gray-900/90 border border-gray-700/80 text-xs font-medium text-gray-300 hover:text-white hover:border-blue-500 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          title="How to customize this portfolio"
        >
          <FileCode className="w-4 h-4 text-blue-400" />
          <span className="hidden sm:inline">Customization Guide</span>
        </button>

        {showCustomizerTip && (
          <div className="absolute bottom-14 left-0 w-80 md:w-96 bg-gray-900 border border-gray-700 rounded-2xl p-5 shadow-2xl backdrop-blur-xl text-left text-white animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-3">
              <div className="flex items-center gap-2 font-bold text-sm text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Personalize?</span>
              </div>
              <button
                onClick={() => setShowCustomizerTip(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              All portfolio content is structured and centralized in a single configuration file:
            </p>

            <div className="bg-gray-950 p-2.5 rounded-lg border border-gray-800 font-mono text-xs text-blue-300 mb-3">
              /src/data/portfolioData.ts
            </div>

            <ul className="text-xs space-y-1.5 text-gray-400 mb-4">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Personal bio, contact, and social links</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Projects, GitHub links & live URLs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Certificates, credential IDs & verification URLs</span>
              </li>
            </ul>

            <button
              onClick={() => setShowCustomizerTip(false)}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-semibold text-white transition shadow-md shadow-blue-600/30"
            >
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
