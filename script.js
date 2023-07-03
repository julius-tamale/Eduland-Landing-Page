"use strict";

// navbar variables

const navOpenBtn = document.querySelector('.menu-open-btn'), 
    navCloseBtn = document.querySelector('.menu-close-btn'),
    navbar = document.querySelector('.navbar'),
    overlay = document.querySelector('.overlay');

const navElemArr = [navOpenBtn, navCloseBtn, overlay]

for(let navEl of navElemArr) {
    navEl.addEventListener('click', () => {
        overlay.classList.toggle('active');
        navbar.classList.toggle('active');
    })
}

// console.log(navOpenBtn)
// console.log(navCloseBtn)
// console.log(navbar)
// console.log(overlay)