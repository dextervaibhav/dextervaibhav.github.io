/**
 * Retro Interactive Terminal Emulator
 */

(function () {
  const COMMANDS = {
    help: `Available commands:
  • <span style="color:var(--cyan-neon)">whoami</span>       : Profile summary & current status
  • <span style="color:var(--cyan-neon)">skills</span>       : Core technical skills & languages
  • <span style="color:var(--cyan-neon)">experience</span>   : Qualcomm, ABP Holding & TCS history
  • <span style="color:var(--cyan-neon)">projects</span>     : AI Task Summarizer, FastAPI, Biometrics
  • <span style="color:var(--cyan-neon)">education</span>    : M.Tech UoH & B.Tech IIIT Allahabad
  • <span style="color:var(--cyan-neon)">contact</span>      : Reach out to Vaibhav
  • <span style="color:var(--cyan-neon)">clear</span>        : Clear the terminal console`,

    whoami: `Vaibhav Singh
Role: Modem Protocol Testing Engineer & Python/FastAPI Developer
Degrees: M.Tech IT (University of Hyderabad), B.Tech IT (IIIT Allahabad)
Passions: Asynchronous backend systems, 802.11 Wi-Fi automation, applied AI/ML, and scalable APIs.`,

    skills: `Languages   : Python, Java, C/C++, JavaScript (ES6+), SQL
Backend     : FastAPI, Flask, React, MongoDB, MySQL, Postman, AsyncIO
Protocols   : 802.11 Wi-Fi, Wireshark, ADB, Automation Scripting, JIRA
Core        : System Design, Data Structures & Algorithms (300+ LeetCode), PyTorch, NSGA-II`,

    experience: `[1] QUALCOMM (Hyderabad) | Feb 2022 - May 2023
    Role: Engineer - Modem Protocol Testing
    Key : Automated 200+ Wi-Fi test cases, 6000+ LOC automation, resolved 50+ JIRAs.
[2] ABP HOLDING (Delhi) | Sep 2018 - 2019
    Role: Python Developer
    Key : PyAutoGUI + Selenium enterprise data pipelines, 80% reporting time cut.
[3] TCS (Gurgaon) | Jul 2017 - Jun 2018
    Role: Technical Support Engineer
    Key : L2 Banking support, SQL query optimization, 60% manual report savings.`,

    projects: `[1] Dynamic Task Summarization & Prioritization Engine (PyTorch + FastAPI)
    AI dashboard processing brain dumps into top 10 prioritized actionable items.
[2] FastAPI Fitness Booking System (FastAPI + MongoDB)
    High-concurrency reservation platform with automated transactional notifications.
[3] Multibiometric Fusion using NSGA-II (MATLAB)
    3000+ LOC evolutionary multi-objective optimization, 2 published IEEE papers.`,

    education: `• Master of Technology (M.Tech) in IT | University of Hyderabad (8.3 / 10.0) [2019-2021]
• Bachelor of Technology (B.Tech) in IT | IIIT Allahabad (7.4 / 10.0) [2013-2017]`,

    contact: `Email    : vvsvsn7@gmail.com
Phone    : +91-9369620500
GitHub   : https://github.com/dextervaibhav
HackerRank: https://www.hackerrank.com/profile/FlyingMachine
Website  : https://dextervaibhav.github.io/`,

    matrix: `<span style="color:#10b981">Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇</span>`
  };

  window.initTerminal = function (bodyId, inputId) {
    const body = document.getElementById(bodyId);
    const input = document.getElementById(inputId);
    if (!body || !input) return;

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        input.value = '';

        if (!cmd) return;

        // Echo command
        const userLine = document.createElement('div');
        userLine.className = 'terminal-line';
        userLine.innerHTML = `<span style="color:var(--emerald-neon)">guest@vaibhav-portfolio:~$</span> ${escapeHtml(cmd)}`;
        body.appendChild(userLine);

        if (cmd === 'clear') {
          body.innerHTML = '';
          return;
        }

        const outLine = document.createElement('div');
        outLine.className = 'terminal-line';
        outLine.style.marginBottom = '0.75rem';

        if (COMMANDS[cmd]) {
          outLine.innerHTML = COMMANDS[cmd].replace(/\n/g, '<br>');
        } else {
          outLine.innerHTML = `<span style="color:#ef4444">Command not recognized: '${escapeHtml(cmd)}'. Type <span style="color:var(--cyan-neon)">help</span> for available commands.</span>`;
        }

        body.appendChild(outLine);
        body.scrollTop = body.scrollHeight;
      }
    });
  };

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      })[m];
    });
  }
})();
