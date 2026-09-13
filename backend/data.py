"""
Resume data store for Vaibhav Singh.
Can be accessed by FastAPI API endpoints and exported to static JSON for GitHub Pages.
"""

RESUME_DATA = {
    "contact": {
        "name": "Vaibhav Singh",
        "title": "Machine Learning Engineer & Python/FastAPI Developer",
        "email": "vvsvsn7@gmail.com",
        "phone": "+91-9369620500",
        "location": "India",
        "website": "https://dextervaibhav.github.io/",
        "github": "https://github.com/dextervaibhav",
        "hackerrank": "https://www.hackerrank.com/profile/FlyingMachine",
        "leetcode": "300+ Problems Solved",
        "linkedin": "https://www.linkedin.com/in/dextervaibhav",
        "summary": "M.Tech in Information Technology from University of Hyderabad and B.Tech from IIIT Allahabad. Experienced in 802.11 Wi-Fi modem protocol automation at Qualcomm, full-stack development with FastAPI and React, automated data pipelines, and applied Machine Learning / Evolutionary Optimization with 2 published IEEE papers."
    },
    "stats": [
        {"label": "LeetCode Problems", "value": "300+", "icon": "code"},
        {"label": "Automation Code Written", "value": "6,000+ LOC", "icon": "terminal"},
        {"label": "Published IEEE Papers", "value": "2", "icon": "file-text"},
        {"label": "Wi-Fi Test Cases Automated", "value": "200+", "icon": "wifi"},
        {"label": "Reporting Time Reduced", "value": "80%", "icon": "trending-up"}
    ],
    "experience": [
        {
            "company": "Qualcomm",
            "role": "Engineer – Modem Protocol Testing",
            "period": "Feb 2022 – May 2023",
            "location": "Hyderabad, India",
            "highlights": [
                "Automated connectivity testing of 200+ 802.11 (Wi-Fi) test cases using Python APIs for Industrial IoT devices.",
                "Developed 6000+ lines of robust automation code covering roaming, Round Trip Time (RTT), and AP association scenarios.",
                "Debugged and resolved 50+ high-priority JIRAs related to API failures and packet drops by analyzing Wireshark and ADB logs.",
                "Reduced manual testing effort by 70% by architecting reusable, modular test frameworks."
            ],
            "tech_stack": ["Python", "802.11 Wi-Fi", "Wireshark", "ADB", "JIRA", "Automation APIs", "IoT"]
        },
        {
            "company": "ABP Holding",
            "role": "Python Developer",
            "period": "Sep 2018 – Sep 2019",
            "location": "Delhi, India",
            "highlights": [
                "Developed a database-driven internal enterprise application for automated data gathering and business report generation.",
                "Engineered end-to-end automation workflows using PyAutoGUI and Selenium to streamline repetitive manual operations.",
                "Designed scheduled, fault-tolerant data pipelines with granular error handling and logging; reduced manual reporting time by 80%."
            ],
            "tech_stack": ["Python", "Selenium", "PyAutoGUI", "SQL", "Data Pipelines", "Logging"]
        },
        {
            "company": "Tata Consultancy Services (TCS)",
            "role": "Technical Support Engineer",
            "period": "Jul 2017 – Jun 2018",
            "location": "Gurgaon, India",
            "highlights": [
                "Provided Level-2 mission-critical technical support for premier banking enterprise clients.",
                "Specialized in SQL for complex data extraction, financial reconciliation reporting, and production issue triage.",
                "Resolved 50+ production incidents through deep SQL query optimization and database transaction log audits.",
                "Automated recurring periodic report generation scripts, cutting recurring manual workload by 60%."
            ],
            "tech_stack": ["SQL", "Database Optimization", "Banking Systems", "Incident Triage", "Scripting"]
        }
    ],
    "education": [
        {
            "institution": "University of Hyderabad",
            "degree": "Master of Technology (M.Tech) in Information Technology",
            "score": "CGPA: 8.3 / 10.0",
            "period": "2019 – 2021",
            "location": "Hyderabad, India"
        },
        {
            "institution": "Indian Institute of Information Technology (IIIT), Allahabad",
            "degree": "Bachelor of Technology (B.Tech) in Information Technology",
            "score": "CGPA: 7.4 / 10.0",
            "period": "2013 – 2017",
            "location": "Allahabad, India"
        }
    ],
    "projects": [
        {
            "id": "task-summarizer",
            "title": "Dynamic Task Summarization & Prioritization Engine",
            "period": "2023 – 2024",
            "category": "AI / Full-Stack",
            "tech_stack": ["PyTorch", "FastAPI", "Python", "React", "NLP"],
            "description": "AI-enabled intelligent task management system designed to process unstructured cognitive 'brain-dumps' into prioritized, actionable workflows.",
            "highlights": [
                "Processes free-form thought streams using NLP & PyTorch model embeddings.",
                "Automatically clusters, summarizes, and ranks tasks by urgency and importance.",
                "Renders an interactive high-frequency dashboard highlighting the top 10 prioritized tasks dynamically."
            ],
            "links": {
                "github": "https://github.com/dextervaibhav"
            }
        },
        {
            "id": "fastapi-booking",
            "title": "FastAPI Fitness Booking System",
            "period": "2020 – 2021",
            "category": "Backend / API",
            "tech_stack": ["FastAPI", "MongoDB", "Python", "Postman", "AsyncIO"],
            "description": "High-concurrency fitness booking platform with asynchronous session management and automated transactional email dispatch.",
            "highlights": [
                "Engineered full CRUD RESTful architecture with MongoDB asynchronous motor driver.",
                "Integrated transactional email confirmations upon slot reservations.",
                "Validated using comprehensive Postman API test suites and automated integration scripts."
            ],
            "links": {
                "github": "https://github.com/dextervaibhav",
                "docs": "https://drive.google.com/file/d/1NeQCGswGPbYEfiCWdl2VQqPJeoRUY8uq/view?usp=sharing"
            }
        },
        {
            "id": "multibiometric-fusion",
            "title": "Multibiometric Fusion using NSGA-II",
            "period": "2020 – 2021",
            "category": "Research / Optimization",
            "tech_stack": ["MATLAB", "NSGA-II", "Evolutionary Algorithms", "Biometrics"],
            "description": "Multi-objective evolutionary optimization framework for fusing multi-modal biometric feature sets.",
            "highlights": [
                "Engineered 3000+ lines of MATLAB code for multi-objective Pareto-optimal fusion logic.",
                "Achieved significantly higher verification accuracy and reduced Equal Error Rate (EER).",
                "Published two IEEE conference research papers (2021, 2022)."
            ],
            "links": {
                "github": "https://github.com/dextervaibhav"
            }
        }
    ],
    "skills": [
        {
            "category": "Languages",
            "skills": ["Python", "Java", "C / C++", "JavaScript (ES6+)", "SQL"]
        },
        {
            "category": "Backend & Web",
            "skills": ["FastAPI", "Flask", "React", "RESTful APIs", "MongoDB", "MySQL", "Postman"]
        },
        {
            "category": "Testing & Protocols",
            "skills": ["802.11 (Wi-Fi) Protocol", "API Testing", "Wireshark", "ADB", "Automation Scripting", "JIRA"]
        },
        {
            "category": "AI, ML & Concepts",
            "skills": ["PyTorch", "System Design", "Data Structures & Algorithms", "Evolutionary Algorithms", "CI/CD Basics", "MATLAB"]
        }
    ],
    "accomplishments": [
        {
            "title": "LeetCode 300+ Problems Solved",
            "description": "Consistent problem-solving track record across Data Structures, Algorithms, Dynamic Programming, and Graph Theory.",
            "tag": "Algorithmic Excellence",
            "link": "https://github.com/dextervaibhav"
        },
        {
            "title": "Machine Learning Specialization — Andrew Ng",
            "description": "Comprehensive grounding in Supervised, Unsupervised learning, Neural Networks, and ML system best practices.",
            "tag": "AI & ML",
            "link": "https://drive.google.com/file/d/1amrVYyDSAlf-a0LWpQFU-6S8MhBAzMJV/view?usp=sharing"
        },
        {
            "title": "2x Published IEEE Papers (2021, 2022)",
            "description": "Authored and presented peer-reviewed research papers in biometric feature fusion and multi-objective optimization (NSGA-II).",
            "tag": "Research",
            "link": "https://github.com/dextervaibhav"
        },
        {
            "title": "FastAPI Certification & Deep Dive",
            "description": "Advanced API design, Pydantic validation, dependency injection, and asynchronous Python development.",
            "tag": "Backend",
            "link": "https://drive.google.com/file/d/1NeQCGswGPbYEfiCWdl2VQqPJeoRUY8uq/view?usp=sharing"
        },
        {
            "title": "NumPy & Pandas Mastery",
            "description": "High-performance vector operations, tabular data manipulation, and exploratory analytics.",
            "tag": "Data Engineering",
            "link": "https://drive.google.com/file/d/1fHWqc8HjD0xQ23Tvi5TDXhbuleTx5j5f/view?usp=sharing"
        },
        {
            "title": "HackerRank Profile — FlyingMachine",
            "description": "Coding and algorithm challenges solved on HackerRank under profile FlyingMachine.",
            "tag": "Competitive Programming",
            "link": "https://www.hackerrank.com/profile/FlyingMachine"
        }
    ]
}
