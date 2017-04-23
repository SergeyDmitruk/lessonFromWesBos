
'use strict';

const galleryItem = document.querySelectorAll('.gallery__item');

function toggleOpen(){
    this.classList.toggle('active');
}
function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('active-open');
    }
    console.log(e.propertyName);
}

galleryItem.forEach( item => item.addEventListener('click', toggleOpen));
galleryItem.forEach( item => item.addEventListener('transitionend', toggleActive));