/**
 * Define Global Variables
 * 
*/

const menuToggle = document.querySelector('.toggle');
const nextToggle = document.querySelector('.next');
const previousToggle = document.querySelector('.before');
const homeToggle = document.querySelector('.home');
const showcase = document.querySelector('.showcase');
const social = document.querySelector('.social.vertical');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.upBtn');


// delay moving to next page

function delay (URL) {
    setTimeout( ()=> { window.location = URL }, 1500 );
}

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// scroll to top button
// hide the button

window.onscroll= function () {
    this.scrollY >= 300 ?btn.classList.add('show'):btn.classList.remove('show');
}
// scroll to top
function goUP() {
    window.scrollTo({top:0, behavior:"smooth"});
}

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
    social.classList.toggle('active');
});


homeToggle.addEventListener('click', ()=>{
    homeToggle.classList.toggle('homePage');
    logo.classList.toggle('homePage');
});

nextToggle.addEventListener('click', ()=>{
    nextToggle.classList.toggle('nextPage');
    showcase.classList.toggle('nextPage');
    menu.classList.toggle('nextPage');
    social.classList.toggle('nextPage');
});

previousToggle.addEventListener('click', ()=>{
    previousToggle.classList.toggle('previousPage');
    showcase.classList.toggle('previousPage');
    menu.classList.toggle('previousPage');
    social.classList.toggle('previousPage');
});







/**
 * End Main Functions
 */