import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, Cpu, Globe, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />
};

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = ['All', 'Embedded Systems', 'Programming', 'IoT', 'Web Development', 'Tools'];

  const filteredCategories = activeFilter === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === activeFilter);

  return (
    <section id="skills" className="py-24 bg-gray-950 text-white relative">
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
            WHAT I WORK WITH
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            A comprehensive overview of my programming languages, embedded technologies, IoT platforms, web development technologies, and engineering tools.
          </p>
        </motion.div>

        {/* Filter Buttons */}
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

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category: SkillCategory, index: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Icon & Experience Badge header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {iconMap[category.iconName]}
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                      category.badge === 'Hands-on Experience'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}
                  >
                    {category.badge}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-500">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2.5 mb-5">
                  {category.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="bg-gray-800/90 text-gray-200 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-default shadow-sm border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note / Description */}
              {category.description && (
                <div className="mt-4 pt-4 border-t border-gray-800/80">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
