"use strict";

// navbar variables

const navOpenBtn = document.querySelector('.menu-open-btn'), 
    navCloseBtn = document.querySelector('.menu-close-btn'),
    navbar = document.querySelector('.navbar'),
    overlay = document.querySelector('.overlay');

const headerEl = document.querySelector('.header');
const navElemArr = [navOpenBtn, navCloseBtn, overlay]


//hide or show nav menu on-click
for(let navEl of navElemArr) {
    navEl.addEventListener('click', () => {
        overlay.classList.toggle('active');
        navbar.classList.toggle('active');
    })
}

//add the 'active' class to the header when scroll event occurs
window.addEventListener('scroll', () => {
    window.scrollY >= 20 ? headerEl.classList.add('active') 
        : headerEl.classList.remove('active')
})

// console.log(navOpenBtn)
// console.log(navCloseBtn)
// console.log(navbar)
// console.log(overlay)