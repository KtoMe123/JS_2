"use strict";


// function sayHi() {
//     alert('hi')
// }

// alert(sayHi.name)



// let sayHi = function() {
//     alert('hi')
// }

// alert(sayHi.name)



// function f(sayHi = function() {}) {
//     alert(sayHi.name);
// }




// let user = {

//     sayHi() {

//     },

//     sayBye: function() {

//     },
// }

// alert(user.sayBye.name);
// alert(user.sayHi.name);



// let arr = [function() {}];

// alert( arr[0].name )




// function one(a) {};
// function two(a, b) {};
// function many(a, b, ...more) {};

// alert(one.length);
// alert(two.length);
// alert(many.length);



// function ask(question, ...handlers) {
//     let isYes = confirm(question);

//     for ( let handler of handlers ) {
//         if ( handler.length == 0 ) {
//             if ( isYes ) handler();
//         } else {
//             handler(isYes);
//         }
//     }
// }

// ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));




// function sayHi() {
//     alert("hi");

//     sayHi.counter++;
// }

// sayHi.counter = 0;

// sayHi();
// sayHi();

// alert(sayHi.counter)



// function makeCounter() {

//     function counter() {
//         return counter.count++;
//     };
//     counter.count = 0;

//     return counter;
// }

// let counter = makeCounter();

// counter.count = 10;

// alert( counter() );
// alert( counter() );
// alert( counter() );



// let sayHi = function func(who) {
//     if ( who ) {
//         alert(`hi ${who}`);
//     } else {
//         func("noname")
//     }
    
// }

// let welcome = sayHi();
// sayHi = null;

// welcome()





// function makeCounter() {
//     let count = 0;

//     function counter() {
//     return count++;
//     }

//     counter.set = function(value) {
//         return count = value;
//     } 

//     counter.decrease = function() {
//         return count--;
//     } 
//     counter.set(10);
//     counter.decrease();

//     return counter;
// }

// let counter = makeCounter();

// alert( counter() );




// function sum(a) { 
//     let numberSum = a;

//     function numB(b) {
//         numberSum += b;
        
//         return numB;
//     }

//     numB.toString = function() {
//         return numberSum;
//     };

//     return numB;
// }

// alert(sum(1)(2)(3));