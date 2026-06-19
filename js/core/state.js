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

function calculateProgress(skill){
    return 90;
}

const skillsContainer = document.getElementById("skillsContainer");


function renderSkills(){

    skillsContainer.innerHTML = "";
    const filteredSkills = getFilteredSkills();

    filteredSkills.forEach(skill => {
        const progress = calculateProgress(skill);
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card skill-card">
            <div class="skill-card-upper-section">
                <div>
                    <img src=${skill.image} alt=${skill.name}>
                </div>

                <div class="skill-card-progressbar">
                    <div class="skill-card-progress-desc">
                        <h3>${skill.name}</h3>
                        <label>${progress}%</label>
                    </div>
                    <progress class="skill-card__progress" value="90" max="100"></progress>
                </div>
            </div>
                
            <div>
                <p>${skill.description}</p>
            </div>
        </div>

        `;
        console.log("Karte erstellt");

        skillsContainer.appendChild(card);
    })
}