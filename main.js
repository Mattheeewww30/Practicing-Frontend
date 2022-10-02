const popMenuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const hamburguerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


popMenuEmail.addEventListener("click", popDesktopMenu);
hamburguerIcon.addEventListener("click", popMobileMenu);


function popDesktopMenu (){
    desktopMenu.classList.toggle("inactive");
}


function popMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}

