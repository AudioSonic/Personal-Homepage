async function loadComponent(path, elementId) {
    const response = await fetch(path);
    const data = await response.text();

    document.getElementById(elementId).innerHTML = data;
}

loadComponent("../html/components/header.html", "header");
loadComponent("../html/components/footer.html","footer");
