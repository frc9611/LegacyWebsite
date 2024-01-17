function disableScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };

    d.documentElement.style.overflowX = "hidden";
}

function enableScroll() {
    window.onscroll = function() {};
}
