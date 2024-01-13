var w = window;
var d = document;

disableScroll();

/** @type {HTMLDivElement} */
const loading = document.querySelector("#page-loading")

w.addEventListener("load", () => {
    loading.style.display = "none";
    enableScroll();
});
