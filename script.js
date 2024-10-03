var tekstBallon = document.querySelector("header > div:nth-of-type(2)"); 
var img = document.querySelector("header > img:nth-of-type(1)"); 

function fadeIn() {
    tekstBallon.style.opacity = '1'; 
    tekstBallon.style.transition = 'opacity 1s'; 
}

img.addEventListener("click", fadeIn);
