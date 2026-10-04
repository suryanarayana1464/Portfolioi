import React from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, Cpu, Globe, CheckCircle2 } from 'lucide-react';
import { portfolioData, AboutCard } from '../data/portfolioData';

const iconMap = {
  Code2: <Code2 className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />
};

export const About: React.FC = () => {
  const { personalInfo, aboutCards, aboutHighlights } = portfolioData;

  return (
    <section id="about" className="py-24 bg-gray-900 text-white relative">
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
            GET TO KNOW ME
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
              Embedded Systems & Technology Innovator
            </h3>

            {personalInfo.extendedBio.map((paragraph, index) => (
              <p key={index} className="text-gray-400 text-base md:text-lg leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-800">
              {aboutHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2.5 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Highlight Feature Cards */}
          <div className="grid gap-5">
            {aboutCards.map((card: AboutCard, index: number) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/30 group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    {iconMap[card.iconName]}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
