import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Award, Calendar, Hash, Clock, CheckCircle2 } from 'lucide-react';
import { portfolioData, CertificateItem } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { CertificateVisual } from './CertificateVisual';

export const Certificates: React.FC = () => {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = ['All', 'Embedded Systems', 'IoT', 'AI & Web Development', 'Programming'];

  const filteredCerts = activeFilter === 'All'
    ? certificates
    : certificates.filter((c) => {
        if (activeFilter === 'Embedded Systems') {
          return c.category.toLowerCase().includes('embedded') || c.category.toLowerCase().includes('vlsi');
        }
        if (activeFilter === 'IoT') {
          return c.category.toLowerCase().includes('iot');
        }
        if (activeFilter === 'AI & Web Development') {
          return c.category.toLowerCase().includes('ai') || c.category.toLowerCase().includes('web') || c.category.toLowerCase().includes('mern');
        }
        if (activeFilter === 'Programming') {
          return c.category.toLowerCase().includes('programming') || c.category.toLowerCase().includes('python');
        }
        return true;
      });

  return (
    <section id="certificates" className="py-24 bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 font-semibold tracking-wider text-sm md:text-base mb-2 uppercase">
            PROFESSIONAL LEARNING
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-blue-500">Certificates</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            A collection of technical certifications, workshops, and internship experiences covering Embedded Systems, VLSI, IoT, MERN Stack, Generative AI, and Python programming.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                activeFilter === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert: CertificateItem, index: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Certificate visual preview button */}
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="relative w-full h-52 bg-gray-950 overflow-hidden cursor-pointer block text-left border-b border-gray-800/80 group/preview"
                aria-label={`View certificate for ${cert.title}`}
              >
                <CertificateVisual certificate={cert} size="thumb" />

                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600/90 flex items-center justify-center text-white shadow-lg transform scale-75 group-hover/preview:scale-100 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-blue-300">
                    Click to Inspect
                  </span>
                </div>
              </button>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-blue-400 text-xs md:text-sm font-semibold">
                      {cert.category}
                    </span>
                    {cert.year && (
                      <span className="text-[11px] font-mono text-gray-500 bg-gray-950 px-2 py-0.5 rounded border border-gray-800">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => setSelectedCert(cert)}
                    className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors cursor-pointer leading-snug"
                  >
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Structured Details Box */}
                  <div className="bg-gray-950/70 border border-gray-800/80 rounded-xl p-3.5 space-y-1.5 text-xs text-gray-300 mb-5 font-mono">
                    {cert.organization && cert.category !== 'Embedded Systems' && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-sans">Organization:</span>
                        <span className="text-gray-200 text-right font-medium">{cert.organization}</span>
                      </div>
                    )}
                    {cert.platform && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-sans">Platform:</span>
                        <span className="text-gray-200 font-medium">{cert.platform}</span>
                      </div>
                    )}
                    {cert.duration && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-sans">
                          {cert.title.includes('Workshop') || cert.category === 'Generative AI' ? 'Workshop Duration:' : 'Duration:'}
                        </span>
                        <span className="text-gray-200 font-medium">{cert.duration}</span>
                      </div>
                    )}
                    {cert.certificateDate && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-sans">Certificate Date:</span>
                        <span className="text-gray-200 font-medium">{cert.certificateDate}</span>
                      </div>
                    )}
                    {cert.issued && !cert.certificateDate && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-sans">Issued:</span>
                        <span className="text-gray-200 font-medium">{cert.issued}</span>
                      </div>
                    )}
                    {cert.certificateCode && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-sans">
                          {cert.category === 'IoT' ? 'Certificate ID:' : 'Certificate Code:'}
                        </span>
                        <span className="text-blue-400 font-semibold">{cert.certificateCode}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>Verified Credential</span>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-blue-400 hover:text-blue-300 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <span>View Credential</span>
                    <Award className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
