// helper.js
export function initCategoryFilter(buttons, defaultCategory, onChange) {
    if (buttons.length === 0) {
        return;
    }

    function setActiveCategory(category) {
        buttons.forEach((button) => {
            const isActive = button.dataset.category === category;

            button.classList.toggle("tab-button--active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        onChange(category);
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            setActiveCategory(button.dataset.category);
        });
    });

    setActiveCategory(defaultCategory);
}