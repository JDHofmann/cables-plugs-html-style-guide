// console.log("loaded js")

let burgerBtn = document.querySelector(".burger-btn")

let nav = document.querySelector("nav")

burgerBtn.addEventListener( "click", () => {
    nav.classList.remove("nav-hidden")
} )

const scrollLinks = ( i=0 ) => {
    let cont = document.querySelector(".scrolling-links-container")
    let links = document.querySelectorAll(".link")
    links.forEach( lx => lx.style.display = "none" )
    if(i === links.length ) i = 0;
    links[i].style.display = "block"
    i+=1;
    setTimeout(() => scrollLinks(i), 5000)
}

scrollLinks()