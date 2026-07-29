import { initCategoryFilter } from "./helper.js";
import { projects } from "../data/projects.js";
import { skills } from "../data/skills.js";

const DEFAULT_CATEGORY = "personal";
let activeCategory = DEFAULT_CATEGORY;
const projectContainer = document.getElementById("project-container");
const categoryButtons = document.querySelectorAll("[data-category]");

function initProjectsPage() {
    if (!projectContainer) {
        return;
    }

    initCategoryFilter(categoryButtons, DEFAULT_CATEGORY, setActiveCategory);
}

function setActiveCategory(category) {
    activeCategory = category;
    renderProjects();
}

function getFilteredProjects() {
    return projects.filter((project) => project.category === activeCategory);
}

function renderProjects() {
    projectContainer.replaceChildren(...getFilteredProjects().map(createProjectCard));
}

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

export function createProjectCards(){
    return getFilteredProjects().map((project) => createProjectCard(project));
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

    projectScreenshot.src = getProjectImage(project);
    projectScreenshot.alt = project.screenshots?.[0]?.alt || project.title;
    projectType.textContent = projectTypeLabels[project.type] || project.type;
    if (project.github) {
        gitHubLink.href = project.github;
        gitHubLink.target = "_blank";
        gitHubLink.rel = "noopener noreferrer";
        gitHubLinkIcon.src = "../assets/logos/github_logo.png";
        gitHubLinkIcon.alt = "GitHub Logo";
        gitHubLink.append(gitHubLinkIcon);
        gitHubLink.classList.add("project-github-link");
    }
    title.textContent = project.title;
    status.textContent = projectStatusLabels[project.status] || project.status;
    status.classList.add(`project-status--${project.status}`);
    projectDesc.textContent = project.shortDescription;
    projectDesc.classList.add("project-description");
    additionalDetailsButton.textContent = "Details ansehen ➜";

    const projectSkillItems = (project.technologies ?? [])
        .map(getProjectSkill)
        .filter(Boolean);
    projectSkills.replaceChildren(...projectSkillItems.map(createProjectSkill));

    projectCard.classList.add("project-card");
    header.classList.add("project-header");
    projectContent.classList.add("project-content");
    footer.classList.add("project-footer");
    projectScreenshot.classList.add("project-screenshot");
    projectType.classList.add("project-type");
    projectSkills.classList.add("project-skills-overview");
    additionalSkillCounter.classList.add("project-skill");
    additionalSkillCounter.classList.add("additional-skill-counter");
    titleAndStatus.classList.add("project-title-and-status");
    status.classList.add("project-status");
    hr.classList.add("project-hr");

    additionalDetailsButton.style.fontWeight = "505";

    header.append(projectScreenshot, projectType);
    if (project.github) {
        header.append(gitHubLink);
    }
    titleAndStatus.append(title, status);
    projectContent.append(titleAndStatus, projectDesc, projectSkills, hr);
    footer.append(additionalDetailsButton);
    projectCard.append(header, projectContent, footer);

    const updateVisibleSkills = () => updateProjectSkills(
        projectSkills,
        additionalSkillCounter,
        projectSkillItems
    );
    requestAnimationFrame(updateVisibleSkills);
    if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(updateVisibleSkills).observe(projectSkills);
    }

    return projectCard;
}

function updateProjectSkills(container, counter, skillItems) {
    const skillElements = skillItems.map(createProjectSkill);
    container.replaceChildren(...skillElements);

    let hiddenCount = 0;
    while (container.scrollWidth > container.clientWidth && skillElements.length - hiddenCount > 0) {
        skillElements[skillElements.length - hiddenCount - 1].remove();
        hiddenCount += 1;
    }

    if (hiddenCount > 0) {
        counter.textContent = `+${hiddenCount}`;
        container.append(counter);

        while (container.scrollWidth > container.clientWidth && container.children.length > 1) {
            container.children[container.children.length - 2].remove();
            hiddenCount += 1;
            counter.textContent = `+${hiddenCount}`;
        }
    }
}

function createProjectSkill(technology){
    const projectSkill = document.createElement("div");
    const skillIcon = document.createElement("img");
    const skillName = document.createElement("span");

    projectSkill.classList.add("project-skill");
    skillIcon.src = technology.image;
    skillIcon.alt = `${technology.name} Logo`;
    skillName.textContent = technology.name;

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

function getProjectSkill(id){
    return skills.find(skill => skill.id === id);
}

initProjectsPage();
