"use strict";

// ============================================
// PROFILE DATA
// ============================================
const profileData = {
    name: "Oladimeji Awwal Oluwaseyi",
    email: "awwaloladimeji@yahoo.com",
    phone: "+234 813 833 4954",
    githubUrl: "https://github.com/adroitguy22",
    heroDescription: "Results-driven professional with 10+ years of experience in sales and customer engagement. Open to remote work opportunities, specializing in managing remote learning for international groups using self-developed web applications.",
    aboutText: "Results-driven professional with 10+ years of experience in sales and customer engagement. Expert in managing multi-channel communication (Phone, Email, Live Chat) and high-volume interactions. Recently specialized in managing remote learning for international groups in the UK using self-developed web applications to optimize user experience. Currently open to remote work opportunities worldwide.",
    typedStrings: [
        "Remote Customer Support.",
        "Technical Engagement.",
        "Web Development.",
        "AI Automation."
    ],
    stats: {
        projects: "10+ Years",
        experience: "Expert",
        technologies: "98% Accuracy"
    },
    experience: [
        {
            date: "2024 — Present",
            role: "International Remote Educator & Web Developer",
            company: "Remote (UK-based learners)",
            description: [
                "Manage and teach three distinct groups of learners in the UK, providing real-time support and guidance through various digital platforms.",
                "Personally developed and optimized web applications to facilitate a more efficient learning environment, directly improving user engagement and resolution speed for common queries.",
                "Handle consistent messaging and live interactions, ensuring clear and concise communication across different time zones and technical skill levels."
            ]
        },
        {
            date: "March 2024 — Present",
            role: "Director / Head of Administration & Business Growth",
            company: "Imam Malik Academy Nigeria",
            description: [
                "Led a team of 50+ staff, serving as the final point of escalation for complex administrative and 'customer' (parent/student) concerns.",
                "Drove a 30% increase in enrollment through targeted engagement strategies similar to customer acquisition campaigns.",
                "Reduced operational costs by 5% by renegotiating contracts and optimizing internal processes."
            ]
        },
        {
            date: "May 2023 — March 2024",
            role: "Key Account Associate",
            company: "FairMoney Microfinance Bank",
            description: [
                "Managed a high-value client portfolio, identifying up-sell and cross-sell opportunities that led to 25% revenue growth.",
                "Maintained rigorous CRM records and produced weekly reports on account health and pipeline status.",
                "Consistently met and exceeded individual sales and support targets by aligning product offerings with client needs."
            ]
        },
        {
            date: "June 2022 — April 2023",
            role: "Fish Farm Manager",
            company: "Queen Enesther Development Initiative",
            description: [
                "Directed daily operations and revitalized hatchery unit, increasing production efficiency by 40%.",
                "Redesigned product branding and packaging strategy, resulting in 25% sales growth and improved market positioning.",
                "Streamlined operational workflows and implemented cost-reduction initiatives, decreasing expenses by 15%.",
                "Trained and supervised farm staff on best practices, quality control, and safety protocols."
            ]
        },
        {
            date: "August 2020 — March 2022",
            role: "Enumerator (Contract)",
            company: "Federal Government Poverty Alleviation Program",
            description: [
                "Collected data from 300+ farmers using mobile application across Sokoto State.",
                "Assisted farmers in completing surveys with accurate information, processing 15-20 surveys daily.",
                "Verified data completeness and accuracy before submission, maintaining 98% accuracy rate.",
                "Worked across 10+ locations in Sokoto State to gather agricultural information."
            ]
        },
        {
            date: "November 2018 — August 2022",
            role: "Class Teacher",
            company: "Brilliant Footsteps International Academy, Sokoto",
            description: [
                "Taught key subjects and assessed student performance.",
                "Prepared lesson plans and academic materials.",
                "Engaged parents on students’ academic needs and progress."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Science in Fisheries",
            institution: "GPA: 3.69/5.0",
            date: ""
        }
    ],
    projects: [
        {
            title: "Qur'an Flashcard",
            description: "An app built to enhance the reading speed of intermediate Qur'an learners.",
            tags: ["Qur'an", "Learning", "Flashcards"],
            emoji: "📖",
            github: "https://github.com/adroitguy22/Qur-an-Flashcard",
            live: "https://qura-an-flashcard.onrender.com/"
        },
        {
            title: "Arabic Reading App",
            description: "An app built to teach an English speaking Quran reading from basic to expert.",
            tags: ["Arabic", "Education", "Language"],
            emoji: "✍️",
            github: "https://github.com/adroitguy22/Read-Arabic-with-Ease",
            live: "https://read-arabic-with-ease.vercel.app/"
        },
        {
            title: "Imam Malik Portal",
            description: "An app built to improve students academic weaknesses in various subjects by the teachers with parents access to their child's portfolio and progress and an oversight function by the school management.",
            tags: ["School Management", "Education", "Portal"],
            emoji: "🏫",
            github: "https://github.com/adroitguy22/Imam-Malik_Academy-Nigeria",
            live: "https://www.imammalik.com.ng/"
        }
    ],
    skills: {
        "Support & CRM": ["Multichannel Support (Phone, Email, Live Chat)", "CRM Logging", "Pipeline Reporting", "Case Escalation", "Patient/Student Support"],
        "Technical & Web": ["Web Development", "Technical Optimization", "Web Application Deployment", "Microsoft 365", "Data Logging"],
        "Business & Logistics": ["Account Management", "Strategic Growth", "Process Efficiency", "Operational Logistics", "Resource Management"]
    },
    contacts: [
        {
            label: "Email",
            value: "awwaloladimeji@yahoo.com",
            href: "mailto:awwaloladimeji@yahoo.com",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
        },
        {
            label: "Phone",
            value: "+234 813 833 4954",
            href: "tel:+2348138334954",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
        },
        {
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/awwal-oladimeji",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
        },
        {
            label: "GitHub",
            value: "adroitguy22",
            href: "https://github.com/adroitguy22",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
        }
    ]
};

// ============================================
// TYPING ANIMATION
// ============================================
class TypeWriter {
    constructor(element, strings, speed = 80, pause = 2000) {
        this.element = element;
        this.strings = strings;
        this.speed = speed;
        this.pause = pause;
        this.currentString = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        const current = this.strings[this.currentString];

        if (this.isDeleting) {
            this.currentChar--;
        } else {
            this.currentChar++;
        }

        this.element.textContent = current.substring(0, this.currentChar);

        let speed = this.isDeleting ? this.speed / 2 : this.speed;

        if (!this.isDeleting && this.currentChar === current.length) {
            speed = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentString = (this.currentString + 1) % this.strings.length;
            speed = 400;
        }

        setTimeout(() => this.tick(), speed);
    }
}

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// STICKY NAV
// ============================================
function initStickyNav() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// ============================================
// MOBILE NAV
// ============================================
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ============================================
// THEME TOGGLE
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}

// ============================================
// POPULATE CONTENT
// ============================================
function populateExperience() {
    const container = document.getElementById('experience-container');
    profileData.experience.forEach((exp, i) => {
        const item = document.createElement('div');
        item.className = `timeline-item reveal reveal-delay-${Math.min(i + 1, 4)}`;
        item.innerHTML = `
            <div class="timeline-card glass-card">
                <div class="timeline-date">${exp.date}</div>
                <div class="timeline-role">${exp.role}</div>
                <div class="timeline-company">${exp.company}</div>
                <ul class="timeline-description">
                    ${exp.description.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
        `;
        container.appendChild(item);
    });
}

function populateProjects() {
    const container = document.getElementById('projects-container');
    profileData.projects.forEach((proj, i) => {
        const card = document.createElement('div');
        card.className = `project-card glass-card reveal reveal-delay-${Math.min(i + 1, 4)}`;
        card.innerHTML = `
            <div class="project-image">
                <div class="project-image-placeholder">${proj.emoji}</div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-desc">${proj.description}</p>
                <div class="project-tags">
                    ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        Code
                    </a>
                    <a href="${proj.live}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function populateSkills() {
    const container = document.getElementById('skills-container');
    Object.entries(profileData.skills).forEach(([category, skills], i) => {
        const cat = document.createElement('div');
        cat.className = `skill-category reveal reveal-delay-${Math.min(i + 1, 4)}`;
        cat.innerHTML = `
            <h3>${category}</h3>
            <div class="skills-grid">
                ${skills.map(s => `<span class="skill-item glass-card">${s}</span>`).join('')}
            </div>
        `;
        container.appendChild(cat);
    });
}

function populateContacts() {
    const container = document.getElementById('contact-links');
    profileData.contacts.forEach(contact => {
        const card = document.createElement('a');
        card.href = contact.href;
        card.target = contact.href.startsWith('http') ? '_blank' : '';
        card.className = 'contact-card glass-card';
        card.innerHTML = `
            <div class="contact-icon">${contact.icon}</div>
            <div class="contact-card-info">
                <div class="contact-card-label">${contact.label}</div>
                <div class="contact-card-value">${contact.value}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function populateEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;
    profileData.education.forEach((edu, i) => {
        const item = document.createElement('div');
        item.className = `education-card glass-card reveal reveal-delay-${Math.min(i + 1, 4)}`;
        item.innerHTML = `
            <div class="education-info">
                <h3 class="education-degree">${edu.degree}</h3>
                <div class="education-institution">${edu.institution}</div>
            </div>
            <div class="education-date">${edu.date}</div>
        `;
        container.appendChild(item);
    });
}

// ============================================
// INITIALIZE
// ============================================
function initializeProfile() {
    console.log("Initializing profile for:", profileData.name);
    
    try {
        // Update static elements
        const nameEl = document.getElementById('hero-name');
        if (nameEl) nameEl.textContent = "Oladimeji Awwal Oluwaseyi.";

        const descEl = document.getElementById('hero-description');
        if (descEl) descEl.textContent = profileData.heroDescription;

        const aboutEl = document.getElementById('about-text');
        if (aboutEl) aboutEl.textContent = profileData.aboutText;

        // Update stats
        const statProjects = document.getElementById('stat-projects');
        if (statProjects) statProjects.textContent = profileData.stats.projects;
        
        const statExperience = document.getElementById('stat-experience');
        if (statExperience) statExperience.textContent = profileData.stats.experience;
        
        const statTech = document.getElementById('stat-technologies');
        if (statTech) statTech.textContent = profileData.stats.technologies;

        // Populate dynamic content
        populateExperience();
        populateProjects();
        populateEducation();
        populateSkills();
        populateContacts();

        // Start typing animation
        const typedOutput = document.getElementById('typed-output');
        if (typedOutput) {
            new TypeWriter(typedOutput, profileData.typedStrings);
        }

        // Initialize interactions
        initScrollReveal();
        initStickyNav();
        initMobileNav();
        initTheme();
        
        console.log("Profile initialization complete.");
    } catch (error) {
        console.error("Error during profile initialization:", error);
        // Fallback: manually reveal all sections if JS fails partway
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    }
}

document.addEventListener('DOMContentLoaded', initializeProfile);
