let navbar = document.getElementsByClassName("navbar");
let navbarList = document.getElementsByClassName("nav-list");

hamburger.addEventListener("click", function(){
    if (!hamburger.classList.contains("opened")){
        navbarList[0].classList.add("nav-list-closed");
        navbarList[0].classList.remove("nav-list-opened");
        return false;
    }
    navbarList[0].classList.add("nav-list-opened");
    navbarList[0].classList.remove("nav-list-closed");
});

let btnStyleOne   = document.getElementById("style-1");
let btnStyleTwo   = document.getElementById("style-2");
let btnStyleThree = document.getElementById("style-3");
let btnStyles = document.getElementsByClassName("btn-navbar-style");


for (i = 0; i < btnStyles.length; i++) {
    btnStyles[i].addEventListener("click", function(){
        navbar[0].classList.remove("nav-style-1");
        navbar[0].classList.remove("nav-style-2");
        navbar[0].classList.remove("nav-style-3");
        navbar[0].classList.add(this.id);
    })
}