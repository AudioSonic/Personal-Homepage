async function loadComponent(path, elementId) {
    const response = await fetch(path);
    const data = await response.text();

    document.getElementById(elementId).innerHTML = data;
}

loadComponent("header.html", "header");
loadComponent("footer.html","footer");