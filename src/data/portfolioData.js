// ============================================================
// portfolioData.js — Centralized configuration for Md Younus's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Mohammed Younus",
  firstName: "Md Younus",
  brandName: "Md Younus",
  title: "Data Analyst & Data Science Enthusiast",
  location: "Hyderabad, India",
  phone: "+91 9652638328",
  emails: {
    primary: "mdyounus8328@gmail.com",
    secondary: "mohammedyounus.work@gmail.com",
  },
  summary:
  "Computer Science and Engineering graduate with skills in Python, SQL, Pandas, NumPy, Power BI, and data analysis. Interested in transforming raw data into meaningful insights through data cleaning, visualization, analysis, and practical data-driven projects.",
  resumeUrl: "/Mohammed_Younus_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/YOUNUS-9668",
  linkedin: "https://www.linkedin.com/in/mohammed-younus-5a96552bb/",
};

export const heroContent = {
  greeting: "Hi, I'm Mohammed Younus",
  titleHighlight: "Data Scientist",
  subtitle:
  "I enjoy working with data, uncovering insights, and solving problems using Python, SQL, and Power BI.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mdyounus8328@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Mohammed Younus,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,"
  },
  ctaResume: { text: "Download Resume", href: "/Mohammed_Younus_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mohammed Younus</span>, an aspiring Data Analyst based in Hyderabad, India, passionate about transforming raw data into meaningful insights through data analysis, visualization, and problem-solving.
.`,
techStack: ["Python", "SQL", "Power BI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust and meaningful insights.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Analyze",
      text: "I explore and analyze data to identify patterns, trends, and relationships that can provide meaningful insights.",
    },
    {
      number: "03",
      title: "Visualize",
      text: "I create clear and interactive dashboards that turn complex data into easy-to-understand visual insights.",
    },
    {
      number: "04",
      title: "Present",
      text: "I communicate key findings and data-driven insights clearly to support better decision-making",
    },
  ],
  endText: "Insights that matter!",
};

// Brand New Technical Skills Data
// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming & Query Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 85 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Data Cleaning", level: 85 },
        { name: "Exploratory Data Analysis", level: 80 }
      ]
    },
    {
      title: "Data Visualization & BI",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Dashboard Development", level: 85 },
        { name: "Data Visualization", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "SQL Queries", level: 85 },
        { name: "Joins & CTEs", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Databricks", level: 75 },
        { name: "AWS Basics", level: 65 }
      ]
    },
    {
      title: "Data Science Fundamentals",
      skills: [
        { name: "Data Preprocessing", level: 80 },
        { name: "Data Transformation", level: 80 },
        { name: "Statistical Analysis", level: 70 },
        { name: "Machine Learning Basics", level: 70 }
      ]
    }
  ]
};
// Data Analytics Capabilities
export const contentCreation = {
  badge: "Data Analytics",
  heading: "Turning Raw Data Into Meaningful Insights",
  description:
    "I work with data from cleaning and exploration to visualization, helping transform raw information into clear and useful insights.",

  categories: [
    {
      title: "Data Cleaning",
      description:
        "Preparing raw datasets by handling missing values, duplicates, inconsistent data, and formatting issues.",
      stats: "Python & Pandas",
      icon: "🧹"
    },
    {
      title: "Data Analysis",
      description:
        "Exploring datasets to identify patterns, trends, relationships, and useful information for decision-making.",
      stats: "Python & SQL",
      icon: "📊"
    },
    {
      title: "Data Visualization",
      description:
        "Creating clear visualizations that make complex data easier to understand and communicate.",
      stats: "Power BI & Matplotlib",
      icon: "📈"
    },
    {
      title: "Dashboard Development",
      description:
        "Building interactive dashboards to present KPIs, trends, comparisons, and important business insights.",
      stats: "Power BI",
      icon: "💻"
    }
  ]
};

// Leadership & Responsibilities
export const leadershipList = [
  {
    title: "Class Representative – B.Tech CSE",
    description:
      "Served as a Class Representative, coordinating communication between students and faculty, sharing academic updates, and helping address class-related concerns.",
    role: "Class Representative",
    badge: "Leadership"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "Vault of Codes",
    role: "Python Programming Intern",
    duration: "1 month - Virtual Internship",
    skills: [
      "Python Programming",
      "Problem Solving",
      "Programming Fundamentals",
      "Practical Coding"
    ],
    tech: [
      "Python",
      "VS Code"
    ]
  }
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Communication",
    icon: "💬",
    desc: "Communicating ideas and findings clearly while working with teammates and presenting project outcomes."
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Approaching problems logically, identifying the root cause, and finding practical solutions."
  },
  {
    name: "Analytical Thinking",
    icon: "📊",
    desc: "Examining information carefully to identify patterns, trends, and meaningful insights."
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively with team members, sharing responsibilities, and contributing toward common goals."
  },
  {
    name: "Leadership",
    icon: "👑",
    desc: "Developed leadership and coordination skills through my responsibilities as a Class Representative."
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Comfortable learning new technologies, tools, and approaches based on project requirements."
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Carefully reviewing data and work to identify inconsistencies, errors, and important details."
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Organizing tasks and priorities to complete academic and project work within deadlines."
  }
];
export const projects = [
  {
    id: "food-wastage-analysis",
    number: "01",
    badge: "🚀 Featured Project",
    title: "Global Food Wastage Analysis",
    description:
      "A data analytics project focused on analyzing global food wastage data to identify waste patterns, category-wise trends, and key insights. The project involved data cleaning, analysis, and the development of an interactive Power BI dashboard using KPIs and multiple visualizations to present the findings clearly.",
    techTags: [
      "Power BI",
      "Python",
      "Pandas",
      "Data Analysis",
      "Data Visualization"
    ],
    links: {
      github: "#",
      demo: null,
    },
    isFlagship: true,
  },

  {
    id: "swiggy-data-analysis",
    number: "02",
    badge: null,
    title: "Swiggy Data Analysis Dashboard",
    description:
      "An exploratory data analysis project using a Swiggy dataset to understand restaurant, pricing, rating, and food-related patterns. The data was explored and processed using data analytics tools, followed by dashboard development to present important KPIs and insights visually.",
    techTags: [
      "Databricks",
      "SQL",
      "Power BI",
      "Data Analysis",
      "Dashboard"
    ],
    links: {
      github: "#",
    },
    isFlagship: false,
  },

  {
    id: "college-website",
    number: "03",
    badge: null,
    title: "College Website",
    description:
      "A web-based college platform designed to provide students with access to academic information such as courses, notes, results, and other college resources through a structured and user-friendly interface.",
    techTags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development"
    ],
    links: {
      github: "https://younus-9668.github.io/myclgwebsite/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Cyber Security Analyst",
      issuer: "Indo Dutch Cyber Security School (IDCSS)",
      icon: "🔐",
    },
    {
      name: "Power BI",
      issuer: "CoursePe",
      icon: "📊",
    },
    {
      name: "Python Programming Virtual Internship",
      issuer: "Vault of Codes",
      icon: "💻",
    },
    {
      name: "Oracle Certification",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Generative AI",
      issuer: "Next Wave",
      icon: "🤖",
    },
  ],

  viewAllUrl: "https://drive.google.com/folderview?id=1mPC6VAXWRu1E3jBNjW4w4ngh347mOiCF",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Trinity College of Engineering and Technology (JNTUH)",
  cgpa: "8.1",
  graduation: "2026",
  twelfth: "12th – 87%",
  tenth: "10th – 100%",
};

export const footerContent = {
  taglines: [
    "Data Analytics & Data Science",
    "Python · SQL · Power BI",
    "Turning Data Into Insights",
  ],
  credential: "B.Tech CSE · CGPA 8.1",
  copyright: `© ${new Date().getFullYear()} Mohammed Younus | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
