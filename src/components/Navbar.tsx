import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Send, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/80 shadow-xl shadow-black/40'
          : 'bg-gray-950/85 backdrop-blur-md border-b border-gray-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2 group font-mono font-bold text-xl md:text-2xl tracking-tight text-white hover:text-blue-400 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <span>
              {portfolioData.personalInfo.name}{' '}
              <span className="text-blue-500">{portfolioData.personalInfo.nameHighlight}</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA with Resume Pill */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs xl:text-sm tracking-wide shadow-md shadow-blue-600/30 hover:shadow-blue-500/40 border border-blue-400/40 hover:-translate-y-0.5 cursor-pointer transition-all duration-200"
              title="View / Print Resume"
            >
              <FileText className="w-4 h-4 text-blue-100" />
              <span>RESUME</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 xl:px-5 xl:py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs xl:text-sm font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/80 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-b border-gray-800 px-6 py-6 transition-all duration-200 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/15 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-500"></span>}
                </a>
              );
            })}

            <div className="pt-4 border-t border-gray-800 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  closeMenu();
                  onOpenResume();
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/30 border border-blue-400/30"
              >
                <FileText className="w-4 h-4 text-blue-100" />
                <span>RESUME</span>
              </button>

              <a
                href="#contact"
                onClick={closeMenu}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/30"
              >
                <span>Contact</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
