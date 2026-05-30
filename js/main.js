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

async function initComponents() {
    await Promise.all([
        loadComponent("../html/components/header.html", "header"),
        loadComponent("../html/components/footer.html", "footer"),
        loadComponent("../html/components/sidebar.html", "sidebar"),
        loadComponent("../html/components/sidebar-mobile.html", "sidebar-mobile"),
    ]);

    initMobileNavigation();
}

initComponents();

