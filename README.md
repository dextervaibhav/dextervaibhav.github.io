# Vaibhav Singh - 3D Interactive Portfolio & Resume 🚀

A futuristic, high-performance **3D Personal Portfolio & Interactive Resume** built with **React**, **Three.js**, and **FastAPI**, engineered to be hosted effortlessly on **GitHub Pages** (`https://dextervaibhav.github.io/`) or run full-stack with Python.

---

## 🌟 Features

- **Dynamic 3D Particle Constellation (Three.js)**: Over 2,200 glowing space particles with smooth mouse parallax and scroll tracking.
- **Floating 3D Holographic Wireframes**: Rotating 3D geometric Icosahedron and Torus knot meshes with neon cyan and violet highlights.
- **3D Perspective Tilt Photo Card**: Your profile picture rendered with real-time cursor perspective tilt and glowing cybernetic borders.
- **Full Career History & Metrics**:
  - **Qualcomm** (Engineer – Modem Protocol Testing): 200+ 802.11 test cases automated, 6000+ LOC automation, 50+ JIRAs resolved.
  - **ABP Holding** (Python Developer): PyAutoGUI & Selenium data pipelines, 80% manual reporting time reduction.
  - **TCS** (Technical Support Engineer): L2 Banking incident resolution, SQL query optimization, 60% workload reduction.
- **Featured Projects with Filter Tabs**:
  - *Dynamic Task Summarization & Prioritization Engine* (PyTorch + FastAPI)
  - *FastAPI Fitness Booking System* (FastAPI + MongoDB)
  - *Multibiometric Fusion using NSGA-II* (MATLAB, 2 IEEE Papers)
- **Technical Skills Matrix**: Comprehensive categorization across Languages, Backend & Frameworks, Modem & Testing Protocols, and AI/ML concepts.
- **Academic Credentials**: Master of Technology from University of Hyderabad (8.3/10.0) & B.Tech from IIIT Allahabad (7.4/10.0).
- **Interactive Retro CLI Terminal**: Type `whoami`, `skills`, `experience`, `projects`, `contact`, or `help` into an embedded terminal.
- **Print / Save as PDF Mode**: One-click print-optimized stylesheet (`@media print`) for clean executive resume export.
- **Dual-Mode Architecture**:
  - **GitHub Pages Ready**: Zero build steps required; works directly when pushed to GitHub!
  - **FastAPI Full-Stack**: RESTful backend with Pydantic validation, contact form handling, and static file serving.

---

## 🚀 Quick Start (Local Run)

### Option 1: Double-click `run.bat` (Windows)
Simply double click `run.bat` in the project root folder.

### Option 2: Run via Terminal (FastAPI)
```bash
# Navigate to project directory
cd vaibhav-3d-portfolio

# Install backend dependencies (if needed)
pip install -r backend/requirements.txt

# Start FastAPI server
python -m uvicorn backend.main:app --reload --port 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.
API documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs).

### Option 3: Direct Browser Viewing (Static)
You can also directly double-click `index.html` to open it in any web browser without starting a server!

---

## 🌐 How to Host on GitHub Pages (Step-by-Step)

Because this portfolio is built to be 100% static compatible, hosting it on GitHub Pages takes under 2 minutes:

### 1. Initialize Git in the Project Directory
Open PowerShell or Command Prompt in the `vaibhav-3d-portfolio` directory:
```bash
git init
git add .
git commit -m "Initial commit of 3D Portfolio Website"
```

### 2. Connect to your GitHub Repository
If you want it hosted at your root domain (`https://dextervaibhav.github.io/`), create a repository on GitHub named **`dextervaibhav.github.io`**:
```bash
git branch -M main
git remote add origin https://github.com/dextervaibhav/dextervaibhav.github.io.git
git push -u origin main
```
*(If you want to host it in a sub-project repository, name it e.g. `portfolio-3d` and push there)*

### 3. Enable GitHub Pages
1. Go to your GitHub repository on github.com.
2. Click **Settings** (tab at the top right).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** -> **Source**:
   - Select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and deploy it!), OR
   - Select **Deploy from a branch** -> Branch: `main` -> Folder: `/ (root)` -> Click **Save**.
5. Your 3D website will be live at:
   👉 **`https://dextervaibhav.github.io/`**

---

## 📁 File Structure

```
vaibhav-3d-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── backend/
│   ├── main.py                 # FastAPI application with REST endpoints
│   ├── models.py               # Pydantic data models
│   ├── data.py                 # Structured resume data source
│   ├── requirements.txt        # Python backend dependencies
│   └── messages.json           # Contact form submissions log
├── assets/
│   ├── avatar.jpg              # High-res cropped 3D tilt avatar
│   ├── photo-full.jpg          # Original uploaded photo
│   └── resume.json             # Static JSON resume fallback
├── css/
│   └── style.css               # Futuristic cyberpunk glassmorphism & 3D CSS
├── js/
│   ├── three-scene.js          # Three.js 3D WebGL particle constellation & meshes
│   ├── app.js                  # React 18 component tree and state management
│   └── terminal.js             # Retro interactive CLI terminal emulator
├── index.html                  # Main entry point (GitHub Pages compatible)
├── run.bat                     # 1-click Windows server launcher
└── README.md                   # Documentation & hosting guide
```

---

## 📬 Contact & Profiles
- **GitHub**: [github.com/dextervaibhav](https://github.com/dextervaibhav)
- **HackerRank**: [FlyingMachine](https://www.hackerrank.com/profile/FlyingMachine)
- **Website**: [dextervaibhav.github.io](https://dextervaibhav.github.io/)
