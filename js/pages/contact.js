"use strict";

export function initContactForm() {
    const form = document.querySelector("#contact-form");
    const modal = document.querySelector("#contact-modal");
    if (!form || !modal) return;
    const fields = [...form.querySelectorAll("input, textarea")];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validate = (field) => {
        const value = field.value.trim();
        const message = !value ? "Bitte fülle dieses Feld aus." : field.type === "email" && !emailPattern.test(value) ? "Bitte gib eine gültige E-Mail-Adresse ein." : "";
        field.setCustomValidity(message);
        return !message;
    };
    fields.forEach((field) => field.addEventListener("blur", () => validate(field)));
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!fields.map(validate).every(Boolean)) return form.reportValidity();
        modal.hidden = false;
        document.body.classList.add("contact-modal-open");
        modal.querySelector("[data-modal-close]").focus();
    });
    modal.querySelectorAll("[data-modal-close]").forEach((element) => element.addEventListener("click", () => {
        modal.hidden = true;
        document.body.classList.remove("contact-modal-open");
    }));
}
