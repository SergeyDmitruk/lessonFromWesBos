'use strict';

const menu = document.querySelector('.nav__menu');

const topOfMenu = menu.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfMenu){
        document.body.style.paddingTop = menu.offsetHeight + 'px';
        document.body.classList.add('fixed-menu');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-menu');
    }
}

window.addEventListener('scroll', fixNav);