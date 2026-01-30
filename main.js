"use strict";
const profileData = {
    name: "Awwal Oladimeji",
    email: "awwaloladimeji@yahoo.com",
    githubUrl: "https://github.com/adroitguy22",
    aboutText: "Passionate web developer and AI automation specialist with expertise in building modern web applications and implementing intelligent automation solutions. Dedicated to creating efficient, scalable, and user-friendly digital experiences.",
    skills: [
        "HTML5",
        "CSS3",
        "TypeScript",
        "JavaScript",
        "React",
        "Node.js",
        "AI/ML",
        "Automation",
        "n8n",
        "Git",
        "REST APIs",
        "Responsive Design"
    ]
};
function initializeProfile() {
    document.getElementById("name").textContent = profileData.name;
    document.getElementById("about-text").textContent = profileData.aboutText;
    const githubLink = document.getElementById("github-link");
    githubLink.href = profileData.githubUrl;
    const emailLink = document.getElementById("email-link");
    emailLink.href = `mailto:${profileData.email}`;
    const skillsContainer = document.getElementById("skills-container");
    profileData.skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.className = "skill-card";
        skillCard.innerHTML = `<h3>${skill}</h3>`;
        skillsContainer.appendChild(skillCard);
    });
}
document.addEventListener("DOMContentLoaded", initializeProfile);
