/**
 * React 3D Portfolio Application for Vaibhav Singh
 */

const {
  useState,
  useEffect,
  useRef
} = React;

// Default fallback resume data ensuring zero downtime on GitHub Pages
const DEFAULT_RESUME_DATA = {
  contact: {
    name: "Vaibhav Singh",
    title: "Machine Learning Engineer & Python/FastAPI Developer",
    email: "vvsvsn7@gmail.com",
    phone: "+91-9369620500",
    location: "India",
    website: "https://dextervaibhav.github.io/",
    github: "https://github.com/dextervaibhav",
    hackerrank: "https://www.hackerrank.com/profile/FlyingMachine",
    leetcode: "300+ Problems Solved",
    linkedin: "https://www.linkedin.com/in/dextervaibhav",
    summary: "M.Tech in Information Technology from University of Hyderabad and B.Tech from IIIT Allahabad. Specialized in 802.11 Wi-Fi modem protocol automation at Qualcomm, asynchronous backend architecture with FastAPI and React, automated data pipelines, and applied Machine Learning / Evolutionary Optimization with 2 published IEEE papers."
  },
  stats: [{
    label: "LeetCode Problems",
    value: "300+",
    icon: "code"
  }, {
    label: "Automation Code",
    value: "6,000+ LOC",
    icon: "terminal"
  }, {
    label: "Published IEEE Papers",
    value: "2",
    icon: "file-text"
  }, {
    label: "Wi-Fi Test Cases Automated",
    value: "200+",
    icon: "wifi"
  }, {
    label: "Reporting Time Reduced",
    value: "80%",
    icon: "trending-up"
  }],
  experience: [{
    company: "Qualcomm",
    role: "Engineer – Modem Protocol Testing",
    period: "Feb 2022 – May 2023",
    location: "Hyderabad, India",
    highlights: ["Automated connectivity testing of 200+ 802.11 (Wi-Fi) test cases using Python APIs for Industrial IoT devices.", "Developed 6000+ lines of automation code for roaming, RTT (Round Trip Time), and association scenarios.", "Debugged and resolved 50+ JIRAs related to API failures and packet drops using Wireshark & ADB logs.", "Reduced manual testing effort by 70% through reusable, modular test frameworks."],
    tech_stack: ["Python", "802.11 Wi-Fi", "Wireshark", "ADB", "JIRA", "Automation APIs", "IoT"]
  }, {
    company: "ABP Holding",
    role: "Python Developer",
    period: "Sep 2018 – Sep 2019",
    location: "Delhi, India",
    highlights: ["Developed database-driven internal enterprise application for automated data gathering and report generation from enterprise servers.", "Built end-to-end automation workflows using PyAutoGUI and Selenium to streamline repetitive manual operations.", "Designed scheduled data pipelines with robust error handling and logging; reduced manual reporting time by 80%."],
    tech_stack: ["Python", "Selenium", "PyAutoGUI", "SQL", "Data Pipelines", "Logging"]
  }, {
    company: "Tata Consultancy Services (TCS)",
    role: "Technical Support Engineer",
    period: "Jul 2017 – Jun 2018",
    location: "Gurgaon, India",
    highlights: ["Provided Level-2 mission-critical technical support for premier banking enterprise clients.", "Primarily worked with SQL for complex data extraction, financial reconciliation reporting, and issue triage.", "Resolved 50+ production incidents by writing complex SQL queries and analyzing database logs.", "Automated recurring report generation using SQL scripts, reducing manual workload by 60%."],
    tech_stack: ["SQL", "Database Optimization", "Banking Systems", "Incident Triage", "Scripting"]
  }],
  education: [{
    institution: "University of Hyderabad",
    degree: "Master of Technology (M.Tech) in Information Technology",
    score: "CGPA: 8.3 / 10.0",
    period: "2019 – 2021",
    location: "Hyderabad, India"
  }, {
    institution: "Indian Institute of Information Technology (IIIT), Allahabad",
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    score: "CGPA: 7.4 / 10.0",
    period: "2013 – 2017",
    location: "Allahabad, India"
  }],
  projects: [{
    id: "task-summarizer",
    title: "Dynamic Task Summarization & Prioritization Application",
    period: "2023 – 2024",
    category: "AI / ML",
    tech_stack: ["PyTorch", "FastAPI", "Python", "React", "NLP"],
    description: "AI-enabled intelligent task management web application where you brain-dump tasks, and AI summarizes and prioritizes them dynamically on an intuitive dashboard.",
    highlights: ["Dynamic NLP summarization of arbitrary user task streams.", "Priority scoring matrix ranking top 10 urgent & important tasks.", "FastAPI asynchronous backend with PyTorch neural scoring."],
    links: {
      github: "https://github.com/dextervaibhav"
    }
  }, {
    id: "fastapi-booking",
    title: "FastAPI Fitness Booking System",
    period: "2020 – 2021",
    category: "Backend / API",
    tech_stack: ["FastAPI", "MongoDB", "Python", "Postman", "AsyncIO"],
    description: "High-concurrency fitness booking platform with email confirmations and automated test verification.",
    highlights: ["Full CRUD RESTful API with MongoDB asynchronous storage.", "Automated email notifications upon reservation confirmation.", "Tested thoroughly with Postman suites and automated API scripts."],
    links: {
      github: "https://github.com/dextervaibhav",
      docs: "https://drive.google.com/file/d/1NeQCGswGPbYEfiCWdl2VQqPJeoRUY8uq/view?usp=sharing"
    }
  }, {
    id: "multibiometric-fusion",
    title: "Multibiometric Fusion using NSGA-II",
    period: "2020 – 2021",
    category: "Research",
    tech_stack: ["MATLAB", "NSGA-II", "Evolutionary Algorithms", "Biometrics"],
    description: "Multi-objective evolutionary optimization framework for fusing multi-modal biometric features with Pareto-optimal accuracy.",
    highlights: ["Published 2 IEEE conference research papers (2021, 2022).", "Over 3000+ lines of optimization and biometric fusion logic in MATLAB.", "Significantly reduced Equal Error Rate (EER) compared to unimodal baselines."],
    links: {
      github: "https://github.com/dextervaibhav"
    }
  }],
  skills: [{
    category: "Languages",
    skills: ["Python", "Java", "C / C++", "JavaScript (ES6+)", "SQL"]
  }, {
    category: "Backend & Web Frameworks",
    skills: ["FastAPI", "Flask", "React", "RESTful APIs", "MongoDB", "MySQL", "Postman"]
  }, {
    category: "Testing & Modem Protocols",
    skills: ["802.11 (Wi-Fi) Protocol", "API Testing", "Wireshark", "ADB", "Automation Scripting", "JIRA"]
  }, {
    category: "AI, ML & Core Concepts",
    skills: ["PyTorch", "System Design", "Data Structures & Algorithms", "Evolutionary Algorithms", "CI/CD Basics", "MATLAB"]
  }],
  accomplishments: [{
    title: "LeetCode 300+ Problems Solved",
    description: "Continuous problem-solving mastery in Data Structures, Dynamic Programming, and Graph Algorithms.",
    tag: "DSA & Algorithms",
    link: "https://github.com/dextervaibhav"
  }, {
    title: "Machine Learning Specialization — Andrew Ng",
    description: "Certified in Deep Learning, Supervised Learning, and Machine Learning System Design.",
    tag: "Machine Learning",
    link: "https://drive.google.com/file/d/1amrVYyDSAlf-a0LWpQFU-6S8MhBAzMJV/view?usp=sharing"
  }, {
    title: "2x Published IEEE Papers (2021, 2022)",
    description: "Authored peer-reviewed conference publications on evolutionary multi-objective biometric optimization.",
    tag: "Research & Publications",
    link: "https://github.com/dextervaibhav"
  }, {
    title: "FastAPI Deep Architecture Certification",
    description: "Production API engineering with asynchronous event loops, Pydantic data contracts, and dependency injection.",
    tag: "Backend Engineering",
    link: "https://drive.google.com/file/d/1NeQCGswGPbYEfiCWdl2VQqPJeoRUY8uq/view?usp=sharing"
  }, {
    title: "NumPy & Pandas Vectorized Computing",
    description: "High-performance vector operations and scientific data processing certification.",
    tag: "Data Science",
    link: "https://drive.google.com/file/d/1fHWqc8HjD0xQ23Tvi5TDXhbuleTx5j5f/view?usp=sharing"
  }, {
    title: "HackerRank Profile — FlyingMachine",
    description: "Algorithmic challenges solved across Python, SQL, and problem solving on HackerRank.",
    tag: "Competitive Coding",
    link: "https://www.hackerrank.com/profile/FlyingMachine"
  }]
};

// Main App Component
function App() {
  const [resume, setResume] = useState(DEFAULT_RESUME_DATA);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isTypingDeleting, setIsTypingDeleting] = useState(false);
  const [is3DActive, setIs3DActive] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({
    state: "idle",
    message: ""
  });
  const roles = ["Machine Learning Engineer", "Modem Protocol Testing Engineer", "Python & FastAPI Developer", "AI & Automation Architect"];

  // Fetch Resume Data from FastAPI or assets/resume.json
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/resume");
        if (res.ok) {
          const data = await res.json();
          setResume(data);
          return;
        }
      } catch (e) {
        // Local or static fallback
      }
      try {
        const res2 = await fetch("assets/resume.json");
        if (res2.ok) {
          const data2 = await res2.json();
          setResume(data2);
        }
      } catch (err) {
        // Fallback to DEFAULT_RESUME_DATA
      }
    }
    loadData();
  }, []);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = roles[activeRoleIndex];
    let timer;
    if (!isTypingDeleting) {
      if (typedRole.length < currentRole.length) {
        timer = setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
        }, 70);
      } else {
        timer = setTimeout(() => setIsTypingDeleting(true), 2200);
      }
    } else {
      if (typedRole.length > 0) {
        timer = setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length - 1));
        }, 35);
      } else {
        setIsTypingDeleting(false);
        setActiveRoleIndex(prev => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [typedRole, isTypingDeleting, activeRoleIndex]);

  // Init Terminal
  useEffect(() => {
    if (window.initTerminal) {
      window.initTerminal("terminal-body-el", "terminal-input-el");
    }
  }, []);

  // Filter projects
  const filteredProjects = selectedFilter === "All" ? resume.projects : resume.projects.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  // 3D Card Tilt handler for Avatar
  const handleAvatarMouseMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 14;
    const rotateY = x / (rect.width / 2) * 14;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  const handleAvatarMouseLeave = e => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  // Form submit handler (posts to FastAPI backend with mailto fallback)
  const handleContactSubmit = async e => {
    e.preventDefault();
    setFormStatus({
      state: "submitting",
      message: "Transmitting message..."
    });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        setFormStatus({
          state: "success",
          message: result.message || "Message sent successfully!"
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        return;
      }
    } catch (err) {
      // Backend not running (e.g. static on GitHub Pages)
    }

    // Client-side fallback
    const mailtoUrl = `mailto:${resume.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
    window.location.href = mailtoUrl;
    setFormStatus({
      state: "success",
      message: "Opening your default email client to send your message directly to Vaibhav!"
    });
  };
  const toggle3D = () => {
    if (window.toggle3DScene) {
      const active = window.toggle3DScene();
      setIs3DActive(active);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "floating-ornament ornament-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "floating-ornament ornament-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "controls-widget"
  }, /*#__PURE__*/React.createElement("button", {
    className: "control-btn",
    onClick: toggle3D,
    title: is3DActive ? "Pause 3D Animations" : "Resume 3D Animations"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "2 17 12 22 22 17"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "2 12 12 17 22 12"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "control-btn",
    onClick: () => window.print(),
    title: "Print / Save Resume as PDF"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 6 2 18 2 18 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "control-btn",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    title: "Back to Top"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "5 12 12 5 19 12"
  })))), /*#__PURE__*/React.createElement("header", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "nav-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-dot"
  }), /*#__PURE__*/React.createElement("span", null, resume.contact.name.toUpperCase())), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "nav-link"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#experience",
    className: "nav-link"
  }, "Experience")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "nav-link"
  }, "Projects")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#skills",
    className: "nav-link"
  }, "Skills")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#education",
    className: "nav-link"
  }, "Education")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#terminal",
    className: "nav-link"
  }, "Terminal")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "nav-link"
  }, "Contact"))), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: resume.contact.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-icon",
    title: "GitHub Profile"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "btn btn-secondary",
    title: "Download / Print PDF Resume"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })), /*#__PURE__*/React.createElement("span", null, "Resume")))), /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "hero-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-badge-dot"
  }), /*#__PURE__*/React.createElement("span", null, "Available for New Roles & High-Impact Engineering")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, "Hi, I'm ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, resume.contact.name)), /*#__PURE__*/React.createElement("div", {
    className: "hero-subtitle-box"
  }, /*#__PURE__*/React.createElement("span", null, "> "), /*#__PURE__*/React.createElement("span", {
    className: "hero-typing"
  }, typedRole)), /*#__PURE__*/React.createElement("p", {
    className: "hero-description"
  }, resume.contact.summary), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-primary"
  }, /*#__PURE__*/React.createElement("span", null, "Connect With Me"), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "btn btn-secondary"
  }, /*#__PURE__*/React.createElement("span", null, "Explore Projects")), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "btn btn-secondary"
  }, /*#__PURE__*/React.createElement("span", null, "Print / PDF Resume"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: resume.contact.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "social-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-text"
  }, "GitHub")), /*#__PURE__*/React.createElement("a", {
    href: resume.contact.hackerrank,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "social-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-text"
  }, "HackerRank")), /*#__PURE__*/React.createElement("span", {
    className: "social-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-text"
  }, "LeetCode: ", resume.contact.leetcode)), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${resume.contact.email}`,
    className: "social-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-text"
  }, resume.contact.email)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tilt-avatar-card",
    onMouseMove: handleAvatarMouseMove,
    onMouseLeave: handleAvatarMouseLeave
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar-inner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/avatar.jpg?v=3",
    alt: resume.contact.name,
    className: "avatar-img",
    onError: e => {
      e.target.src = "assets/photo-full.jpg";
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "avatar-overlay-gradient"
  }), /*#__PURE__*/React.createElement("div", {
    className: "avatar-badge-float"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar-name"
  }, resume.contact.name), /*#__PURE__*/React.createElement("div", {
    className: "avatar-role"
  }, "Machine Learning Engineer")))))), /*#__PURE__*/React.createElement("div", {
    className: "stats-strip"
  }, resume.stats.map((stat, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-number"
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, stat.label)))))), /*#__PURE__*/React.createElement("section", {
    id: "experience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-tag"
  }, "Career Trajectory"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Professional Experience"), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "Demonstrated engineering impact across modem protocols, automation frameworks, and enterprise data pipelines.")), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, resume.experience.map((exp, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "timeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-node"
  }), /*#__PURE__*/React.createElement("div", {
    className: "timeline-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "timeline-company"
  }, exp.company), /*#__PURE__*/React.createElement("span", {
    className: "timeline-period"
  }, exp.period)), /*#__PURE__*/React.createElement("div", {
    className: "timeline-role"
  }, exp.role, " \u2022 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.85rem"
    }
  }, exp.location)), /*#__PURE__*/React.createElement("ul", {
    className: "timeline-bullets"
  }, exp.highlights.map((bullet, bIdx) => /*#__PURE__*/React.createElement("li", {
    key: bIdx,
    className: "timeline-bullet"
  }, bullet))), /*#__PURE__*/React.createElement("div", {
    className: "timeline-tags"
  }, exp.tech_stack.map((tech, tIdx) => /*#__PURE__*/React.createElement("span", {
    key: tIdx,
    className: "tag-badge"
  }, tech))))))))), /*#__PURE__*/React.createElement("section", {
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-tag"
  }, "Featured Work"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Engineering Projects"), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "High-concurrency backends, applied machine learning architectures, and evolutionary optimization research."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "0.6rem",
      marginTop: "1.5rem",
      flexWrap: "wrap"
    }
  }, ["All", "AI / ML", "Backend / API", "Research"].map(category => /*#__PURE__*/React.createElement("button", {
    key: category,
    className: `btn ${selectedFilter === category ? "btn-primary" : "btn-secondary"}`,
    style: {
      padding: "0.4rem 1rem",
      fontSize: "0.85rem"
    },
    onClick: () => setSelectedFilter(category)
  }, category)))), /*#__PURE__*/React.createElement("div", {
    className: "projects-grid"
  }, filteredProjects.map(proj => /*#__PURE__*/React.createElement("div", {
    key: proj.id,
    className: "project-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "project-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "project-category"
  }, proj.category), /*#__PURE__*/React.createElement("span", {
    className: "project-period"
  }, proj.period)), /*#__PURE__*/React.createElement("h3", {
    className: "project-title"
  }, proj.title), /*#__PURE__*/React.createElement("p", {
    className: "project-desc"
  }, proj.description), /*#__PURE__*/React.createElement("ul", {
    className: "project-highlights"
  }, proj.highlights.map((h, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "project-highlight-item"
  }, h)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "project-tech"
  }, proj.tech_stack.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "tech-chip"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "project-links"
  }, proj.links?.github && /*#__PURE__*/React.createElement("a", {
    href: proj.links.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "project-link-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
  })), /*#__PURE__*/React.createElement("span", null, "GitHub Repository")), proj.links?.docs && /*#__PURE__*/React.createElement("a", {
    href: proj.links.docs,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "project-link-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  })), /*#__PURE__*/React.createElement("span", null, "Documentation"))))))))), /*#__PURE__*/React.createElement("section", {
    id: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-tag"
  }, "Competencies"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Technical Skills Matrix"), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "Toolchains, programming languages, and networking protocols refined across industry and academic research.")), /*#__PURE__*/React.createElement("div", {
    className: "skills-grid"
  }, resume.skills.map((cat, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "skill-category-card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "skill-category-title"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-neon)"
    }
  }, "#"), /*#__PURE__*/React.createElement("span", null, cat.category)), /*#__PURE__*/React.createElement("div", {
    className: "skill-pills-list"
  }, cat.skills.map((skill, sIdx) => /*#__PURE__*/React.createElement("span", {
    key: sIdx,
    className: "skill-pill"
  }, skill)))))))), /*#__PURE__*/React.createElement("section", {
    id: "education"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-tag"
  }, "Academic Background"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Education & Achievements")), /*#__PURE__*/React.createElement("div", {
    className: "edu-grid"
  }, resume.education.map((edu, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "edu-card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "edu-institution"
  }, edu.institution), /*#__PURE__*/React.createElement("div", {
    className: "edu-degree"
  }, edu.degree), /*#__PURE__*/React.createElement("div", {
    className: "edu-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "edu-score"
  }, edu.score), /*#__PURE__*/React.createElement("span", {
    className: "edu-period"
  }, edu.period))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3.5rem"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.6rem",
      fontWeight: 700,
      marginBottom: "1.5rem",
      textAlign: "center"
    }
  }, "Certifications & Highlights"), /*#__PURE__*/React.createElement("div", {
    className: "accomplishments-grid"
  }, resume.accomplishments.map((acc, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "acc-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "acc-tag"
  }, acc.tag), /*#__PURE__*/React.createElement("h4", {
    className: "acc-title"
  }, acc.title), /*#__PURE__*/React.createElement("p", {
    className: "acc-desc"
  }, acc.description)), acc.link && /*#__PURE__*/React.createElement("a", {
    href: acc.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "acc-link"
  }, /*#__PURE__*/React.createElement("span", null, "View Credential / Link"), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  }))))))))), /*#__PURE__*/React.createElement("section", {
    id: "terminal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-tag"
  }, "Interactive CLI"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Developer Console"), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "Prefer command lines? Type ", /*#__PURE__*/React.createElement("span", {
    className: "mono-text",
    style: {
      color: "var(--cyan-neon)"
    }
  }, "help"), " to query this portfolio via CLI.")), /*#__PURE__*/React.createElement("div", {
    className: "terminal-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terminal-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terminal-dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tdot tdot-red"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tdot tdot-yellow"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tdot tdot-green"
  })), /*#__PURE__*/React.createElement("div", {
    className: "terminal-title"
  }, "vaibhav@portfolio-cli: ~ (zsh)"), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "terminal-body",
    id: "terminal-body-el"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terminal-welcome"
  }, "Welcome to Vaibhav Singh's 3D Interactive Shell [v1.0.0]", /*#__PURE__*/React.createElement("br", null), "Type ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-neon)"
    }
  }, "help"), " to view available commands.")), /*#__PURE__*/React.createElement("div", {
    className: "terminal-input-row",
    style: {
      padding: "0.75rem 1.25rem",
      background: "rgba(15, 23, 42, 0.6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "terminal-prompt mono-text"
  }, "guest@portfolio:~$"), /*#__PURE__*/React.createElement("input", {
    id: "terminal-input-el",
    type: "text",
    className: "terminal-input",
    placeholder: "type a command (e.g. skills, whoami, projects)...",
    autoComplete: "off",
    spellCheck: "false"
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-tag"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Let's Build Something Great"), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "Whether you have a question, a project opportunity, or want to discuss Wi-Fi automation and FastAPI architectures.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-label"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${resume.contact.email}`,
    className: "contact-val",
    style: {
      textDecoration: "none"
    }
  }, resume.contact.email))), /*#__PURE__*/React.createElement("div", {
    className: "contact-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-label"
  }, "Phone"), /*#__PURE__*/React.createElement("div", {
    className: "contact-val"
  }, resume.contact.phone))), /*#__PURE__*/React.createElement("div", {
    className: "contact-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-label"
  }, "GitHub"), /*#__PURE__*/React.createElement("a", {
    href: resume.contact.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-val",
    style: {
      textDecoration: "none"
    }
  }, "github.com/dextervaibhav"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-label"
  }, "Portfolio Site"), /*#__PURE__*/React.createElement("a", {
    href: resume.contact.website,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-val",
    style: {
      textDecoration: "none"
    }
  }, "dextervaibhav.github.io")))), /*#__PURE__*/React.createElement("div", {
    className: "contact-form-panel"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleContactSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Your Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "e.g. Alex Carter",
    value: formData.name,
    onChange: e => setFormData({
      ...formData,
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Your Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    className: "form-control",
    placeholder: "name@domain.com",
    value: formData.email,
    onChange: e => setFormData({
      ...formData,
      email: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Subject"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Engineering Role / Project Opportunity",
    value: formData.subject,
    onChange: e => setFormData({
      ...formData,
      subject: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    className: "form-control",
    placeholder: "Hello Vaibhav, I came across your profile and would love to connect regarding...",
    value: formData.message,
    onChange: e => setFormData({
      ...formData,
      message: e.target.value
    })
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      width: "100%",
      marginTop: "0.5rem"
    },
    disabled: formStatus.state === "submitting"
  }, formStatus.state === "submitting" ? /*#__PURE__*/React.createElement("span", null, "Transmitting...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Send Message"), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  })))), formStatus.state !== "idle" && /*#__PURE__*/React.createElement("div", {
    className: `form-status ${formStatus.state === "success" ? "success" : "error"}`
  }, formStatus.message)))))), /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: resume.contact.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: resume.contact.hackerrank,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-text",
    style: {
      fontSize: "0.8rem",
      fontWeight: "bold"
    }
  }, "HR")), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${resume.contact.email}`,
    className: "btn-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  })))), /*#__PURE__*/React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " ", resume.contact.name, ". Engineered with React, Three.js & FastAPI."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.4rem",
      fontSize: "0.8rem"
    }
  }, "Hosted on GitHub Pages \u2022 ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/dextervaibhav",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: "var(--cyan-neon)",
      textDecoration: "none"
    }
  }, "dextervaibhav")))));
}

// Render React Root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render( /*#__PURE__*/React.createElement(App, null));
}