const ulManu = document.querySelector(".toggle__btn");
const ulTogglebtn = document.querySelector(".nav__manu__btn");

ulTogglebtn.addEventListener("click", () =>{
    ulTogglebtn.classList.toggle("active1");
    ulManu.classList.toggle("active2");
})