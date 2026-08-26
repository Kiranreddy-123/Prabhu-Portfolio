// ==========================================================================
// CENTRAL PORTFOLIO CONFIGURATION DATA - PRABHU KIRAN REDDY LAKKIREDDY
// Information Technology Graduate (2026) | CGPA: 8.6 / 10.00
// Location: Hyderabad, Telangana, India
// ==========================================================================

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'fullstack' | 'cloud' | 'web3' | 'mobile';
  featured: boolean;
  metrics: string;
  description: string;
  architecture: string[];
  challenges: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageGradient: string;
  stats: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Open-Source' | 'Internship';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  category: string;
  description: string;
  badge: string;
  icon: string;
}

export const portfolioData = {
  profile: {
    name: "Prabhu Kiran Reddy Lakkireddy",
    shortName: "Prabhu Kiran Reddy",
    initials: "PK",
    handle: "@prabhukiran.dev",
    role: "Information Technology Graduate (2026) | Software Developer",
    rotatingTitles: [
      "Aspiring Software Development Engineer",
      "Full-Stack Web Developer (React & Node.js)",
      "Machine Learning & Security Enthusiast",
      "Java & Problem Solving (200+ Solved)"
    ],
    tagline: "B.Tech in Information Technology (2022–2026) | LakiReddy Bali Reddy College of Engineering (CGPA: 8.6 / 10.00)",
    bio: "I am a 2026 Information Technology graduate actively seeking Entry-Level Software Engineering and Full-Stack Developer roles. I have hands-on internship experience in Full-Stack Web Development (INSTEDA Pvt Ltd) and Data Analytics (JS Solutions), along with 200+ coding problems solved across LeetCode & GeeksforGeeks and industry certifications from Salesforce, Oracle, and Google.",
    status: {
      available: true,
      text: "Actively Seeking Software Engineer & Full-Stack Developer Roles",
      location: "Hyderabad, Telangana, India",
    },
    metrics: [
      { label: "B.Tech CGPA", value: "8.6", change: "IT Graduate (2022-26)" },
      { label: "Coding Problems", value: "200+", change: "LeetCode & GFG" },
      { label: "ML Bootcamp", value: "2nd Place", change: "Innovative ML Solution" },
      { label: "Certifications", value: "4+", change: "Salesforce, Oracle, Google" },
    ],
    resumePdfUrl: "/Prabhu_Kiran_Reddy_Lakkireddy_Resume.pdf",
    avatarUrl: "/prabhu_photo.jpg",
  },

  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "lakkireddyprabhukiranreddy@gmail.com",
    phone: "+91 9392578863",
    calendly: "https://calendly.com",
  },

  // PROJECTS DIRECTLY FROM YOUR RESUME:
  projects: [
    {
      id: "resume-screening-system",
      title: "Resume Screening System (Rule-Based)",
      tagline: "Automated candidate shortlisting & ranking system using Java and rule-based filtering logic",
      category: "ai",
      featured: true,
      metrics: "Java OOP • Regex Parsing • Rule-Based Scoring (2025–2026)",
      description: "Designed and developed an automated Resume Screening System using Java and rule-based filtering logic for candidate shortlisting. Implemented keyword matching, text parsing, and scoring algorithms to rank resumes based on skills and experience, using Regular Expressions (Regex) and string processing techniques.",
      architecture: [
        "Regular Expression (Regex) string processing engine extracting candidate skills, contact info, and education",
        "Weighted rule-based scoring algorithm comparing candidate qualifications against job requirements",
        "Modular and maintainable Object-Oriented Programming (OOP) architecture",
        "Automated candidate ranking logic for fast, accurate resume shortlisting"
      ],
      challenges: "Engineered robust regular expression rules and string processing algorithms to accurately parse varied resume layouts without missing critical candidate keywords.",
      technologies: ["Java", "OOP", "Regular Expressions (Regex)", "Text Parsing", "Rule-Based Logic", "String Processing"],
      liveUrl: "#",
      githubUrl: "#",
      imageGradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #ec4899 100%)",
      stats: [
        { label: "Core Logic", value: "Java & Regex" },
        { label: "Architecture", value: "Modular OOP" },
        { label: "Outcome", value: "Automated Ranking" }
      ]
    },
    {
      id: "network-traffic-analysis",
      title: "Network Traffic Analysis System",
      tagline: "Machine Learning pipeline for network anomaly detection, traffic analysis, and threat detection",
      category: "ai",
      featured: true,
      metrics: "Python • Machine Learning • Threat Detection (2024–2025)",
      description: "Developed a Network Traffic Analysis System using Machine Learning for anomaly detection and network security. Performed data preprocessing, feature extraction, and traffic analysis to identify abnormal network activities. Applied ML algorithms and statistical methods to improve threat detection accuracy.",
      architecture: [
        "Network dataset preprocessing, normalization, and feature extraction pipeline",
        "Machine Learning classification models trained to detect abnormal traffic signatures and anomalies",
        "Statistical analysis methods applied to minimize false positives and improve threat detection accuracy",
        "Efficient monitoring and evaluation pipeline for analyzing large-scale network traffic datasets"
      ],
      challenges: "Handled high-dimensional network flow data and engineered discriminative traffic features to effectively detect abnormal network intrusions with high accuracy.",
      technologies: ["Python", "Machine Learning", "Data Preprocessing", "Feature Extraction", "Traffic Analysis", "Network Security"],
      liveUrl: "#",
      githubUrl: "#",
      imageGradient: "linear-gradient(135deg, #00f0ff 0%, #0284c7 50%, #4f46e5 100%)",
      stats: [
        { label: "Domain", value: "ML & Cybersecurity" },
        { label: "Feature Pipeline", value: "Data Preprocessing" },
        { label: "Objective", value: "Anomaly Detection" }
      ]
    },
    {
      id: "blood-banking-system",
      title: "Blood Banking Management System",
      tagline: "Web-based responsive platform for donor management, request handling, and blood inventory",
      category: "fullstack",
      featured: true,
      metrics: "React • Node.js • Express.js • MongoDB/MySQL",
      description: "Developed during Full Stack Web Development Internship at INSTEDA Pvt Ltd (Oct 2024 – Dec 2024). Built responsive and interactive user interfaces using HTML, CSS, JavaScript, and React, alongside server-side backend functionality using Node.js, Express.js, and MongoDB/MySQL.",
      architecture: [
        "Responsive, intuitive user interface built with HTML, CSS, JavaScript, and React",
        "Robust server-side backend built with Node.js and Express.js handling request validation and auth",
        "Relational MySQL / MongoDB schema storing blood inventory units and donor profiles",
        "Real-time donor discovery and urgent hospital blood request dispatch workflow"
      ],
      challenges: "Designed end-to-end full-stack data flow and structured REST APIs ensuring real-time consistency between available blood stocks and incoming urgent medical requests.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      imageGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)",
      stats: [
        { label: "Frontend", value: "React & CSS" },
        { label: "Backend", value: "Node & Express" },
        { label: "Database", value: "MySQL / MongoDB" }
      ]
    },
    {
      id: "sales-analytics-dashboard",
      title: "Sales Analytics & Business Intelligence Dashboard",
      tagline: "Interactive Power BI analytics project for business insights, data modeling, and trend analysis",
      category: "cloud",
      featured: true,
      metrics: "Power BI • SQL • Advanced Excel (May–Jul 2025)",
      description: "Developed during Data Analytics Internship at JS Solutions (May 2025 – Jul 2025). Performed data cleaning, analysis, and reporting using Excel and SQL, and created dynamic interactive dashboards and reports using Power BI for actionable business insights and sales trend analysis.",
      architecture: [
        "Data cleaning and relational data modeling pipelines using advanced SQL queries and Excel",
        "Interactive Power BI dashboards tracking sales trends, area performance, and company revenue",
        "DAX calculations and custom visual filters for executive-level business decision making",
        "Automated reporting workflows delivering insights into product margins and regional demand"
      ],
      challenges: "Transformed unstructured sales records into clean relational data models and built interactive Power BI visualizations with fast query refresh rates.",
      technologies: ["Power BI", "SQL", "Excel", "Data Cleaning", "Data Analytics", "Trend Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      imageGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
      stats: [
        { label: "Visualization", value: "Power BI" },
        { label: "Querying", value: "SQL & Excel" },
        { label: "Focus", value: "Trend Analysis" }
      ]
    }
  ] as Project[],

  // SKILLS EXACTLY FROM YOUR RESUME:
  skills: [
    {
      category: "Programming Languages & Core",
      description: "Strong foundation in Java, C, Python, and algorithmic problem solving",
      icon: "Server",
      skills: [
        { name: "Java", level: 92, tag: "Primary / OOP" },
        { name: "Python", level: 90, tag: "ML & Data" },
        { name: "C Programming", level: 85, tag: "Foundational" },
        { name: "Data Structures & Algorithms", level: 90, tag: "200+ Solved" },
        { name: "Problem Solving", level: 92, tag: "Core" }
      ]
    },
    {
      category: "Web & Backend Technologies",
      description: "Responsive frontends, server-side REST APIs, and modern web frameworks",
      icon: "Layout",
      skills: [
        { name: "HTML & CSS", level: 94, tag: "UI / Web" },
        { name: "JavaScript", level: 88, tag: "Frontend" },
        { name: "React", level: 86, tag: "UI Library" },
        { name: "Node.js & Express.js", level: 85, tag: "Backend" },
        { name: "Agile Methodologies & SDLC", level: 90, tag: "Practices" }
      ]
    },
    {
      category: "Database & Data Technologies",
      description: "Relational database querying, Power BI reporting, and data analysis",
      icon: "Cloud",
      skills: [
        { name: "SQL (Database Technologies)", level: 92, tag: "Primary DB" },
        { name: "Power BI", level: 88, tag: "Dashboards" },
        { name: "Microsoft Excel", level: 92, tag: "Analytics" },
        { name: "MongoDB / MySQL", level: 86, tag: "Databases" },
        { name: "Data Cleaning & Reporting", level: 88, tag: "Analytics" }
      ]
    },
    {
      category: "AI, Cloud, Security & Certifications",
      description: "Industry certifications in Salesforce AI, Oracle Cloud, GenAI, and Cisco",
      icon: "Brain",
      skills: [
        { name: "Salesforce AI Associate", level: 94, tag: "Certified" },
        { name: "Oracle Cloud Data Services", level: 90, tag: "Certified" },
        { name: "Google Generative AI Badges", level: 92, tag: "Certified" },
        { name: "Cisco IoT & Cybersecurity", level: 88, tag: "Certified" },
        { name: "Machine Learning & Traffic Analysis", level: 88, tag: "ML Project" }
      ]
    }
  ] as SkillCategory[],

  // INTERNSHIP EXPERIENCE:
  experience: [
    {
      period: "May 2025 — Jul 2025",
      role: "Data Analytics Intern",
      company: "JS Solutions",
      location: "Offline",
      type: "Internship",
      description: "Performed data cleaning, analysis, and reporting using Excel and SQL, and developed interactive Power BI dashboards.",
      achievements: [
        "Performed data cleaning, analysis, and reporting using Excel and SQL",
        "Created interactive dashboards and reports using Power BI to extract actionable business insights",
        "Developed a Sales Analytics project for business insights and trend analysis"
      ],
      technologies: ["Excel", "SQL", "Power BI", "Data Analytics", "Reporting", "Trend Analysis"]
    },
    {
      period: "Oct 2024 — Dec 2024",
      role: "Full Stack Web Development Intern",
      company: "INSTEDA Pvt Ltd",
      location: "Offline",
      type: "Internship",
      description: "Developed responsive web applications and backend functionalities using modern full-stack web technologies.",
      achievements: [
        "Developed responsive web applications using HTML, CSS, JavaScript, and React",
        "Built backend functionalities using Node.js, Express.js, and MongoDB/MySQL",
        "Developed a web-based Blood Banking Management System"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL"]
    }
  ] as ExperienceItem[],

  // ACHIEVEMENTS:
  achievements: [
    {
      title: "2nd Place in Machine Learning Bootcamp",
      category: "Innovation & AI",
      description: "Secured 2nd place in a competitive Machine Learning Bootcamp for developing and presenting innovative machine learning solutions.",
      badge: "2nd Place Winner",
      icon: "Trophy"
    },
    {
      title: "Solved 200+ Coding Problems",
      category: "Data Structures & Algorithms",
      description: "Solved 200+ algorithmic coding problems across LeetCode and GeeksforGeeks, strengthening problem-solving and algorithmic fundamentals.",
      badge: "200+ Problems",
      icon: "Code"
    },
    {
      title: "NCC Volunteer & Police Dept. Certification",
      category: "Leadership & Public Service",
      description: "Served as an NCC Volunteer during public service and temple security activities; received official certification from the Andhra Pradesh Police Department.",
      badge: "Certified Volunteer",
      icon: "Shield"
    }
  ] as Achievement[],

  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "LakiReddy Bali Reddy College of Engineering, Mylavaram",
      period: "2022 — 2026",
      score: "CGPA: 8.6 / 10.00",
      location: "Mylavaram, Andhra Pradesh, India",
      coursework: [
        "Data Structures & Algorithms",
        "Problem Solving",
        "SQL & Database Technologies",
        "Agile Methodologies & SDLC",
        "Object-Oriented Programming (Java)",
        "Software Engineering"
      ]
    }
  ],

  certifications: [
    {
      title: "Salesforce AI Associate Certification",
      issuer: "Salesforce",
      category: "Artificial Intelligence",
      badge: "Salesforce Certified"
    },
    {
      title: "Oracle Cloud Data Services Certification",
      issuer: "Oracle",
      category: "Cloud Data Services",
      badge: "Oracle Certified"
    },
    {
      title: "Google Generative AI Badges",
      issuer: "Google",
      category: "Generative AI",
      badge: "Google Badge"
    },
    {
      title: "Cisco Certification in IoT and Cybersecurity",
      issuer: "Cisco",
      category: "IoT & Cybersecurity",
      badge: "Cisco Certified"
    }
  ]
};
