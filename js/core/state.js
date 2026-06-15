import { skills } from "../data/skills.js";

let activeCategory = "web";

const btWeb = document.getElementById("buttonWeb");
const btSoftware = document.getElementById("buttonSoftware");
const btGame = document.getElementById("buttonGameDev");

btWeb.addEventListener("click", () => setActiveCategory("web"));
btSoftware.addEventListener("click", () => setActiveCategory("software"));
btGame.addEventListener("click", () => setActiveCategory("gamedev"));

function setActiveCategory(category) {
    activeCategory = category;

    renderSkills();
}

function getFilteredSkills() {
    return skills.filter(
        skill => skill.category === activeCategory
    );
}

console.log("Karte wird geladen");
const skillsContainer = document.getElementById("skillsContainer");

function renderSkills(){

    skillsContainer.innerHTML = "";
    const filteredSkills = getFilteredSkills();

    filteredSkills.forEach(skill => {
        const card = document.createElement("div");
        card.innerHTML = `
        <h2>${skill.name}</h2>
        <p>${skill.description}</p>
        `;
        console.log("Karte erstellt");

        skillsContainer.appendChild(card);
    })
}
