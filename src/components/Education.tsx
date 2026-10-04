import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData, EducationItem } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-gray-900 text-white relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold tracking-wider text-sm md:text-base mb-2 uppercase">
            MY ACADEMIC JOURNEY
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Education & <span className="text-blue-500">Learning</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Academic qualifications, core coursework, and scholarly honors.
          </p>
        </motion.div>

        {/* Education List */}
        <div className="space-y-6">
          {education.map((item: EducationItem, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500 transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                {/* Icon Badge */}
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10">
                  <GraduationCap className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-blue-400 font-medium text-base mt-1">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-400 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-lg w-fit whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base mb-4 font-normal">
                    {item.field}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 mb-4">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Score pill */}
                  {item.score && (
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-semibold">
                      <Award className="w-4 h-4 text-blue-400" />
                      <span>{item.score}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
