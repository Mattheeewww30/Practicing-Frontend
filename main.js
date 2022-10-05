// Email
const emailIcon = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
// In case of using mobile
const hamburguerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
// For shopping 
const kartIcon = document.querySelector(".navbar-shopping-cart")
const kartMenu = document.querySelector(".product-detail")



emailIcon.addEventListener("click", popDesktopMenu);
hamburguerIcon.addEventListener("click", popMobileMenu);
kartIcon.addEventListener("click", popKarteMenu);


function popDesktopMenu (){
    const isKartMenuClose = kartMenu.classList.contains("inactive")

    if (!isKartMenuClose){
        kartMenu.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}


function popMobileMenu(){
    const isKartMenuClose = kartMenu.classList.contains("inactive")

    if (!isKartMenuClose){
        kartMenu.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive");
}


function popKarteMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive")

    if (!isMobileMenuClose){
        mobileMenu.classList.add("inactive")
    }
    kartMenu.classList.toggle("inactive");
}

