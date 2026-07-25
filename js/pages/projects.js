import { projects } from "../data/projects.js";

export function createProjectCard(){
    const projectCard = document.createElement("article");
    const header = document.createElement("header");
    const projectContent = document.createElement("div");
    const footer = document.createElement("footer");
    const projectScreenshot = document.createElement("img");
    const projectType = document.createElement("span");
    const gitHubLink = document.createElement("a");
    const gitHubLinkIcon = document.createElement("img");
    const titleAndStatus = document.createElement("div");
    const title = document.createElement("h2");
    const status = document.createElement("span");
    const projectDesc = document.createElement("p");
    const projectSkills = document.createElement("div");
    const projectSkill = document.createElement("div");
    const skillIcon = document.createElement("img");
    const skillName = document.createElement("span");
    const additionalSkillCounter = document.createElement("span");
    const additionalDetalsButton = document.createElement("button");
    const hr = document.createElement("hr");

    projectScreenshot.src = "../assets/screenshots/ApplyHQ_Screenshot_1.png";
    projectType.textContent = "Web App";
    gitHubLink.href = "https://github.com/AudioSonic/ApplyHQ";
    gitHubLinkIcon.src = "../assets/logos/github_logo.png";
    gitHubLinkIcon.alt = "GitHub Logo";
    title.textContent = "ApplyHQ";
    status.textContent = "In Bearbeitung";
    projectDesc.textContent = "Ein Tool zur Verarbeitung von Bewerbungen.";
    skillIcon.src = "../assets/logos/html_logo.png";
    skillIcon.alt = "HTML";
    skillName.textContent = "HTML";
    additionalSkillCounter.textContent = "+2";
    additionalDetalsButton.textContent = "Details ansehen →";

    projectCard.classList.add("project-card");
    header.classList.add("project-header");
    projectContent.classList.add("project-content");
    footer.classList.add("project-footer");
    projectScreenshot.classList.add("project-screenshot");
    projectType.classList.add("project-type");
    gitHubLink.classList.add("project-github-link");
    projectSkill.classList.add("project-skill");
    projectSkills.classList.add("project-skills-overview");
    additionalSkillCounter.classList.add("additional-skill-counter");
    titleAndStatus.classList.add("project-title-and-status");
    status.classList.add("project-status");
    hr.classList.add("project-hr");
    
    additionalDetalsButton.style.fontWeight = "505";

    gitHubLink.append(gitHubLinkIcon);
    header.append(projectScreenshot, projectType, gitHubLink);
    titleAndStatus.append(title, status);
    projectSkills.append(projectSkill, additionalSkillCounter);
    projectSkill.append(skillIcon, skillName);
    projectContent.append(titleAndStatus, projectDesc, projectSkills, hr);
    footer.append(additionalDetalsButton);
    projectCard.append(header, projectContent, footer);

    return projectCard;
}