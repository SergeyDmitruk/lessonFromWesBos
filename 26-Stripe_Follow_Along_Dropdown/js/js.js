'use strict';

// sticky nav
const menu = document.querySelector('.nav__menu');
const topOfMenu = menu.offsetTop;

function fixMenu(){
    if(window.scrollY >= topOfMenu){
        document.body.style.paddingTop = menu.offsetHeight + 'px';
        document.body.classList.add('fixed-menu');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-menu');
    }
}
window.addEventListener('scroll', fixMenu);


// Nice menu effect

const triggers = document.querySelectorAll('.nav__menu .nav__item');
const background =  document.querySelector('.background');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');
    const dropdown = this.querySelector('.nav__dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    // console.log(dropdownCoords);
    // console.log(navCoords);
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
    };
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));