let hamburger= document.getElementById("burger-container");
let hamburgerTop = document.getElementsByClassName("burger-top");
let hamburgerMid = document.getElementsByClassName("burger-mid");
let hamburgerBot = document.getElementsByClassName("burger-bot");

hamburger.addEventListener("click", function(){
    if (!hamburger.classList.contains("opened")){
        hamburger.classList.add("opened");
        hamburgerTop[0].classList.remove("burger-top--opened");
        hamburgerMid[0].classList.remove("burger-mid--opened");
        hamburgerBot[0].classList.remove("burger-bot--opened");
        hamburgerTop[0].classList.add("burger-top--closed");
        hamburgerMid[0].classList.add("burger-mid--closed");
        hamburgerBot[0].classList.add("burger-bot--closed");
        return false;
    }
    hamburger.classList.remove("opened");
    hamburgerTop[0].classList.remove("burger-top--closed");
    hamburgerMid[0].classList.remove("burger-mid--closed");
    hamburgerBot[0].classList.remove("burger-bot--closed");
    hamburgerTop[0].classList.add("burger-top--opened");
    hamburgerMid[0].classList.add("burger-mid--opened");
    hamburgerBot[0].classList.add("burger-bot--opened");
});