const popMenuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")


popMenuEmail.addEventListener("click", popDesktopMenu);


function popDesktopMenu (){
    desktopMenu.classList.toggle("inactive");
}

