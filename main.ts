interface ProfileData {
    name: string;
    email: string;
    githubUrl: string;
    aboutText: string;
    skills: string[];
}

const profileData: ProfileData = {
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
        "Git",
        "REST APIs",
        "Responsive Design",
        "Web Performance"
    ]
};

function initializeProfile(): void {
    document.getElementById("name")!.textContent = profileData.name;
    document.getElementById("about-text")!.textContent = profileData.aboutText;

    const githubLink = document.getElementById("github-link") as HTMLAnchorElement;
    githubLink.href = profileData.githubUrl;

    const emailLink = document.getElementById("email-link") as HTMLAnchorElement;
    emailLink.href = `mailto:${profileData.email}`;

    const skillsContainer = document.getElementById("skills-container")!;
    profileData.skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.className = "skill-card";
        skillCard.innerHTML = `<h3>${skill}</h3>`;
        skillsContainer.appendChild(skillCard);
    });
}

document.addEventListener("DOMContentLoaded", initializeProfile);
