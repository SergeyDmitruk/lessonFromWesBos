'use strict';

const dogs = [{name: 'Pesik', age : 2}, {name: 'Dropko', age : 10 }];
const p = document.querySelector('p');

function makeGreen(){
    p.style.color = '#abda55';
    p.style.fontSize = '50px';
    return false;
};

// Types of console logges

// Regular
console.log('Hello');

// Interpolated
console.log('Hello i am a %s', 'Serge');

// Styled
console.log('%c some great text', 'font-size:50px; color: red;');

// Warning
console.warn('Warning');

// Error
console.error('Error text');

// Info
console.info('Information text');

// Testing
console.assert( p.classList.contains('class'), 'It`s wrong!');

// Clearing
// console.clear();

// View DOM Elements

console.log(p);
console.dir(p);

// Grouping together

    dogs.forEach(dog => {
        console.group(`${dog.name}`);
       console.log(`this is ${dog.name}`);
       console.log(`${dog.name} is ${dog.age} years old`);
       console.log(`${dog.name} is ${dog.age * 5 } years old`);
        console.groupEnd(`${dog.name}`);
    });

// Countind

    console.count('Serge');
    console.count('Serge');
    console.count('Leonidovich');
    console.count('Serge');
    console.count('Serge');
    console.count('Leonidovich');
    console.count('Leonidovich');
    console.count('Serge');

// Timing
    console.time('Fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('Fetching data');
            console.log(data);
        });

// Table
    console.table(dogs);