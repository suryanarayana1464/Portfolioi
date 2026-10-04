import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  FileText 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { personalInfo, education, internships, projects, skillCategories, additionalInfo } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyText = () => {
    const resumeText = `
SURYANARAYANA YADLA
9063837376 | suryanarayana.yadla@sasi.ac.in | LinkedIn: ${personalInfo.linkedin} | Mukkamala

Summary
B.Tech student in Electronics and Communication Technology at Sasi Institute of Technology & Engineering (2023–2027), skilled in Embedded C, ESP32 microcontroller programming, sensor interfacing, and UART, I2C, and SPI communication protocols. Hands-on experience in developing an ESP32-based real-time monitoring system and completing an Embedded Systems internship, with practical knowledge of Arduino IDE, Keil µVision, Proteus, debugging, and hardware-software integration. Proficient in Python, HTML, CSS, JavaScript, React, Node.js, and MongoDB for developing responsive web applications. Strong analytical and problem-solving skills with a keen interest in real-time embedded systems, industrial automation, radar and defence electronics, and emerging technologies.

EDUCATION
SASI Institute of Technology & Engineering, Tadepalligudem    2023 – 2027 (Pursuing)
B.Tech in Electronics & Communication Technology

Sri Chaitanya Junior College    2021 – 2023
Intermediate (MPC), GPA: 87.7 / 100

TECHNICAL SKILLS
Embedded Systems: Embedded C, Firmware Development, Microcontrollers, ESP32, Sensor Interfacing, GPIO, ADC, Timers, Debugging, Hardware-Software Integration
Communication Protocols: UART, I2C, SPI
Programming Languages: C, Embedded C, Python
IoT: IoT Fundamentals, Real-Time Data Acquisition, Sensor Data Monitoring
Tools & Platforms: Arduino IDE, Keil µVision, Proteus, VS Code, Git
Web Development: HTML, CSS, React.js, Node.js, Express.js, MongoDB, REST API
Core Competencies: Problem-Solving, Team Collaboration, Technical Documentation

INTERNSHIP EXPERIENCE
Huebits
Embedded Systems Intern
• Gained hands-on exposure to embedded systems and microcontroller-based applications through structured training.
• Applied Embedded C and core microcontroller concepts to build and debug small hardware-software modules.
• Worked with hardware interfacing techniques and embedded development fundamentals.

PurpleLane
Generative AI Intern
• Completed a one-month intensive internship covering Generative AI concepts, tools, and real-world applications.
• Participated in technical learning activities, hands-on projects, and assessments; achieved certification.

PROJECTS
Athletes Health & Performance Tracker    ESP32, IoT, Sensors, Embedded C
• Developed an ESP32-based embedded system that monitors athletes' health and performance metrics in real time.
• Interfaced multiple sensors with the ESP32 and wrote Embedded C firmware to acquire, process, and log readings continuously.
• Built a low-power data-acquisition pipeline using IoT and embedded-systems principles, and validated hardware-software integration for stable readings.

CourseWhiz: AI Study Companion & Quiz Engine    Node.js, React, MongoDB, Pinecone, Gemini API
• Built a full-stack learning platform using Node.js, Express, React, and MongoDB Atlas that converts static study materials into interactive courses with RAG-based search, flashcards, and automated quizzes.
• Implemented vector search by chunking text, generating embeddings via the Gemini API, and storing vector representations in Pinecone with scoped courseId metadata filtering to prevent cross-course data leakage.
• Engineered a multi-feature AI engine featuring chat-with-material, automated MCQ/short-answer quiz generation, automated flashcard generation, and document summarization using structured JSON responses.

Library Management System    React, Node.js, Express, MongoDB, HTML5, CSS3
• Developed a full-stack web application using React, Node.js, Express, and MongoDB to streamline library operations, including book cataloging, inventory tracking, and user membership management.
• Implemented RESTful API endpoints for complete CRUD operations, enabling librarians to manage book records, issue books, process returns, and update availability status in real time.
• Designed responsive user interface components with React, HTML5, and CSS3, incorporating dynamic search and filtering functionality to help users locate books by title, author, or genre.
• Structured MongoDB data schemas for books, users, and borrowing transactions, ensuring data integrity and efficient queries for trackable issue/return workflows.

ADDITIONAL INFORMATION
Strengths: Working with team and hard work, Good communication skills
Languages: English, Telugu

CERTIFICATIONS
• Node-RED Advanced – Node-RED Academy / FlowFuse (Credential ID: 6ab0fc0cddc706a659046426)
• MERN Stack – PurpleLane
• Introduction to Internet of Things (IoT) – NPTEL, SWAYAM (Score: 80%)
• Introduction to IoT – SkillDrize
• Embedded System Course – Simplilearn
• Embedded Systems Internship – Huebits (Certificate Pending)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#0b1329] border border-slate-700/80 rounded-2xl shadow-2xl z-10 my-4 overflow-hidden text-slate-100 max-h-[94vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Action Toolbar (Hidden during print) */}
          <div className="p-3.5 md:px-8 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0 print:hidden">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-white leading-tight">
                  Official Resume
                </h3>
                <span className="text-[10px] text-slate-400 font-mono">
                  SURYANARAYANA YADLA • Electronics & Communication Technology
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition border border-slate-700 cursor-pointer"
                title="Copy Plain Text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-1.5 transition shadow-sm shadow-blue-600/30 cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable LaTeX-Style Resume Document Viewport */}
          <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-[#ffffff] text-slate-900 font-serif leading-snug selection:bg-blue-100 print:p-0">
            {/* Header / Contact Line */}
            <div className="text-center pb-2 mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-wider uppercase font-serif">
                SURYANARAYANA YADLA
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs md:text-[13px] text-slate-800 mt-1 font-serif">
                <span className="flex items-center gap-1">
                  <span>☎</span>
                  <span>9063837376</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>✉</span>
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline text-blue-900">{personalInfo.email}</a>
                </span>
                <span className="flex items-center gap-1">
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-blue-900">LinkedIn</a>
                </span>
                <span className="flex items-center gap-1">
                  <span>Mukkamala</span>
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-4">
              <h2 className="text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-950 pb-0.5 mb-1.5 font-serif">
                Summary
              </h2>
              <p className="text-xs md:text-[12.5px] text-slate-900 leading-relaxed text-justify font-serif">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-950 pb-0.5 mb-1.5 font-serif">
                EDUCATION
              </h2>
              <div className="space-y-2">
                <div className="text-xs md:text-[12.5px]">
                  <div className="flex items-baseline justify-between font-bold text-slate-950">
                    <span>SASI Institute of Technology & Engineering, Tadepalligudem</span>
                    <span className="font-normal">2023 – 2027 (Pursuing)</span>
                  </div>
                  <div className="italic text-slate-800">
                    B.Tech in Electronics & Communication Technology
                  </div>
                </div>

                <div className="text-xs md:text-[12.5px]">
                  <div className="flex items-baseline justify-between font-bold text-slate-950">
                    <span>Sri Chaitanya Junior College</span>
                    <span className="font-normal">2021 – 2023</span>
                  </div>
                  <div className="italic text-slate-800">
                    Intermediate (MPC), GPA: 87.7 / 100
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-4">
              <h2 className="text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-950 pb-0.5 mb-1.5 font-serif">
                TECHNICAL SKILLS
              </h2>
              <div className="text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif">
                <div>
                  <span className="font-bold text-slate-950">Embedded Systems: </span>
                  <span>Embedded C, Firmware Development, Microcontrollers, ESP32, Sensor Interfacing, GPIO, ADC, Timers, Debugging, Hardware-Software Integration</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950">Communication Protocols: </span>
                  <span>UART, I2C, SPI</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950">Programming Languages: </span>
                  <span>C, Embedded C, Python</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950">IoT: </span>
                  <span>IoT Fundamentals, Real-Time Data Acquisition, Sensor Data Monitoring</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950">Tools & Platforms: </span>
                  <span>Arduino IDE, Keil µVision, Proteus, VS Code, Git</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950">Web Development: </span>
                  <span>HTML, CSS, React.js, Node.js, Express.js, MongoDB, REST API</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950">Core Competencies: </span>
                  <span>Problem-Solving, Team Collaboration, Technical Documentation</span>
                </div>
              </div>
            </div>

            {/* Internship Experience */}
            <div className="mb-4">
              <h2 className="text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-950 pb-0.5 mb-1.5 font-serif">
                INTERNSHIP EXPERIENCE
              </h2>
              <div className="space-y-3">
                {/* Huebits */}
                <div className="text-xs md:text-[12.5px]">
                  <div className="font-bold text-slate-950">Huebits</div>
                  <div className="italic text-slate-800 mb-0.5">Embedded Systems Intern</div>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif">
                    <li>Gained hands-on exposure to <span className="font-bold text-slate-950">embedded systems and microcontroller-based applications</span> through structured training.</li>
                    <li>Applied <span className="font-bold text-slate-950">Embedded C</span> and core microcontroller concepts to build and debug small hardware-software modules.</li>
                    <li>Worked with <span className="font-bold text-slate-950">hardware interfacing techniques</span> and embedded development fundamentals.</li>
                  </ul>
                </div>

                {/* PurpleLane */}
                <div className="text-xs md:text-[12.5px]">
                  <div className="font-bold text-slate-950">PurpleLane</div>
                  <div className="italic text-slate-800 mb-0.5">Generative AI Intern</div>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif">
                    <li>Completed a one-month intensive internship covering Generative AI concepts, tools, and real-world applications.</li>
                    <li>Participated in technical learning activities, hands-on projects, and assessments; achieved certification.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-4">
              <h2 className="text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-950 pb-0.5 mb-1.5 font-serif">
                PROJECTS
              </h2>
              <div className="space-y-3">
                {/* Project 1: Athletes Health Tracker */}
                <div className="text-xs md:text-[12.5px]">
                  <div className="flex items-baseline justify-between font-bold text-slate-950">
                    <span>Athletes Health & Performance Tracker</span>
                    <span className="italic font-normal">ESP32, IoT, Sensors, Embedded C</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif mt-0.5">
                    <li>Developed an <span className="font-bold text-slate-950">ESP32-based embedded system</span> that monitors athletes’ health and performance metrics in real time.</li>
                    <li>Interfaced multiple sensors with the ESP32 and wrote <span className="font-bold text-slate-950">Embedded C firmware</span> to acquire, process, and log readings continuously.</li>
                    <li>Built a low-power data-acquisition pipeline using IoT and embedded-systems principles, and validated hardware-software integration for stable readings.</li>
                  </ul>
                </div>

                {/* Project 2: CourseWhiz */}
                <div className="text-xs md:text-[12.5px]">
                  <div className="flex items-baseline justify-between font-bold text-slate-950">
                    <span>CourseWhiz: AI Study Companion & Quiz Engine</span>
                    <span className="italic font-normal">Node.js, React, MongoDB, Pinecone, Gemini API</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif mt-0.5">
                    <li>Built a <span className="font-bold text-slate-950">full-stack learning platform</span> using Node.js, Express, React, and MongoDB Atlas that converts static study materials into interactive courses with <span className="font-bold text-slate-950">RAG-based search</span>, flashcards, and automated quizzes.</li>
                    <li>Implemented vector search by chunking text, generating embeddings via the <span className="font-bold text-slate-950">Gemini API</span>, and storing vector representations in <span className="font-bold text-slate-950">Pinecone</span> with scoped courseId metadata filtering to prevent cross-course data leakage.</li>
                    <li>Engineered a multi-feature AI engine featuring chat-with-material, automated MCQ/short-answer quiz generation, automated flashcard generation, and document summarization using structured JSON responses.</li>
                  </ul>
                </div>

                {/* Project 3: Library Management System */}
                <div className="text-xs md:text-[12.5px]">
                  <div className="flex items-baseline justify-between font-bold text-slate-950">
                    <span>Library Management System</span>
                    <span className="italic font-normal">React, Node.js, Express, MongoDB, HTML5, CSS3</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif mt-0.5">
                    <li>Developed a full-stack web application using React, Node.js, Express, and MongoDB to streamline library operations, including book cataloging, inventory tracking, and user membership management.</li>
                    <li>Implemented <span className="font-bold text-slate-950">RESTful API endpoints</span> for complete CRUD operations, enabling librarians to manage book records, issue books, process returns, and update availability status in real time.</li>
                    <li>Designed responsive user interface components with React, HTML5, and CSS3, incorporating dynamic search and filtering functionality to help users locate books by title, author, or genre.</li>
                    <li>Structured MongoDB data schemas for books, users, and borrowing transactions, ensuring data integrity and efficient queries for trackable issue/return workflows.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-4">
              <h2 className="text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-950 pb-0.5 mb-1.5 font-serif">
                ADDITIONAL INFORMATION
              </h2>
              <div className="text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif">
                <div>
                  <span className="font-bold text-slate-950">Strengths: </span>
                  <span>Working with team and hard work, Good communication skills</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950">Languages: </span>
                  <span>English, Telugu</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-950 pb-0.5 mb-1.5 font-serif">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-outside ml-4 text-xs md:text-[12.5px] text-slate-900 space-y-0.5 font-serif">
                <li><span className="text-slate-950 font-bold">Node-RED Advanced</span> – Node-RED Academy / FlowFuse</li>
                <li><span className="text-slate-950">MERN Stack – PurpleLane</span></li>
                <li><span className="text-slate-950">Introduction to Internet of Things (IoT) – NPTEL, SWAYAM (Score: 80%)</span></li>
                <li><span className="text-slate-950">Introduction to IoT – SkillDrize</span></li>
                <li><span className="text-slate-950">Embedded System Course – Simplilearn</span></li>
                <li><span className="text-slate-950">Embedded Systems Internship – Huebits (Certificate Pending)</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
