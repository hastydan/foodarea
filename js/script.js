const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    
}); 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

 const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset:true
 });

 sr .reveal('.home-text', {delay:200, origin: 'bottom'}); 
 sr .reveal('.home-img', {delay:200, origin: 'top'}); 



 sr .reveal('.container, .about, .menu, .contact', {delay:200, origin: 'bottom'}); 