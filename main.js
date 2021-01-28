// console.log("loaded js")

let burgerBtn = document.querySelector(".burger-btn")

let nav = document.querySelector("nav")

burgerBtn.addEventListener( "click", () => {
    nav.classList.remove("nav-hidden")
} )

let linkOne = document.getElementById("1")

linkOne.addEventListener( "click", () => {
    console.log("clicked One")
} )
const scrollLinks = ( i=0 ) => {
    let links = document.querySelectorAll(".link")
    links.forEach( lx => lx.classList.remove("in-view"))
    if(i === links.length ) i = 0;
    links[i].classList.add("in-view")
    i+=1;
    setTimeout(() => scrollLinks(i), 5000)
}

scrollLinks()