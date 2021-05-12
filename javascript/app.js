let hamicon = document.querySelector(".hamicon");
let ul = document.querySelector(".navlist")
hamicon.addEventListener("click", toggleicon);

let footer_div = document.querySelectorAll(".flex");
let footer_ul = document.querySelectorAll(".footer-ul"); 


let select_btn = document.querySelectorAll(".footer-ul li");

Array.from(footer_div).forEach((items) =>{
    items.addEventListener("click", myfunction);
})
Array.from(select_btn).forEach((items) =>{
    items.addEventListener("click", footerfunc);
})



function footerfunc(e){
    let text = e.target.innerText;
    let parentelem = e.target.parentElement;
    let ul = parentelem.parentElement;
    let firstelem = ul.firstElementChild;
    let firstElem = firstelem.firstElementChild;
    firstElem.innerText = text;
    
}

function toggleicon(){
    ul.classList.toggle("display")
}

function myfunction(e) {
    if(!e.target.className.match(".fa-caret-down")){
        let ul = e.target.nextElementSibling;
        ul.classList.toggle("show");
    }else{
        let parentelem = e.target.parentElement;
        let ul = parentelem.nextElementSibling;
        ul.classList.toggle("show");
    }
}