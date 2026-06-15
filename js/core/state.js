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

    console.log(getFilteredSkills());
}

function getFilteredSkills() {
    return skills.filter(
        skill => skill.category === activeCategory
    );
}