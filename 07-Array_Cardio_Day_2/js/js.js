'use strict';

const people = [
    { name : 'Wes', year: 1988 },
    { name : 'Serge', year: 1992 },
    { name : 'Oksana', year : 1993  },
    { name : 'Anonimus', year: 1900},
];

const comments = [
    { text: 'Love this!', id: 1 },
    { text: 'Super good!', id: 2 },
    { text: 'You are the best!', id: 3 },
    { text: 'Best of all time!', id: 4 },
    { text: 'Nica Nice Nice!!', id: 5 },
];

 //Some and Every Checks
 // Array.prototype.some() // is at least one person 25?

    // const isAdult = people.some(function(person){
    //     const currentYear = (new Date()).getFullYear();
    //     if (currentYear - person.year >= 25){
    //         return true;
    //     }
    // });

    const isAdult = people.some(person => (new Date()).
        getFullYear() - person.year >= 25 );
    console.log({isAdult});


 // Array.prototype.every() // is everyone 25?

    const everyAdult = people.every(person => (new Date()).
        getFullYear() - person.year >= 25 );
    console.log({everyAdult});

 // Array.prototype.find()
 // Find is like filter, but instead returns just the one you are looking for
 // find the comment with the ID of 3

    // const comment = comments.find(function (comment) {
    //     if(comment.id === 3 ){
    //         return true
    //     }
    // });

    const comment = comments.find(comment => comment.id === 3 );

    console.log(comment);

 // Array.prototype.findIndex()
 // Find the comment with this ID
 // Delete the comment with the ID of 4

    const index = comments.findIndex( comment => comment.id === 4 );

    console.log(index);

    comments.splice( index , 1 );

    console.table(comments);