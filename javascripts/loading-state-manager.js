var w = window;
var d = document;

window.scrollTo(0, 0);
disableScroll();

/** @type {HTMLDivElement} */
const loading = document.querySelector("#page-loading");
/** @type {HTMLButtonElement} */
const ignoreLoadButton = document.querySelector("#ignore-load-button");

function endUpLoading() {
    loading.style.display = "none";
    enableScroll();
}

ignoreLoadButton.addEventListener("click", endUpLoading);
w.addEventListener("load", endUpLoading);
