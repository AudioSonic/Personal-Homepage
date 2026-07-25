import { createProjectCard } from "./pages/projects.js";

async function loadComponent(path, elementId) {
    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    const response = await fetch(path);
    const data = await response.text();

    element.innerHTML = data;
}

function initMobileNavigation() {
    const burgerButton = document.querySelector(".burger-menu");
    const mobileNavigation = document.querySelector(".mobile-navigation");
    const closeElements = document.querySelectorAll("[data-mobile-nav-close]");
    const navigationLinks = document.querySelectorAll(".mobile-navigation .navigation-link");

    if (!burgerButton || !mobileNavigation) {
        return;
    }

    const openNavigation = () => {
        document.body.classList.add("mobile-navigation-open");
        burgerButton.setAttribute("aria-expanded", "true");
        mobileNavigation.setAttribute("aria-hidden", "false");
    };

    const closeNavigation = () => {
        document.body.classList.remove("mobile-navigation-open");
        burgerButton.setAttribute("aria-expanded", "false");
        mobileNavigation.setAttribute("aria-hidden", "true");
    };

    burgerButton.addEventListener("click", () => {
        if (document.body.classList.contains("mobile-navigation-open")) {
            closeNavigation();
            return;
        }

        openNavigation();
    });

    closeElements.forEach((element) => {
        element.addEventListener("click", closeNavigation);
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            closeNavigation();
        }
    });
}

function setActiveNavigationLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navigationLinks = document.querySelectorAll(".navigation-link");

    navigationLinks.forEach((link) => {
        const linkPage = new URL(link.getAttribute("href"), window.location.href).pathname.split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("navigation-link--active");
            link.setAttribute("aria-current", "page");
        }
    });
}

function initThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || document.documentElement.dataset.theme || "dark";

    document.documentElement.dataset.theme = initialTheme;

    if (!themeToggle) {
        return;
    }

    const updateThemeButtonLabel = () => {
        const isLightTheme = document.documentElement.dataset.theme === "light";
        themeToggle.setAttribute("aria-label", isLightTheme ? "Dark Mode aktivieren" : "Light Mode aktivieren");
    };

    themeToggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";

        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("theme", nextTheme);
        updateThemeButtonLabel();
    });

    updateThemeButtonLabel();
}

function initProjects(){
    const projectContainer = document.getElementById("project-container");
    const project = createProjectCard();
    projectContainer.append(project);
}

async function initComponents() {
    await Promise.all([
        loadComponent("../html/components/header.html", "header"),
        loadComponent("../html/components/footer.html", "footer"),
        loadComponent("../html/components/sidebar.html", "sidebar"),
        loadComponent("../html/components/sidebar-mobile.html", "sidebar-mobile"),
    ]);

    initMobileNavigation();
    setActiveNavigationLink();
    initThemeToggle();
    initProjects();
}

initComponents();

