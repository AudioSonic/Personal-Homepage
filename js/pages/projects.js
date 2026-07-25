import { projects } from "../data/projects.js";

const projectTypeLabels = {
    web: "Web App",
    software: "Software",
    game: "Game"
};

const projectStatusLabels = {
    inProgress: "In Bearbeitung",
    completed: "Abgeschlossen",
    planned: "Geplant"
};

const technologyIcons = {
    HTML: "../assets/logos/html_logo.png",
    CSS: "../assets/logos/css_logo.png",
    JavaScript: "../assets/logos/js_logo.png",
    TypeScript: "../assets/logos/typescript_logo.png",
    "C#": "../assets/logos/CSharp_logo.png",
    ".NET": "../assets/logos/dotnet_logo.png",
    Node: "../assets/logos/nodejs_logo.png"
};

export function createProjectCards(){
    return projects.map((project) => createProjectCard(project));
}

export function createProjectCard(project){
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
    const additionalSkillCounter = document.createElement("span");
    const additionalDetailsButton = document.createElement("button");
    const hr = document.createElement("hr");
    const technologies = Array.isArray(project.technologies) ? project.technologies : [];
    const visibleTechnologies = technologies.slice(0, 2);
    const additionalTechnologies = technologies.length - visibleTechnologies.length;

    projectScreenshot.src = getProjectImage(project);
    projectScreenshot.alt = project.screenshots?.[0]?.alt || project.title;
    projectType.textContent = projectTypeLabels[project.type] || project.type;
    gitHubLink.href = project.github;
    gitHubLink.target = "_blank";
    gitHubLink.rel = "noopener noreferrer";
    gitHubLinkIcon.src = "../assets/logos/github_logo.png";
    gitHubLinkIcon.alt = "GitHub Logo";
    title.textContent = project.title;
    status.textContent = projectStatusLabels[project.status] || project.status;
    projectDesc.textContent = project.shortDescription;
    additionalSkillCounter.textContent = `+${additionalTechnologies}`;
    additionalDetailsButton.textContent = "Details ansehen ->";

    projectCard.classList.add("project-card");
    header.classList.add("project-header");
    projectContent.classList.add("project-content");
    footer.classList.add("project-footer");
    projectScreenshot.classList.add("project-screenshot");
    projectType.classList.add("project-type");
    gitHubLink.classList.add("project-github-link");
    projectSkills.classList.add("project-skills-overview");
    additionalSkillCounter.classList.add("additional-skill-counter");
    titleAndStatus.classList.add("project-title-and-status");
    status.classList.add("project-status");
    hr.classList.add("project-hr");

    additionalDetailsButton.style.fontWeight = "505";

    visibleTechnologies.forEach((technology) => {
        projectSkills.append(createProjectSkill(technology));
    });

    if(additionalTechnologies > 0){
        projectSkills.append(additionalSkillCounter);
    }

    gitHubLink.append(gitHubLinkIcon);
    header.append(projectScreenshot, projectType, gitHubLink);
    titleAndStatus.append(title, status);
    projectContent.append(titleAndStatus, projectDesc, projectSkills, hr);
    footer.append(additionalDetailsButton);
    projectCard.append(header, projectContent, footer);

    return projectCard;
}

function createProjectSkill(technology){
    const projectSkill = document.createElement("div");
    const skillIcon = document.createElement("img");
    const skillName = document.createElement("span");

    projectSkill.classList.add("project-skill");
    skillIcon.src = technologyIcons[technology] || "../assets/logos/vscode_logo.png";
    skillIcon.alt = technology;
    skillName.textContent = technology;

    projectSkill.append(skillIcon, skillName);

    return projectSkill;
}

function getProjectImage(project){
    if(project.heroImage){
        return project.heroImage;
    }

    if(project.screenshots?.[0]?.src){
        return project.screenshots[0].src;
    }

    return "../assets/screenshots/ApplyHQ_Screenshot_1.png";
}
