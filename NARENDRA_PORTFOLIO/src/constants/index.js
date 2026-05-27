export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  name: "Narendra Budigi",
  subheading: "Backend Developer | Django | REST APIs",
  description: "Builds scalable backend systems and efficient database-driven applications. Experienced in Django, API development, and performance optimization.",
  cta: "View Projects",
  resume: "Resume",
  resumeUrl: "/Narendra-Resume.pdf",
};

export const ABOUT_CONTENT = {
  bullets: [
    { text: "Builds scalable backend systems using ", highlight: "Django", suffix: " and ", secondaryHighlight: "REST APIs" },
    { text: "Designs optimized ", highlight: "MySQL", suffix: " databases and efficient queries" },
    { text: "Focused on ", highlight: "performance, reliability, and clean architecture" },
  ],
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["Java", "Python", "Go", "TypeScript", "SQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Spring Boot", "Express", "Django", "FastAPI"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD"],
  },
];

export const EXPERIENCE = [
  {
    role: "Python & Web Development Intern",
    company: "Young Mind Technologies",
    period: "June 2023 – Dec 2023",
    description: [
      "Developed backend systems using Django, including REST APIs and database integration",
      "Implemented authentication, CRUD operations, and optimized server-side logic",
      "Integrated backend services with frontend components and improved API efficiency"
    ],
  },
];

export const PROJECTS = [
  {
    title: "Event Flow – Campus Event Manager",
    image: "/src/assets/event_flow.png",
    bullets: [
      "Built backend system for student event registration",
      "Designed optimized MySQL schema and APIs",
      "Developed admin dashboard for monitoring"
    ],
    tags: ["Django", "MySQL", "REST API", "React"],
    github: "https://github.com/Narendrabudigi/Innovation-Hub.git",
    demo: "#",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Service Hub Website",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    bullets: [
      "Developed service booking platform with authentication",
      "Designed relational database for users and workflows",
      "Integrated backend APIs with frontend"
    ],
    tags: ["Django", "PostgreSQL", "React", "Tailwind"],
    github: "https://github.com/Narendrabudigi/Service-Hub.git",
    demo: "#",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Sentiment Analysis of E-commerce Reviews",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    bullets: [
      "Built ML model for sentiment classification",
      "Deployed using Django REST APIs",
      "Enabled real-time and batch processing"
    ],
    tags: ["Python", "Django", "Scikit-Learn", "NLTK"],
    github: "https://github.com/Narendrabudigi/Sentiment-Analysis.git",
    demo: "#",
    color: "from-orange-500/20 to-yellow-500/20"
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "KL University, Vijayawada — CGPA: 9.5",
    year: "2024 – 2027",
    description: "Focused on Data Structures, Algorithms, DBMS, and scalable backend systems.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Sri Venkateswara Government Polytechnic, Tirupati — 94.6%",
    year: "2021 – 2024",
    description: "Built strong fundamentals in programming, databases, and system design.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Completed",
    link: "#",
  },
  {
    title: "Data Science using Python",
    issuer: "NPTEL",
    date: "Completed",
    link: "#",
  },
  {
    title: "Google AI/ML Virtual Internship",
    issuer: "AICTE & Google",
    date: "Completed",
    link: "#",
  },
  {
    title: "Software Engineer Role Certification",
    issuer: "HackerRank",
    date: "Completed",
    link: "#",
  },
  {
    title: "CI/CD Pipelines with Jenkins & Docker",
    issuer: "ICT Academy / AWS Academy",
    date: "Completed",
    link: "#",
  },
];

export const LEADERSHIP = [
  {
    role: "Web Development Wing Lead",
    organization: "Innovation Hub, KL University",
    period: "2021 – 2024",
    description: [
      "Led a development team and mentored students in backend and full-stack technologies",
      "Guided projects and conducted technical sessions on web development"
    ],
  },
  {
    role: "Student Body Member",
    organization: "Veda Club, KL University",
    period: "June 2024 – Present",
    description: [
      "Organized workshops and mentored 100+ students in skill development"
    ],
  },
];

export const CONTACT = {
  email: "narendrayadavbudigi@gmail.com",
  twitter: "https://twitter.com/narendra_budigi",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Narendrabudigi",
  linkedin: "https://www.linkedin.com/in/narendrabudigi/",
};
