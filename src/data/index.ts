export const personalInfo = {
  name: "Himel Shikdar",
  title: "Computer Engineer",
  titles: [
    "Full Stack Developer",
    "Networking & IT Support",
    "UI/UX Enthusiast",
  ],
  location: "Rajbari, Bangladesh",
  locationUrl: "https://maps.app.goo.gl/R7nPX1MUHsc3sGUC8",
  email: "hemelshikder03@gmail.com",
  phone: "+8801756707016",
  facebook: "https://www.facebook.com/himel007sr",
  instagram: "https://www.instagram.com/himelsrs/",
  github: "https://github.com/himelshikdar0",
  linkedin: "https://www.linkedin.com/in/hemel-shikder-748a41253/",
  bio: "Passionate about building modern web applications, creating beautiful user interfaces, solving real-world problems through technology, and continuously learning new technologies.",
};

export const aboutText = [
  "I am a dedicated Computer Engineer with a Diploma in Computer Engineering from Faridpur Polytechnic Institute. My journey in technology has been driven by a passion for solving real-world problems through innovative solutions.",
  "With hands-on experience in IT Support, Networking, and Full Stack Development, I bring a unique blend of technical skills to every project. I specialize in building modern web applications using React, Firebase, and Tailwind CSS, while maintaining strong expertise in networking technologies including Cisco, MikroTik, and CCTV systems.",
  "My professional experience spans across Data Entry Operations, ERP systems (SAP), and Technical Support Engineering, giving me a comprehensive understanding of both the technical and operational aspects of technology solutions.",
];

export const skills = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Vite", level: 80 },
  ],
  backend: [
    { name: "Firebase", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
  ],
  database: [
    { name: "Firestore", level: 85 },
    { name: "Firebase Auth", level: 85 },
  ],
  programming: [
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 85 },
  ],
  networking: [
    { name: "Cisco", level: 85 },
    { name: "MikroTik", level: 80 },
    { name: "Routing & Switching", level: 85 },
    { name: "VLAN", level: 80 },
    { name: "OSPF", level: 75 },
    { name: "DHCP", level: 85 },
    { name: "VPN", level: 80 },
    { name: "CCTV", level: 85 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "SAP ERP", level: 75 },
    { name: "Photoshop", level: 70 },
    { name: "Premiere Pro", level: 65 },
    { name: "Filmora", level: 70 },
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer & Software Builder",
    company: "Freelance & Independent SaaS Projects",
    location: "Rajbari, Bangladesh",
    period: "Nov 2025 - Present",
    current: true,
    description:
      "Developing high-impact full-stack web applications and SaaS platforms including Aqua Farm SaaS, LEO AI Assistant, and personal digital hubs. Focusing on modern UI/UX design, React, TypeScript, Tailwind CSS, and cloud backends.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Node.js", "UI/UX Design", "Full Stack"],
  },
  {
    id: 2,
    role: "Data Entry Operator & Field Officer",
    company: "Beximco Computers Ltd.",
    location: "Central Food Godown, Rajbari",
    period: "2 May 2024 – 31 Oct 2025",
    current: false,
    description:
      "Managed data entry operations and field coordination for major IT & inventory tracking systems. Operated SAP ERP software, maintaining high data accuracy, operational reporting, and field technical logistics.",
    skills: ["SAP ERP", "Data Management", "Field Operations", "Reporting", "IT Support"],
  },
  {
    id: 3,
    role: "Technical Support Engineer",
    company: "Xplore Net BD (ISP Company)",
    location: "Alipur, Rajbari Sadar, Rajbari",
    period: "1 Feb 2022 – 30 Apr 2024",
    current: false,
    description:
      "Delivered end-to-end technical support for ISP network infrastructure. Managed router configurations (Cisco, MikroTik), VLAN setups, client network troubleshooting, bandwidth routing, and CCTV security installations.",
    skills: [
      "Cisco",
      "MikroTik",
      "Routing & Switching",
      "VLAN",
      "CCTV",
      "Client Support",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Aqua Farm SaaS",
    description:
      "A comprehensive Fish Farm Management System built for modern aquaculture operations. Features pond management, fish stock tracking, feeding management, growth tracking, water quality monitoring, income & expense tracking, sales management, and a powerful dashboard.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}images/project-aquafarm.svg`,
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
    features: [
      "Pond Management",
      "Fish Stock",
      "Feeding Management",
      "Growth Tracking",
      "Water Quality",
      "Income & Expense",
      "Sales",
      "Dashboard",
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my work, skills, and professional experience. Built with a focus on premium UI/UX design and smooth animations.",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}images/project-portfolio.svg`,
    liveDemo: "#",
    github: "#",
    category: "Frontend",
  },
  {
    id: 3,
    title: "My Website",
    description:
      "A personal web application serving as a digital hub for my professional presence and creative projects.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}images/project-website.svg`,
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "LEO AI Assistant",
    description:
      "A powerful Desktop AI Assistant featuring voice interaction, automation capabilities, AI-powered chat, and local AI processing for privacy-focused assistance.",
    tech: ["Python", "AI/ML", "Desktop App"],
    image: `${import.meta.env.BASE_URL}images/project-leo.svg`,
    liveDemo: "#",
    github: "#",
    category: "AI/ML",
  },
  {
    id: 5,
    title: "AI Modina",
    description:
      "An innovative Islamic web application combining modern technology with spiritual guidance, providing an enriching digital experience.",
    tech: ["React", "AI Integration", "Web App"],
    image: `${import.meta.env.BASE_URL}images/project-modina.svg`,
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Unseen Rajbari",
    description:
      "An interactive, minimalist, and visually engaging web application exclusively dedicated to celebrating the rich history, riverine geography, zamindari heritage, and culinary culture of Rajbari District.",
    tech: ["JavaScript", "HTML5", "CSS3", "Interactive Maps", "UI/UX"],
    image: `${import.meta.env.BASE_URL}images/project-rajbari.svg`,
    liveDemo: "#",
    github: "#",
    category: "Frontend",
    features: ["Interactive District Map", "Zamindari Heritage", "Riverine Geography", "Culture & Tourism"],
  },
  {
    id: 7,
    title: "Dr. Nahid Medical Practice",
    description:
      "A professional medical practice and consultant web application for Dr. Nahid, specialist anesthesiologist and critical care physician, featuring clinical service showcases and appointment inquiries.",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    image: `${import.meta.env.BASE_URL}images/project-drnahid.svg`,
    liveDemo: "#",
    github: "#",
    category: "Frontend",
    features: ["Doctor Credentials", "Clinical Services", "Appointment Inquiries", "Patient Resources"],
  },
  {
    id: 8,
    title: "PC Hub Bangladesh E-Commerce",
    description:
      "A high-performance tech e-commerce platform and custom PC building solution for Bangladesh's tech and gaming community, featuring real-time component compatibility verification and custom PC building.",
    tech: ["Node.js", "Express", "JavaScript", "E-Commerce", "PC Builder"],
    image: `${import.meta.env.BASE_URL}images/project-pchub.svg`,
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
    features: ["Custom PC Builder", "Compatibility Engine", "Product Catalog", "Cart & Checkout"],
  },
  {
    id: 9,
    title: "Enterprise ERP Windows Suite",
    description:
      "A comprehensive Enterprise Resource Planning (ERP) desktop software for Windows featuring multi-workspace accounting, Point of Sale (POS), inventory management, and database synchronization.",
    tech: ["Electron", "React", "TypeScript", "Prisma", "Express"],
    image: `${import.meta.env.BASE_URL}images/project-erp.svg`,
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
    features: ["POS Checkout", "Inventory Control", "Financial Accounting", "Desktop Client"],
  },
  {
    id: 10,
    title: "HV Player – FTP Direct Streamer",
    description:
      "An enterprise-grade Windows Desktop media player for high-bitrate direct streaming from remote and local FTP media servers without prior disk downloads, powered by .NET 8, LibVLCSharp, and WASAPI audio.",
    tech: [".NET 8", "C#", "WPF", "LibVLCSharp", "FluentFTP"],
    image: `${import.meta.env.BASE_URL}images/project-hvplayer.svg`,
    liveDemo: "#",
    github: "#",
    category: "Desktop App",
    features: ["Direct FTP Streaming", "WASAPI Audio", "Automated TV Series Sorting", "Modern Dark UI"],
  },
  {
    id: 11,
    title: "Bangla Voice Keyboard",
    description:
      "A production-grade Manifest V3 Chrome Extension transforming spoken Bengali into clean text, phonetic English pronunciation, instant translations, and polished writing across any web input field.",
    tech: ["Chrome Extension", "JavaScript", "AI Audio API", "Web Speech"],
    image: `${import.meta.env.BASE_URL}images/project-banglavoice.svg`,
    liveDemo: "#",
    github: "#",
    category: "AI/ML",
    features: ["Bengali Voice-to-Text", "Phonetic Transliteration", "AI Polish & Translation", "Universal Browser Support"],
  },
  {
    id: 12,
    title: "Vitalis Health Tracker",
    description:
      "A production-grade cross-platform Personal Health Tracker application available as both a Web Application and Mobile App (iOS & Android) with a shared Node.js/Express REST API and PostgreSQL database.",
    tech: ["React", "React Native", "Expo", "Node.js", "PostgreSQL"],
    image: `${import.meta.env.BASE_URL}images/project-vitalis.svg`,
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
    features: ["Vitals Tracking", "Nutrition & Activity Logs", "Doctor Appointments", "Cross-Platform Sync"],
  },
  {
    id: 13,
    title: "NASA Junior Astronaut Trainer",
    description:
      "An interactive 3D NASA training simulator and STEM educational space exploration platform built for the NASA International Space Apps Challenge with Three.js and mission physics.",
    tech: ["React 19", "Three.js", "TypeScript", "Tailwind CSS", "Zustand"],
    image: `${import.meta.env.BASE_URL}images/project-nasa.svg`,
    liveDemo: "#",
    github: "#",
    category: "AI/ML",
    features: ["3D Spacecraft Simulator", "NASA Missions", "STEM Education", "Space Apps Challenge"],
  },
  {
    id: 14,
    title: "Chat Bot AI Assistant",
    description:
      "A personal AI assistant bot for WhatsApp and Facebook Messenger powered by Google Gemini, maintaining per-contact conversation memory and automated response handling.",
    tech: ["Node.js", "Google Gemini API", "Express", "WhatsApp Web JS"],
    image: `${import.meta.env.BASE_URL}images/project-chatbot.svg`,
    liveDemo: "#",
    github: "#",
    category: "AI/ML",
    features: ["Gemini AI Integration", "WhatsApp Automation", "Messenger Support", "Context Memory"],
  },
  {
    id: 15,
    title: "CypherX Crypto Platform",
    description:
      "A modern cryptocurrency exchange and asset tracking platform featuring real-time trading charts, instant swaps, QR transactions, and a responsive mobile-first UI.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lightweight Charts"],
    image: `${import.meta.env.BASE_URL}images/project-cypherx.svg`,
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
    features: ["Live Candlestick Charts", "Asset Balances", "QR Code Transactions", "Crypto Swaps"],
  },
  {
    id: 16,
    title: "Velocity Rider 3D",
    description:
      "A fast-paced 3D bike racing browser game featuring procedural highway tracks, 3D character animations, responsive collision physics, and speed leaderboards.",
    tech: ["Three.js", "Vite", "JavaScript", "3D Game Engine"],
    image: `${import.meta.env.BASE_URL}images/project-velocity.svg`,
    liveDemo: "#",
    github: "#",
    category: "Frontend",
    features: ["Procedural 3D Tracks", "Bike Physics Engine", "Dynamic Obstacles", "Score & Speed Leaderboard"],
  },
  {
    id: 17,
    title: "Medhabee Smart Study",
    description:
      "An interactive digital curriculum platform designed for Bangladeshi school students featuring subject chapters, practice quizzes, and learning progress analytics.",
    tech: ["React", "Vite", "Node.js", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}images/project-medhabee.svg`,
    liveDemo: "#",
    github: "#",
    category: "Frontend",
    features: ["Curriculum Chapters", "Interactive Quizzes", "Progress Tracking", "Class Resources"],
  },
  {
    id: 18,
    title: "Instagram Downloader Pro",
    description:
      "A high-performance Chrome Extension (Manifest V3) designed to download high-fidelity original media streams, reels, and stories with automated download queues.",
    tech: ["Chrome Extension", "JavaScript", "Media Stream API"],
    image: `${import.meta.env.BASE_URL}images/project-downloader.svg`,
    liveDemo: "#",
    github: "#",
    category: "Frontend",
    features: ["Original Quality Media Extraction", "Batch Download Queue", "Modern Popup UI"],
  },
  {
    id: 19,
    title: "BDIX Ultra Connect & Diagnostic",
    description:
      "A cross-platform mobile utility app built with Flutter for ISP & BDIX bandwidth testing, peering server discovery, and network latency diagnostics.",
    tech: ["Flutter", "Dart", "Android", "Network Diagnostics"],
    image: `${import.meta.env.BASE_URL}images/project-bdix.svg`,
    liveDemo: "#",
    github: "#",
    category: "Mobile",
    features: ["BDIX Server Discovery", "Latency & Ping Monitor", "FTP Bandwidth Test", "Routing Diagnostic"],
  },
];

export const education = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "Faridpur Polytechnic Institute",
    year: "2023",
    cgpa: "3.14/4.00",
    description:
      "Comprehensive program covering computer hardware, software development, networking, and IT infrastructure management.",
  },
];

export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building modern, scalable web applications using React, Firebase, and the latest technologies.",
    icon: "Code",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive user interfaces with a focus on user experience and modern design principles.",
    icon: "Palette",
  },
  {
    title: "Firebase Development",
    description:
      "Implementing robust backend solutions with Firebase Authentication, Firestore, and Cloud Functions.",
    icon: "Database",
  },
  {
    title: "Networking",
    description:
      "Setting up and managing network infrastructure including Cisco, MikroTik routers, VLANs, and VPNs.",
    icon: "Network",
  },
  {
    title: "IT Support",
    description:
      "Providing comprehensive technical support for hardware, software, and network-related issues.",
    icon: "Monitor",
  },
  {
    title: "Website Maintenance",
    description:
      "Ensuring websites stay updated, secure, and performant with regular maintenance and support.",
    icon: "Settings",
  },
];
