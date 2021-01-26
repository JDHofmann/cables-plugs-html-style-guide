console.log("loaded js")

let burgerBtn = document.querySelector(".burger-btn")

let nav = document.querySelector("nav")

burgerBtn.addEventListener( "click", () => {
    nav.classList.remove("nav-hidden")
} )

function scrollIt(){
    console.log("scrolling")
    let item2 = document.getElementById("2")
    item2.scrollIntoView()
}

setTimeout( scrollIt, 2000 )
// tasks
// √ build nav bar
// √ build burger menu 
// build header link carousel
// 
