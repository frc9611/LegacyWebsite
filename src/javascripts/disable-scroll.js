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

let preScroll = 0;
let contador = 0;
window.addEventListener('scroll', () => {
    const header = (document.querySelector(".hideable-header")).classList;
    
    let thisScroll = window.scrollY;

    if(contador == 10) {
        contador = 0;
        preScroll = thisScroll;
    }

    if(window.scrollY > 50) {
        if (thisScroll === preScroll) return;
        if (thisScroll > preScroll) {
            if(!header.contains('scrollHide')) {
                header.add('scrollHide');
            }
        } else {
            if(header.contains('scrollHide')) {
                header.remove('scrollHide');
            }
        }
    }

    contador++;
});
