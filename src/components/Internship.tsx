import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Cpu, Activity, Brain, Database, Radio } from 'lucide-react';
import { portfolioData, InternshipItem } from '../data/portfolioData';

export const Internship: React.FC = () => {
  const { internships } = portfolioData;

  const interviewTopics = [
    {
      title: 'Embedded Systems & ESP32',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      color: 'blue',
      points: [
        'Embedded C programming and microcontroller concepts.',
        'ESP32-based real-time monitoring.',
        'Sensor interfacing and continuous data acquisition.',
        'Hardware-software integration and debugging.'
      ]
    },
    {
      title: 'Communication Protocols',
      icon: <Radio className="w-5 h-5 text-emerald-400" />,
      color: 'emerald',
      points: [
        'UART communication.',
        'I2C communication.',
        'SPI communication.',
        'Multi-sensor communication using embedded interfaces.'
      ]
    },
    {
      title: 'Athlete Health Project',
      icon: <Activity className="w-5 h-5 text-cyan-400" />,
      color: 'cyan',
      points: [
        'Real-time athlete health and performance monitoring.',
        'Multiple sensor interfacing with ESP32.',
        'Embedded C firmware for sensor-data acquisition.',
        'Low-power IoT data-acquisition pipeline.',
        'Hardware-software integration and validation.'
      ]
    },
    {
      title: 'Generative AI',
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      color: 'purple',
      points: [
        'Generative AI concepts and applications.',
        'AI-powered project development.',
        'Technical learning and hands-on project activities.',
        'AI tools and emerging technologies.'
      ]
    },
    {
      title: 'Web & Database Projects',
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      color: 'indigo',
      points: [
        'React, Node.js, Express, and MongoDB.',
        'RESTful API development.',
        'CRUD operations and database management.',
        'MongoDB data schemas and responsive interfaces.'
      ]
    }
  ];

  return (
    <section id="internship" className="py-24 bg-gray-900 text-white relative">
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
            EXPERIENCE & TRAINING
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Internship <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Hands-on experience in embedded systems, microcontroller-based applications, hardware interfacing, and Generative AI, supported by practical training and project-based learning.
          </p>
        </motion.div>

        {/* Internships Timeline / Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {internships.map((internship: InternshipItem, index: number) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-7 hover:border-blue-500/80 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header badge & title */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {internship.type}
                  </span>
                  <span className="text-xs text-gray-400 font-medium bg-gray-900 px-3 py-1 rounded-lg border border-gray-800">
                    {internship.company} • {internship.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {internship.role}
                </h3>
                <p className="text-sm font-semibold text-blue-400 mb-4">
                  {internship.company} • {internship.location}
                </p>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {internship.description}
                </p>

                {/* Key Contributions & Learnings */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Key Contributions & Learnings
                  </h4>
                  {internship.responsibilities.map((item, rIndex) => (
                    <div key={rIndex} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies tags */}
              <div className="pt-4 border-t border-gray-800/80">
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-900 text-gray-300 rounded-md text-xs font-medium border border-gray-800 group-hover:border-blue-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Interview Readiness & Talking Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-950 border border-gray-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                INTERVIEW TALKING POINTS
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Technical Interview & Resume Discussion Focus
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Core technical areas from your resume that can be discussed during interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewTopics.map((topic) => (
              <div
                key={topic.title}
                className="bg-gray-900/80 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-800/90 border border-gray-700/60 flex items-center justify-center">
                      {topic.icon}
                    </div>
                    <h4 className="font-bold text-white text-base">
                      {topic.title}
                    </h4>
                  </div>

                  <ul className="text-xs md:text-sm text-gray-300 space-y-2.5">
                    {topic.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
