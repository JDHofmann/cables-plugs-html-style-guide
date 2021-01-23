console.log("loaded js")

let burgerBtn = document.querySelector(".burger-btn")

let nav = document.querySelector("nav")

burgerBtn.addEventListener( "click", () => {
    nav.classList.remove("nav-hidden")
} )

// tasks
// √ build nav bar
// √ build burger menu 
// build header link carousel
// 