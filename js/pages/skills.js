import { initCategoryFilter } from "./helper.js";
const loadJson = (path) => fetch(new URL(path, import.meta.url)).then((response) => response.json());
const [skills, projects] = await Promise.all([
    loadJson("../../data/skills.json"),
    loadJson("../../data/projects.json")
]);

let activeCategory = "web";

const skillsContainer = document.getElementById("skillsContainer");
const categoryButtons = document.querySelectorAll("[data-category]");
const skillModal = document.getElementById("skillModal");
const skillModalDialog = skillModal?.querySelector(".skill-modal__dialog");
const skillModalImage = document.getElementById("skillModalImage");
const skillModalTitle = document.getElementById("skillModalTitle");
const skillModalDescription = document.getElementById("skillModalDescription");
const skillModalHighlights = document.getElementById("skillModalHighlights");
const skillModalProjects = document.getElementById("skillModalProjects");
let lastFocusedElement = null;

if (skillsContainer) {
    initCategoryFilter(categoryButtons, activeCategory, (category) => {
        activeCategory = category;
        renderSkills();
    });
}


function getFilteredSkills() {
    return skills.filter((skill) => skill.category === activeCategory);
}

function calculateProgress(skill) {
    const subskills = skill.skillList ?? [];

    if (subskills.length === 0) {
        return 0;
    }

    const completedSkills = subskills.filter((subskill) => subskill.completed === true).length;

    return Math.round((completedSkills / subskills.length) * 100);
}

function createSkillCard(skill) {
    const progress = calculateProgress(skill);
    const card = document.createElement("article");
    const upperSection = document.createElement("div");
    const iconWrapper = document.createElement("div");
    const icon = document.createElement("img");
    const progressWrapper = document.createElement("div");
    const progressHeader = document.createElement("div");
    const title = document.createElement("h3");
    const progressLabel = document.createElement("span");
    const progressBar = document.createElement("progress");
    const descriptionWrapper = document.createElement("div");
    const description = document.createElement("p");

    card.className = "card skill-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Details zu ${skill.name} öffnen`);
    upperSection.className = "skill-card-upper-section";
    iconWrapper.className = "skill-card-icon";
    progressWrapper.className = "skill-card-progressbar";
    progressHeader.className = "skill-card-progress-desc";
    progressBar.className = "skill-card__progress";
    descriptionWrapper.className = "skill-desc";

    icon.src = skill.image;
    icon.alt = `${skill.name} Logo`;

    title.textContent = skill.name;
    progressLabel.textContent = `${progress}%`;

    progressBar.value = progress;
    progressBar.max = 100;
    progressBar.setAttribute("aria-label", `${skill.name} Fortschritt`);

    description.textContent = skill.description;

    iconWrapper.appendChild(icon);
    progressHeader.append(title/*, progressLabel*/);
    progressWrapper.append(progressHeader/*, progressBar*/);
    upperSection.append(iconWrapper, progressWrapper);
    descriptionWrapper.appendChild(description);
    card.append(upperSection, descriptionWrapper);

    card.addEventListener("click", () => openSkillModal(skill, card));
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openSkillModal(skill, card);
        }
    });

    return card;
}

function openSkillModal(skill, sourceElement) {
    if (!skillModal) return;

    lastFocusedElement = sourceElement;
    skillModalImage.src = skill.image;
    skillModalImage.alt = `${skill.name} Logo`;
    skillModalTitle.textContent = skill.name;
    skillModalDescription.textContent = skill.detailedDescription;
    skillModalHighlights.replaceChildren(...(skill.highlights ?? []).map((highlight) => {
        const item = document.createElement("li");
        item.textContent = highlight;
        return item;
    }));
    const relatedProjects = projects.filter((project) =>
        project.technologies?.includes(skill.id)
    );
    skillModalProjects.replaceChildren(...relatedProjects.map((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "skill-modal__project-card";
        projectCard.textContent = project.title;
        projectCard.tabIndex = 0;
        projectCard.setAttribute("role", "button");
        projectCard.setAttribute("aria-label", `Details zu ${project.title} öffnen`);
        const openProject = () => {
            closeSkillModal();
            document.dispatchEvent(new CustomEvent("project-modal-open-request", { detail: project }));
        };
        projectCard.addEventListener("click", openProject);
        projectCard.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProject();
            }
        });
        return projectCard;
    }));
    skillModal.hidden = false;
    document.body.classList.add("modal-open");
    skillModalDialog?.querySelector(".skill-modal__close")?.focus();
}

document.addEventListener("skill-modal-open-request", (event) => {
    const skill = skills.find((item) => item.id === event.detail?.id);
    if (skill) openSkillModal(skill);
});

function closeSkillModal() {
    if (!skillModal || skillModal.hidden) return;

    skillModal.hidden = true;
    document.body.classList.remove("modal-open");
    lastFocusedElement?.focus();
}

skillModal?.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) closeSkillModal();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSkillModal();
});

function renderSkills() {
    const filteredSkills = getFilteredSkills();

    skillsContainer.replaceChildren(...filteredSkills.map(createSkillCard));
}
