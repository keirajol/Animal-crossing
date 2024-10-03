var divv = document.querySelector("header > div:nth-of-type(2)"); 
var img = document.querySelector("header > img:nth-of-type(1)"); 

function fadeInDiv() {
    divv.style.opacity = '1'; 
    divv.style.transition = 'opacity 1s'; 
}

img.addEventListener("click", fadeInDiv);
