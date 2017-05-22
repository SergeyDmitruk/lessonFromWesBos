'use strict';
const hero = document.querySelector('.hero');
const text = document.querySelector('.hero__item');
const walk = 10; // 100px

function shadow(e){
//            const width = hero.offsetWidth;
//            const height = hero.offsetHeight;

    const {offsetWidth: width,  offsetHeight: height} = hero;
    let {offsetX : x, offsetY : y} = e;

           // console.log(this, e.target);

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }


    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));


    text.style.textShadow = `
                ${xWalk * -2}px ${yWalk* -2}px 2px #000000
            `;
    // text.style.textShadow = `
    //             ${xWalk}px ${yWalk}px 0 #000000,
    //             ${xWalk * -1}px ${yWalk}px 0 #000000,
    //             ${yWalk}px ${xWalk * -1}px 0 #000000,
    //             ${yWalk * -1}px ${xWalk}px 0 #000000
    //         `;
}
hero.addEventListener('mousemove', shadow);