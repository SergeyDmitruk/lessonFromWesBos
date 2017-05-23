'use strict';
const bands = ['WHAM!', 'ABBA', 'Skillet', 'Bullet for my Valentine', 'A-ha',
                'Shine Down', 'Image Dragon'];

function strip(bandName){
    return bandName.replace(/^(a |the |an)/i, '').trim();
}

const sortedBands = bands.sort(function(a,b){
   return strip(a) > strip(b) ? 1 : -1;
});
console.log(sortedBands);

document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

