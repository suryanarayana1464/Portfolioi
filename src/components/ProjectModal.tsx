import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cpu, Layers, CheckCircle2, Code2, ArrowUpRight, Github } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const modulesList = project.modules || project.components || [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl z-10 my-8 overflow-hidden text-white max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top metadata */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-extrabold text-blue-500 font-mono">
              {project.number}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            {project.title}
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            {project.fullDescription || project.description}
          </p>

          {/* Modules */}
          {modulesList.length > 0 && (
            <div className="mb-6 bg-gray-950/80 border border-gray-800 rounded-2xl p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Modules</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {modulesList.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-6 bg-gray-950/80 border border-gray-800 rounded-2xl p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Key Features</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2.5 flex items-center gap-1.5 font-mono">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-gray-800 border border-gray-700 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium flex items-center gap-2 transition"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium flex items-center gap-2 transition shadow-lg shadow-blue-600/30"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
