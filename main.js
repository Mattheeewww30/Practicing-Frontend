// Email
const emailIcon = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
// In case of using mobile
const hamburguerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
// For shopping 
const kartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCart")
// Products
const cardsContainer = document.querySelector(".cards-container")
// Product Detail
const productDetailContainer = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-close")


// Render Menu
emailIcon.addEventListener("click", popDesktopMenu);
hamburguerIcon.addEventListener("click", popMobileMenu);
kartIcon.addEventListener("click", popKarteMenu);
// Close Product Detail
productDetailCloseIcon.addEventListener("click", closeProductDetail);

function popDesktopMenu (){
    const isKartMenuClose = shoppingCartContainer.classList.contains("inactive")

    if (!isKartMenuClose){
        shoppingCartContainer.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

function popMobileMenu(){
    const isKartMenuClose = shoppingCartContainer.classList.contains("inactive")

    // Mobile Menu VS Kart Menu
    if (!isKartMenuClose){
        shoppingCartContainer.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive");
    // Mobile Menu VS Product Detail
    closeProductDetail()
}

function popKarteMenu(){
    // Mobile Menu VS Kart Menu
    const isMobileMenuClose = mobileMenu.classList.contains("inactive")
    if (!isMobileMenuClose){
        mobileMenu.classList.add("inactive")
    }

    // Product Detail VS Kart Menu
    closeProductDetail()

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetail(){
    productDetailContainer.classList.remove("inactive")
    // Product Detail VS Kart Menu
    shoppingCartContainer.classList.add("inactive")

}

function closeProductDetail(){
    productDetailContainer.classList.add("inactive")
}

// Render Products
const productList = []
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "TV",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "PC",
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(array){
    for (product of array){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetail)

    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerText = product.name
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)

