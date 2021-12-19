/**
 * Define Global Variables
 * 
*/

const menuToggle = document.querySelector('.toggle');
const nextToggle = document.querySelector('.next');
const showcase = document.querySelector('.showcase');
const social = document.querySelector('.social.vertical');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.upBtn');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
    social.classList.toggle('active');
});


nextToggle.addEventListener('click', ()=>{
    nextToggle.classList.toggle('nextPage');
    showcase.classList.toggle('nextPage');
    menu.classList.toggle('nextPage');
});


// scroll to top button
// hide the button
window.onscroll= function () {
    this.scrollY >= 300 ?btn.classList.add('show'):btn.classList.remove('show');
}
// scroll to top
function goUP() {
    window.scrollTo({top:0, behavior:"smooth"});
}


/**
 * End Main Functions
 */