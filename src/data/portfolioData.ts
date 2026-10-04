export interface PersonalInfo {
  name: string;
  nameHighlight: string;
  role: string;
  subtitle: string;
  bio: string;
  extendedBio: string[];
  location: string;
  institution?: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  status: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface NavItem {
  name: string;
  href: string;
}

export interface AboutCard {
  title: string;
  description: string;
  iconName: 'Code2' | 'Brain' | 'Cpu' | 'Globe';
}

export interface SkillWithProficiency {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  category: 'Embedded Systems' | 'Programming' | 'IoT' | 'Web Development' | 'Tools';
  badge: 'Hands-on Experience' | 'Project Experience';
  description?: string;
  iconName: 'Code2' | 'Brain' | 'Cpu' | 'Globe' | 'Database' | 'Wrench';
  skills: string[];
  skillItems: SkillWithProficiency[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  isInternship?: boolean;
  description: string;
  fullDescription?: string;
  technologies: string[];
  components?: string[];
  modules?: string[];
  keyFeatures?: string[];
  bulletPoints?: string[];
  resumeNote?: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
  field: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  category: string;
  year: string;
  credentialId: string;
  badgeColor: string;
  description: string;
  skills: string[];
  verifyUrl: string;
  imageUrl?: string;
  recipientName?: string;
  certificateDate?: string;
  certificateCode?: string;
  duration?: string;
  issued?: string;
  platform?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Trophy' | 'Users' | 'Award' | 'GraduationCap' | 'Code2' | 'Sparkles' | 'Cpu' | 'Brain' | 'Layers';
  badge?: string;
}

export const portfolioData: {
  personalInfo: PersonalInfo;
  navLinks: NavItem[];
  aboutCards: AboutCard[];
  aboutHighlights: string[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  internships: InternshipItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  achievements: AchievementItem[];
  additionalInfo: {
    strengths: string[];
    languages: string[];
  };
} = {
  personalInfo: {
    name: 'SURYANARAYANA',
    nameHighlight: 'YADLA',
    role: 'Embedded Systems & Full-Stack Developer',
    subtitle: 'Embedded Systems & Full-Stack Developer | IoT & AI Enthusiast | Problem Solver',
    bio: 'B.Tech student in Electronics and Communication Technology at Sasi Institute of Technology & Engineering (2023–2027), skilled in Embedded C, ESP32 microcontroller programming, sensor interfacing, and UART, I2C, and SPI communication protocols. Hands-on experience in developing an ESP32-based real-time monitoring system and completing an Embedded Systems internship, with practical knowledge of Arduino IDE, Keil µVision, Proteus, debugging, and hardware-software integration. Proficient in Python, HTML, CSS, JavaScript, React, Node.js, and MongoDB for developing responsive web applications. Strong analytical and problem-solving skills with a keen interest in real-time embedded systems, industrial automation, radar and defence electronics, and emerging technologies.',
    extendedBio: [
      'B.Tech student in Electronics and Communication Technology at Sasi Institute of Technology & Engineering (2023–2027), skilled in Embedded C, ESP32 microcontroller programming, sensor interfacing, and UART, I2C, and SPI communication protocols.',
      'Hands-on experience in developing an ESP32-based real-time monitoring system and completing an Embedded Systems internship, with practical knowledge of Arduino IDE, Keil µVision, Proteus, debugging, and hardware-software integration.',
      'Proficient in Python, HTML, CSS, JavaScript, React, Node.js, and MongoDB for developing responsive web applications. Strong analytical and problem-solving skills with a keen interest in real-time embedded systems, industrial automation, radar and defence electronics, and emerging technologies.'
    ],
    location: 'Mukkamala, Andhra Pradesh, India',
    institution: 'SASI Institute of Technology & Engineering, Tadepalligudem',
    email: 'suryanarayana.yadla@sasi.ac.in',
    phone: '9063837376',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/feed/',
    status: 'Available for embedded engineering & full-stack opportunities',
    stats: [
      { label: 'Core Skills', value: '25+' },
      { label: 'Projects Completed', value: '15+' },
      { label: 'Certifications', value: '7+' },
      { label: 'Code Commits', value: '1.2k+' }
    ]
  },

  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internship', href: '#internship' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ],

  aboutCards: [
    {
      title: 'Embedded Systems & IoT',
      description: 'Developing ESP32-based real-time monitoring systems with sensor interfacing, Embedded C firmware, UART/I2C/SPI protocols, and hardware-software integration.',
      iconName: 'Cpu'
    },
    {
      title: 'AI & Full-Stack Development',
      description: 'Building intelligent web platforms using React, Node.js, Express, MongoDB, Pinecone Vector DB, Gemini API, and RAG-based search engines.',
      iconName: 'Brain'
    },
    {
      title: 'Microcontroller Tools & Firmware',
      description: 'Working with Arduino IDE, Keil µVision, Proteus, GPIO, ADC, Timers, and debugging tools to build reliable hardware applications.',
      iconName: 'Code2'
    }
  ],

  aboutHighlights: [
    'Embedded C & ESP32 Programming',
    'UART, I2C, SPI Protocols',
    'Sensor Interfacing & Telemetry',
    'React.js, Node.js & MongoDB',
    'Generative AI & Vector Search RAG',
    'Arduino IDE, Keil µVision & Proteus'
  ],

  skillCategories: [
    {
      title: 'Embedded Systems',
      category: 'Embedded Systems',
      badge: 'Hands-on Experience',
      description: 'Firmware development, sensor interfacing, and low-level hardware control using ESP32 and microcontrollers.',
      iconName: 'Cpu',
      skills: ['Embedded C', 'Firmware Development', 'Microcontrollers', 'ESP32', 'Sensor Interfacing', 'GPIO', 'ADC', 'Timers', 'Debugging', 'Hardware-Software Integration'],
      skillItems: [
        { name: 'Embedded C', percentage: 95 },
        { name: 'ESP32 Programming', percentage: 92 },
        { name: 'Microcontrollers', percentage: 90 },
        { name: 'Sensor Interfacing', percentage: 92 },
        { name: 'Firmware Development', percentage: 88 },
        { name: 'GPIO, ADC & Timers', percentage: 90 },
        { name: 'Hardware-Software Integration', percentage: 92 },
        { name: 'Hardware Debugging', percentage: 88 }
      ]
    },
    {
      title: 'Communication Protocols & IoT',
      category: 'IoT',
      badge: 'Hands-on Experience',
      description: 'Hardware communication protocols, end-to-end telemetry pipelines, and continuous real-time sensor data streaming.',
      iconName: 'Cpu',
      skills: ['UART Protocol', 'I2C Protocol', 'SPI Protocol', 'IoT Fundamentals', 'Real-Time Data Acquisition', 'Sensor Data Monitoring'],
      skillItems: [
        { name: 'UART Protocol', percentage: 94 },
        { name: 'I2C Protocol', percentage: 92 },
        { name: 'SPI Protocol', percentage: 90 },
        { name: 'IoT Fundamentals', percentage: 92 },
        { name: 'Real-Time Data Acquisition', percentage: 90 },
        { name: 'Sensor Data Monitoring', percentage: 90 }
      ]
    },
    {
      title: 'Programming Languages',
      category: 'Programming',
      badge: 'Hands-on Experience',
      description: 'Low-level and systems programming in C and Embedded C, paired with Python for rapid development, scripting, and problem-solving.',
      iconName: 'Code2',
      skills: ['C', 'Embedded C', 'Python'],
      skillItems: [
        { name: 'Embedded C', percentage: 95 },
        { name: 'C Programming', percentage: 92 },
        { name: 'Python', percentage: 88 }
      ]
    },
    {
      title: 'Web Development',
      category: 'Web Development',
      badge: 'Project Experience',
      description: 'Responsive frontend interfaces, backend REST services, and database persistence using the full modern stack.',
      iconName: 'Globe',
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      skillItems: [
        { name: 'React.js', percentage: 88 },
        { name: 'Node.js & Express.js', percentage: 86 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'REST APIs', percentage: 90 },
        { name: 'HTML5 & CSS3', percentage: 92 }
      ]
    },
    {
      title: 'Tools & Platforms',
      category: 'Tools',
      badge: 'Hands-on Experience',
      description: 'Microcontroller simulation, embedded flashing, circuit design validation, and collaborative version control.',
      iconName: 'Wrench',
      skills: ['Arduino IDE', 'Keil µVision', 'Proteus', 'VS Code', 'Git'],
      skillItems: [
        { name: 'Arduino IDE', percentage: 95 },
        { name: 'Keil µVision', percentage: 88 },
        { name: 'Proteus Simulation', percentage: 88 },
        { name: 'VS Code', percentage: 95 },
        { name: 'Git & Version Control', percentage: 90 }
      ]
    }
  ],

  projects: [
    {
      id: 'proj-1',
      number: '01',
      title: 'Athletes Health & Performance Tracker',
      category: 'ESP32, IoT, Sensors, Embedded C',
      description: "Developed an ESP32-based embedded system that monitors athletes' health and performance metrics in real time with continuous data acquisition.",
      fullDescription: "Developed an ESP32-based embedded system that monitors athletes' health and performance metrics in real time. Interfaced multiple sensors with the ESP32 and wrote Embedded C firmware to acquire, process, and log readings continuously. Built a low-power data-acquisition pipeline using IoT and embedded-systems principles, and validated hardware-software integration for stable readings.",
      technologies: ['ESP32', 'IoT', 'Sensors', 'Embedded C'],
      components: ['ESP32 Microcontroller', 'Multiple Biometric Sensors', 'Low-Power Data Acquisition', 'Embedded C Firmware'],
      modules: ['ESP32 Microcontroller', 'Multiple Biometric Sensors', 'Low-Power Data Acquisition', 'Embedded C Firmware'],
      bulletPoints: [
        "Developed an ESP32-based embedded system that monitors athletes' health and performance metrics in real time.",
        "Interfaced multiple sensors with the ESP32 and wrote Embedded C firmware to acquire, process, and log readings continuously.",
        "Built a low-power data-acquisition pipeline using IoT and embedded-systems principles, and validated hardware-software integration for stable readings."
      ],
      keyFeatures: [
        "Real-time athlete health and performance monitoring",
        "Multiple sensor interfacing with continuous processing",
        "Embedded C firmware for telemetry acquisition",
        "Low-power data-acquisition pipeline design",
        "Validated hardware-software integration"
      ],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/demo-1',
      featured: true
    },
    {
      id: 'proj-2',
      number: '02',
      title: 'CourseWhiz: AI Study Companion & Quiz Engine',
      category: 'Node.js, React, MongoDB, Pinecone, Gemini API',
      description: 'A full-stack learning platform with RAG-based search, flashcards, automated quizzes, and AI document summarization.',
      fullDescription: 'Built a full-stack learning platform using Node.js, Express, React, and MongoDB Atlas that converts static study materials into interactive courses with RAG-based search, flashcards, and automated quizzes. Implemented vector search by chunking text, generating embeddings via the Gemini API, and storing vector representations in Pinecone with scoped courseId metadata filtering to prevent cross-course data leakage. Engineered a multi-feature AI engine featuring chat-with-material, automated MCQ/short-answer quiz generation, automated flashcard generation, and document summarization using structured JSON responses.',
      technologies: ['Node.js', 'React', 'MongoDB', 'Pinecone', 'Gemini API'],
      components: ['React Frontend', 'Express.js Backend', 'Pinecone Vector DB', 'Gemini AI API'],
      modules: ['React Frontend', 'Express.js Backend', 'Pinecone Vector DB', 'Gemini AI API'],
      bulletPoints: [
        'Built a full-stack learning platform using Node.js, Express, React, and MongoDB Atlas that converts static study materials into interactive courses with RAG-based search, flashcards, and automated quizzes.',
        'Implemented vector search by chunking text, generating embeddings via the Gemini API, and storing vector representations in Pinecone with scoped courseId metadata filtering to prevent cross-course data leakage.',
        'Engineered a multi-feature AI engine featuring chat-with-material, automated MCQ/short-answer quiz generation, automated flashcard generation, and document summarization using structured JSON responses.'
      ],
      keyFeatures: [
        'RAG-based search with courseId metadata scoping',
        'Chat-with-study-material AI engine',
        'Automated MCQ & short-answer quiz generation',
        'Automated smart flashcard generation',
        'Document summarization with structured JSON responses'
      ],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/demo-2',
      featured: true
    },
    {
      id: 'proj-3',
      number: '03',
      title: 'Library Management System',
      category: 'React, Node.js, Express, MongoDB, HTML5, CSS3',
      description: 'A full-stack web application designed to streamline library operations including book cataloging, inventory tracking, and membership management.',
      fullDescription: 'Developed a full-stack web application using React, Node.js, Express, and MongoDB to streamline library operations, including book cataloging, inventory tracking, and user membership management. Implemented RESTful API endpoints for complete CRUD operations, enabling librarians to manage book records, issue books, process returns, and update availability status in real time. Designed responsive user interface components with React, HTML5, and CSS3, incorporating dynamic search and filtering functionality to help users locate books by title, author, or genre. Structured MongoDB data schemas for books, users, and borrowing transactions, ensuring data integrity and efficient queries for trackable issue/return workflows.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
      components: ['React User Interface', 'RESTful API Services', 'MongoDB Schemas', 'Inventory Tracker'],
      modules: ['React User Interface', 'RESTful API Services', 'MongoDB Schemas', 'Inventory Tracker'],
      bulletPoints: [
        'Developed a full-stack web application using React, Node.js, Express, and MongoDB to streamline library operations, including book cataloging, inventory tracking, and user membership management.',
        'Implemented RESTful API endpoints for complete CRUD operations, enabling librarians to manage book records, issue books, process returns, and update availability status in real time.',
        'Designed responsive user interface components with React, HTML5, and CSS3, incorporating dynamic search and filtering functionality to help users locate books by title, author, or genre.',
        'Structured MongoDB data schemas for books, users, and borrowing transactions, ensuring data integrity and efficient queries for trackable issue/return workflows.'
      ],
      keyFeatures: [
        'Complete RESTful CRUD operations for library catalog',
        'User membership & borrowing transaction management',
        'Real-time book availability and return status tracking',
        'Dynamic search & multi-genre filtering system',
        'Structured MongoDB data integrity schemas'
      ],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/demo-3',
      featured: true
    }
  ],

  internships: [
    {
      id: 'intern-1',
      role: 'Embedded Systems Intern',
      company: 'Huebits',
      period: 'Technical Training & Internship',
      location: 'Embedded Systems',
      type: 'Technical Internship',
      description: 'Gained hands-on exposure to embedded systems and microcontroller-based applications through structured training.',
      responsibilities: [
        'Gained hands-on exposure to embedded systems and microcontroller-based applications through structured training.',
        'Applied Embedded C and core microcontroller concepts to build and debug small hardware-software modules.',
        'Worked with hardware interfacing techniques and embedded development fundamentals.'
      ],
      technologies: ['Embedded C', 'Microcontrollers', 'Hardware Interfacing', 'Hardware Debugging']
    },
    {
      id: 'intern-2',
      role: 'Generative AI Intern',
      company: 'PurpleLane',
      period: 'One-Month Intensive Internship',
      location: 'Generative AI',
      type: 'AI & Machine Learning Internship',
      description: 'Completed a one-month intensive internship covering Generative AI concepts, tools, and real-world applications.',
      responsibilities: [
        'Completed a one-month intensive internship covering Generative AI concepts, tools, and real-world applications.',
        'Participated in technical learning activities, hands-on projects, and assessments; achieved certification.'
      ],
      technologies: ['Generative AI', 'LLM Tools', 'Prompt Engineering', 'AI Applications']
    }
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'B.Tech in Electronics & Communication Technology',
      institution: 'SASI Institute of Technology & Engineering, Tadepalligudem',
      period: '2023 – 2027 (Pursuing)',
      score: 'Pursuing',
      field: 'Electronics and Communication Technology',
      highlights: [
        'Specializing in Embedded C, ESP32 Microcontroller programming, Sensor Interfacing, and UART/I2C/SPI protocols',
        'Practical knowledge of Arduino IDE, Keil µVision, Proteus, debugging, and hardware-software integration',
        'Developing responsive web and AI applications using Python, HTML, CSS, JavaScript, React, Node.js, and MongoDB'
      ]
    },
    {
      id: 'edu-2',
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      period: '2021 – 2023',
      score: 'GPA: 87.7 / 100',
      field: 'Mathematics, Physics, Chemistry (MPC)',
      highlights: [
        'Graduated with distinction with a GPA of 87.7 / 100',
        'Strong analytical foundations in mathematics, physical sciences, and circuit fundamentals'
      ]
    }
  ],

  certificates: [
    {
      id: 'cert-1',
      title: 'Free Embedded Systems Course',
      organization: 'Simplilearn SkillUp',
      category: 'Embedded Systems',
      year: '2026',
      certificateDate: '15 June 2026',
      certificateCode: '10349651',
      credentialId: '10349651',
      recipientName: 'YADLA SURYANARAYANA',
      badgeColor: 'from-blue-600 to-indigo-600',
      description: 'Completed a dedicated Embedded Systems course covering foundational concepts and practical learning in embedded technology.',
      skills: ['Embedded Systems', 'Microcontrollers', 'Embedded C', 'Hardware Concepts'],
      verifyUrl: 'https://simplilearn.com/verify'
    },
    {
      id: 'cert-2',
      title: 'VLSI and Embedded Systems Internship',
      organization: 'APP Genesis Soft Solutions Pvt. Ltd.',
      category: 'VLSI & Embedded Systems',
      year: '2026',
      duration: '11 May 2026 – 08 July 2026',
      issued: 'July 08, 2026',
      certificateDate: '08 July 2026',
      credentialId: 'EMP5-ICERT400007',
      certificateCode: 'EMP5-ICERT400007',
      recipientName: 'Suryanarayana Yadla',
      badgeColor: 'from-cyan-500 to-blue-700',
      description: 'Successfully completed a 2-month Short-Term Internship in VLSI and Embedded Systems, gaining practical exposure to hardware and embedded-system technologies.',
      skills: ['VLSI Design', 'Embedded Systems', 'Hardware Interfacing', 'Embedded Technologies'],
      verifyUrl: 'https://ultrabook.in/ongoing-internships/verify/'
    },
    {
      id: 'cert-3',
      title: 'Introduction to Internet of Things',
      organization: 'NPTEL (IIT Kharagpur) & Swayam',
      platform: 'NPTEL / Swayam (MoE, Govt. of India)',
      category: 'IoT',
      year: '2026',
      duration: 'Jan-Apr 2026 (12 week course)',
      credentialId: 'NPTEL26CS37S850100346',
      certificateCode: 'NPTEL26CS37S850100346',
      recipientName: 'YADLA SURYANARAYANA',
      badgeColor: 'from-rose-600 to-amber-600',
      description: 'Awarded Elite certificate by NPTEL & IIT Kharagpur for completing the 12-week Introduction to Internet of Things course with an 80% consolidated score (Assignments: 24.16/25, Exam: 55.5/75, 4 credits).',
      skills: ['IoT Architecture', 'Sensors & Actuators', 'IoT Protocols', 'Cloud Telemetry', 'Embedded Computing'],
      verifyUrl: 'https://nptel.ac.in/noc'
    },
    {
      id: 'cert-3b',
      title: 'Internet of Things (IOT) Internship',
      organization: 'SkillDzire (AICTE Approved)',
      platform: 'SkillDzire Technologies',
      category: 'IoT',
      year: '2025',
      duration: '05-May-2025 to 20-Jun-2025',
      issued: '20-Jun-2025',
      certificateDate: '20-Jun-2025',
      credentialId: 'SDST-25-15610',
      certificateCode: 'SDST-25-15610',
      recipientName: 'Yadla Suryanaryana',
      badgeColor: 'from-red-600 to-amber-600',
      description: 'Successfully completed short-term Internship programme titled Internet of Things (IOT) under SkillDzire, organized in collaboration with AICTE, gaining practical exposure to connected systems and IoT hardware.',
      skills: ['Internet of Things (IOT)', 'Sensor Networks', 'Connected Systems', 'Telemetry & Firmware'],
      verifyUrl: 'https://skilldzire.com/verify'
    },
    {
      id: 'cert-4',
      title: 'Mastering GenAI: Building AI-Powered Applications',
      organization: 'PurpleLane (ISO 9001:2015)',
      category: 'Generative AI',
      year: '2026',
      duration: '2-week workshop',
      certificateDate: '03-01-2026',
      issued: '03-01-2026',
      credentialId: 'PL-GENAI-2026-0301',
      certificateCode: 'PL-GENAI-2026-0301',
      recipientName: 'YADLA SURYANARAYANA',
      badgeColor: 'from-purple-500 to-indigo-600',
      description: 'Completed a 2-week hands-on workshop focused on Generative AI and building AI-powered applications with PurpleLane, MSME & Skill India recognized.',
      skills: ['Generative AI', 'LLM Applications', 'AI Engineering', 'Prompt Engineering'],
      verifyUrl: 'https://example.com/verify'
    },
    {
      id: 'cert-5',
      title: 'MERN Stack Workshop',
      organization: 'PurpleLane',
      category: 'Web Development',
      year: '2025',
      duration: '2 weeks',
      issued: '18 October 2025',
      certificateDate: '18 October 2025',
      credentialId: 'PL-MERN-2025',
      badgeColor: 'from-blue-600 to-sky-500',
      description: 'Successfully completed a 2-week MERN Stack workshop, gaining practical exposure to modern full-stack web development using the MERN technology stack.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
      verifyUrl: 'https://example.com/verify'
    },
    {
      id: 'cert-6',
      title: 'Python Essentials 1',
      organization: 'Cisco Networking Academy & OpenEDG Python Institute',
      platform: 'Cisco Networking Academy',
      category: 'Programming',
      year: '2024',
      certificateDate: 'December 17, 2024',
      credentialId: 'CISCO-PY-ESS1-2024',
      certificateCode: 'CISCO-PY-ESS1-2024',
      recipientName: 'YADLA SURYANARAYANA',
      badgeColor: 'from-sky-500 to-blue-700',
      description: 'Statement of Achievement for completing the Python Essentials 1 course by Cisco Networking Academy in collaboration with OpenEDG Python Institute, mastering Python 3 fundamentals, algorithms, and standard library problem solving.',
      skills: ['Python 3', 'Algorithms & Problem Solving', 'Standard Library', 'Code Refactoring', 'Debugging'],
      verifyUrl: 'https://www.netacad.com/'
    },
    {
      id: 'cert-7',
      title: 'Node-RED Advanced',
      organization: 'Node-RED Academy / FlowFuse',
      platform: 'Node-RED Academy (sponsored by FlowFuse)',
      category: 'IoT & Automation',
      year: '2026',
      certificateDate: '21 Sep 2026',
      issued: '21 Sep 2026',
      credentialId: '6ab0fc0cddc706a659046426',
      certificateCode: '6ab0fc0cddc706a659046426',
      recipientName: 'YADLA SURYANARAYANA',
      badgeColor: 'from-red-600 to-rose-800',
      description: 'Successfully completed a Node-RED Advanced certification through Node-RED Academy (sponsored by FlowFuse), demonstrating advanced knowledge of flow-based programming, IoT data integration, and systems automation.',
      skills: ['Node-RED', 'Flow-Based Programming', 'IoT Data Integration', 'Systems Automation', 'MQTT & APIs'],
      verifyUrl: 'https://academy.nodered.org/verify/6ab0fc0cddc706a659046426'
    }
  ],

  achievements: [
    {
      id: 'ach-1',
      title: 'Real-Time Athlete Health Monitoring',
      description: 'Developed an ESP32-based real-time monitoring system for tracking athletes’ health and performance metrics using multiple sensors and Embedded C firmware.',
      iconName: 'Cpu',
      badge: 'Embedded Systems'
    },
    {
      id: 'ach-2',
      title: 'AI-Powered Study Companion',
      description: 'Built CourseWhiz, a full-stack AI learning platform featuring RAG-based search, automated quizzes, flashcards, chat-with-material, and document summarization using Gemini API and Pinecone.',
      iconName: 'Brain',
      badge: 'AI Development'
    },
    {
      id: 'ach-3',
      title: 'Full-Stack Library Management System',
      description: 'Engineered a complete RESTful library operations system in React, Node.js, Express, and MongoDB for book cataloging, user memberships, and inventory workflows.',
      iconName: 'Layers',
      badge: 'Full-Stack'
    }
  ],

  additionalInfo: {
    strengths: ['Working with team and hard work', 'Good communication skills'],
    languages: ['English', 'Telugu']
  }
};
