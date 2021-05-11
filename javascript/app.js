let hamicon = document.querySelector(".hamicon");
let ul = document.querySelector(".navlist")
hamicon.addEventListener("click", toggleicon);

function toggleicon(){
    ul.classList.toggle("display")
}