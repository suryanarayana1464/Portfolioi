import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Award, GraduationCap, Code2, Sparkles, Cpu, Brain, Layers } from 'lucide-react';
import { portfolioData, AchievementItem } from '../data/portfolioData';

const iconMap = {
  Trophy: <Trophy className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Award: <Award className="w-7 h-7" />,
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  Code2: <Code2 className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
  Cpu: <Cpu className="w-7 h-7" />,
  Brain: <Brain className="w-7 h-7" />,
  Layers: <Layers className="w-7 h-7" />
};

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold tracking-wider text-sm md:text-base mb-2 uppercase">
            MILESTONES & RECOGNITION
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Key <span className="text-blue-500">Achievements</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Hands-on embedded systems experience, AI development, full-stack engineering, internships, and recognized technical certifications.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item: AchievementItem, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-7 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header row with icon & badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10">
                    {iconMap[item.iconName]}
                  </div>

                  {item.badge && (
                    <span className="text-xs font-mono font-semibold bg-blue-950/60 border border-blue-800/60 text-blue-300 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom subtle indicator */}
              <div className="pt-6 mt-4 border-t border-gray-800/60 flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Verified Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
