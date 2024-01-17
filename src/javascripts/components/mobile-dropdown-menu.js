var d = document;

/** @type {HTMLButtonElement} */
const dropdownOpenButton = d.querySelector("#open-dropdown-button");
/** @type {HTMLDivElement} */
const backdrop = d.querySelector("#backdrop");
/** @type {HTMLButtonElement} */
const dropdownCloseButton = d.querySelector("#dropdown-menu-close-button");
/** @type {HTMLImageElement} */
const dropdownOpenButtonIcon = d.querySelector(".dropdown-icon");
/** @type {HTMLDivElement} */
const dropdownMenu = d.querySelector("#dropdown-menu");
/** @type {HTMLAnchorElement[]} */
const dropdownMenuOptions = d.querySelectorAll(".dropdown-menu-option");

dropdownOpenButton.addEventListener("click", () => {
    backdrop.style.display = "flex";
    dropdownOpenButtonIcon.classList.add("dropdown-icon-open");
    dropdownMenu.classList.add("dropdown-menu-open");
    disableScroll();
});

dropdownCloseButton.addEventListener("click", () => {
    backdrop.style.display = "none";
    dropdownOpenButtonIcon.classList.remove("dropdown-icon-open");
    dropdownMenu.classList.remove("dropdown-menu-open");
    enableScroll();
});

dropdownMenuOptions.forEach((option) => {
    option.addEventListener("click", () => {
        backdrop.style.display = "none";
        dropdownOpenButtonIcon.classList.remove("dropdown-icon-open");
        dropdownMenu.classList.remove("dropdown-menu-open");
        enableScroll();
    })
});
