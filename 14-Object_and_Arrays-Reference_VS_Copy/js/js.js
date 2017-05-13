'use strict';

 // Start with string numbers and booleans
// let age = 100;
// let age2 = age;
//
// console.log(age, age2);
//
// age = 200;
// console.log(age, age2);


// _______________________________


// Let`s say we have an array
const players = ['Serge', 'Bo', 'Dimas', 'Vitek', 'Igas'];

// and we want to make a copy of it

// Wrong way copy and changes = players changes too!

// const team = players;
// console.log(players, team);
//
// team[3] = 'New';

// _______________________________

// Right way

const team2 = players.slice();
team2[2] = 'New';
console.log(team2);

// or use concat

const team3 = [].concat(players);


// new ES6 Spread

const team4 = [...players];

const team5 = Array.from(players);


// _______________________________

// Now in Objects

const person = {
    name: 'Serge Dmitruk',
    age: 100
};

// make a wrong copy

// const captain = person;
// captain.number = 101;

// How do we take a copy instead ?

const cap2 = Object.assign({}, person, { number: 120});
console.log(cap2);


// Spread for Objects
const cap3 = {...person};



const param = {
    name: 'Name',
    age: 100500,
    social : {
        twitter : '@twit',
        facebook : '@fb'
    }
};
console.log(param);

//  This method work in first level deep - both for Array and Objects.
const dev = Object.assign({}, param);

// This mathod allows work in parameters like string and if we want to change something
// parent will not be changed
const dev2 = JSON.parse(JSON.stringify(param));