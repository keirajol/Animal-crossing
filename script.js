
var tekstBallon = document.querySelector("header > div:nth-of-type(2)");
var img = document.querySelector("header > img:nth-of-type(1)");


function FadeIn() {
    tekstBallon.classList.toggle("visible"); 
}

img.addEventListener("click", FadeIn);
