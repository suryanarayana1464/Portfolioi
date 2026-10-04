import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, CheckCircle2, ShieldCheck, Calendar, Hash, Clock, Building2 } from 'lucide-react';
import { CertificateItem } from '../data/portfolioData';
import { CertificateVisual } from './CertificateVisual';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl z-10 my-8 overflow-hidden max-h-[92vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button at top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-gray-950/80 border border-gray-700 text-white hover:text-blue-400 hover:border-blue-500 transition-all shadow-xl"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Visual Presentation */}
          <div className="w-full bg-gray-950 p-4 md:p-8 flex items-center justify-center border-b border-gray-800">
            <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <CertificateVisual certificate={certificate} size="full" />
            </div>
          </div>

          {/* Certificate Metadata Details */}
          <div className="p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  {certificate.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {certificate.title}
                </h3>
                {certificate.organization && (
                  <p className="text-gray-400 text-sm md:text-base mt-1 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>Issued / Organized by <span className="text-white font-medium">{certificate.organization}</span></span>
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs bg-gray-950 border border-gray-800 px-3 py-1.5 rounded-lg text-gray-300 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{certificate.year}</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs bg-emerald-950/80 border border-emerald-800/80 px-3 py-1.5 rounded-lg text-emerald-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              {certificate.description}
            </p>

            {/* Structured Info Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 p-4 bg-gray-950/80 rounded-2xl border border-gray-800/90 text-xs font-mono">
              {certificate.certificateDate && (
                <div>
                  <span className="text-gray-500 uppercase block font-sans">Certificate Date</span>
                  <span className="text-white font-medium">{certificate.certificateDate}</span>
                </div>
              )}
              {certificate.certificateCode && (
                <div>
                  <span className="text-gray-500 uppercase block font-sans">
                    {certificate.category === 'IoT' ? 'Certificate ID' : 'Certificate Code'}
                  </span>
                  <span className="text-blue-400 font-semibold">{certificate.certificateCode}</span>
                </div>
              )}
              {certificate.duration && (
                <div>
                  <span className="text-gray-500 uppercase block font-sans">Duration</span>
                  <span className="text-white font-medium">{certificate.duration}</span>
                </div>
              )}
              {certificate.issued && !certificate.certificateDate && (
                <div>
                  <span className="text-gray-500 uppercase block font-sans">Issued Date</span>
                  <span className="text-white font-medium">{certificate.issued}</span>
                </div>
              )}
              {certificate.platform && (
                <div>
                  <span className="text-gray-500 uppercase block font-sans">Platform</span>
                  <span className="text-white font-medium">{certificate.platform}</span>
                </div>
              )}
              {certificate.credentialId && !certificate.certificateCode && (
                <div>
                  <span className="text-gray-500 uppercase block font-sans">Credential ID</span>
                  <span className="text-blue-400 font-semibold">{certificate.credentialId}</span>
                </div>
              )}
            </div>

            {/* Validated Competencies */}
            {certificate.skills && certificate.skills.length > 0 && (
              <div className="mb-6 pt-4 border-t border-gray-800">
                <span className="text-xs text-gray-500 uppercase font-mono tracking-wider block mb-2">
                  Validated Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-gray-800">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm font-medium transition"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
