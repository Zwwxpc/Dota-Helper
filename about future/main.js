let left = document.getElementById("arrowLeft");
let right = document.getElementById("arrowRight");
let carusel = document.getElementById("carusel");

left.addEventListener("click", clickLeft);
right.addEventListener("click", clickRight);

const caruselElem = 1;
const width = 100 / caruselElem;
const item = carusel.children.length - caruselElem;
let current = 0;

for (let i = 0; i < carusel.childElementCount; i++) {
    carusel.children[i].style.minWidth = width + "%";
}

function clickLeft() {
    current -= 1;
    if (current < 0) {
        current = item;
    }
    carusel.style.transform = `translateX(-${width * current}%)`;
}
function clickRight() {
    current += 1;
    if (current > item) {
        current = 0;
    }
    carusel.style.transform = `translateX(-${width * current}%)`;
}




  



