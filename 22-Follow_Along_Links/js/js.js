'use strict';
const trigger = document.querySelectorAll('a');
const hightlight = document.createElement('span');

hightlight.classList.add('hightlight');
document.body.append(hightlight);

function hightlightLink(){
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    hightlight.style.width = `${coords.width}px`;
    hightlight.style.height = `${coords.height}px`;

    hightlight.style.transform = `translate(${coords.left}px , ${coords.top}px)`
}
trigger.forEach( a =>
    a.addEventListener('mouseenter', hightlightLink));