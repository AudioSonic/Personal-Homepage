import { initCategoryFilter } from "./helper.js";
import { skills } from "../data/skills.js";

let activeCategory = "web";

const skillsContainer = document.getElementById("skillsContainer");
const categoryButtons = document.querySelectorAll("[data-category]");

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

    return card;
}

function renderSkills() {
    const filteredSkills = getFilteredSkills();

    skillsContainer.replaceChildren(...filteredSkills.map(createSkillCard));
}
