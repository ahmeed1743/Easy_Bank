let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay")


menu.addEventListener("click" , ()=> {
    nav.classList.toggle("active");
    menu.classList.toggle("close");
    overlay.classList.toggle("show");
})