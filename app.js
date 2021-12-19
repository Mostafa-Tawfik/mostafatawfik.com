/**
 * Define Global Variables
 * 
*/

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const social = document.querySelector('.social.vertical');
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

// scroll to top button
// hide the button
window.onscroll= function () {
    this.scrollY >= 500 ?btn.classList.add('show'):btn.classList.remove('show');
}
// scroll to top
function goUP() {
    window.scrollTo({top:0, behavior:"smooth"});
}


/**
 * End Main Functions
 */