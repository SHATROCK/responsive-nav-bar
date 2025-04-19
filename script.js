let menu = document.querySelector("#burger");
let list = document.querySelector("nav ul");

menu.addEventListener("click",()=>{
    list.classList.toggle("show");
})