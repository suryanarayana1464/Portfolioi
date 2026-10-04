import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Cpu, Info, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = ['All', 'IoT & Embedded', 'Full-Stack Web', 'AI & Intelligent Applications'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => {
        if (activeFilter === 'IoT & Embedded') {
          return project.category.toLowerCase().includes('iot') || project.category.toLowerCase().includes('embedded');
        }
        if (activeFilter === 'Full-Stack Web') {
          return project.category.toLowerCase().includes('web') || project.category.toLowerCase().includes('full-stack');
        }
        if (activeFilter === 'AI & Intelligent Applications') {
          return project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('intelligent');
        }
        return true;
      });

  return (
    <section id="projects" className="py-24 bg-gray-950 text-white relative">
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
            MY WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            A curated collection of projects exploring Embedded Systems, IoT telemetry, Artificial Intelligence, Full-Stack Development, and Database Technologies.
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

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/90 border border-gray-800 rounded-2xl p-6 md:p-7 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Top Row: Number & Actions */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-blue-500/70 font-mono tracking-tighter">
                    {project.number}
                  </span>

                  <div className="flex items-center gap-2.5 text-gray-400">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="hover:text-blue-400 transition p-1.5 rounded-lg hover:bg-gray-800"
                      aria-label="View Project Details"
                      title="Quick Details"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition p-1.5 rounded-lg hover:bg-gray-800"
                      aria-label="GitHub Repository"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition p-1.5 rounded-lg hover:bg-gray-800"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Category */}
                <p className="text-blue-400 text-xs md:text-sm font-semibold mb-2">
                  {project.category}
                </p>

                {/* Title */}
                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors cursor-pointer leading-snug"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-950 border border-gray-800 text-gray-300 text-xs font-mono px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Key Metrics / Details Button */}
              <div className="flex items-center justify-between border-t border-gray-800/80 pt-4 mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>
                    {project.modules?.length || 3} Modules
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition"
                >
                  <span>Inspect Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
