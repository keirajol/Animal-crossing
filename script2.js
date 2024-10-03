var divv = document.querySelector("div");
var img = document.querySelector("img");

function fadeInDiv() {
    divv.classList.add("my-class");
}

img.addEventListener("click", fadeInDiv);
