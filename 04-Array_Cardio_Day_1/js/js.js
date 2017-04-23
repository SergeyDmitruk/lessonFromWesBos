'use strict';

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolas', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Plank', year: 1858, passed: 1947}
];



const people = ['Back, Glen', 'Babbage, Charles' , 'Babcock, Leander', 'Babenco, Hector' , 'Baca, Joe' ,
                'Bacchus, Jim', 'Bach, Richard', 'Bacharach ,Burt' , 'Bachchan, Amitabh', 'Bravo, Angel',
                ' Brandis, Jonathan','Brando, Marlon', 'Brandon, Henry', 'Brenneman, Amy','Brenner, David',
                'Brewster, Punky', 'Brewster, Ralph Owen', 'Brice, Fanny', 'Brooker, Bertram' , 'Brooks, David',
                'Brown, Blair', 'Brown, Julie', 'Brown, James', 'Brown, Dan', 'Brown, Paul',
                'Bryson, Peabo', ' Buhl, Bob', 'Bulger, Marc', 'Burbank, Luther', 'Burgess, Anthony',
                'Banderas, Antonio', 'Birnerova, Eva', 'Black, Karen', ' Black, Cara', ' Blair, Linda'];


// Array.prototype.filter()
//1. Filter the list of iventors for those who were born in ther 1500`s

// const fifteen = inventors.filter(function(inventor){
//     if(inventor.year >= 1500 && inventor.year < 1600){
//         return true; // keep it
//     }
// });

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);

// Array.prototype.map()
//2. Give us an array of the inventory first and last names

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

//Array.prototype.sort()
//3. Sort the inventors by birthdate, oldest to youngest

// const ordered = inventors.sort(function (a,b) {
//     if(a.year > b.year){
//         return 1;
//     }else{
//         return -1;
//     }
// });

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);

// Array.prototype.reduce()
//4. How many years did all inventors live?

// let totalYears = 0;
//
// for (let  i =0; i < inventors.length; i++ ){
//     totalYears += inventors[i].year;
// }

const totalYears = inventors.reduce((total , inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived

const oldest = inventors.sort(function (a,b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? 1 : - 1;
    });
console.table(oldest);

//6. Create a list of Boulevards in Paris that contains 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map( link => link.textContent )
//             .filter( streetName => streetName.includes('de'));

//7. sort the people alphabetically by last name

const alpha = people.sort(function(lastOne, nextOne){
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = lastOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.log(alpha);

//8. Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bile', 'wakl', 'car', 'van',
'walk','car', 'truck'];


const transportation =  data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});


console.log(transportation);






