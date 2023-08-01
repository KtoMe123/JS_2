"use strict";


// let name = "Pete";

// function sayHi() {
//     alert("Hi, " + name);
// }

// name = "John";


// sayHi();





// function makeWorker() {
//     let name = "Pete";

//     return function() {
//         alert(name);;
//     }
// }

// let name = "John";

// let work = makeWorker();

// work()



// function User(name) {
//     this.sayHi = function() {
//         alert(name);
//     };
// }

// let user = new User("John");
// user.sayHi();



// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++; 
//     };
// }

// let counter = makeCounter();

// alert( counter() ); 
// alert( counter() ); 
// alert( counter() );



// let pharse = "hello";

// if ( true ) {
//     let name = "jo";
//     alert( pharse )
// }

// alert( name );




// for (let i = 0; i < 10; i++) {

// }
// alert(i)




// {
//     let name = "jo"
//     alert(name)
// }
// alert(name)




// (function() {

//     let message = "Hello";

//     alert(message); // Hello

// })();



// (function() {
//     alert(1);
// })();

// (function() {
//     alert(2);
// }());

// !function() {
//     alert(3)
// }();

// +function() {
//     alert("fdfd")
// }();



// function f() {
//     let val1 = 1;
//     let val2 = 2;

//     function g() { alert(val1); }

//     return g;
// }

// let g = f();
// let arr = [f(), f(), f()];

// alert(arr)
// alert(g)

// g = null;
// arr = null;


// let value = "Сюрприз!";

// function f() {
//     let value = "ближайшее значение";

//     function g() {
//     debugger; 
//     }

//     return g;
// }

// let g = f();
// g();



// function Counter() {
//     let count = 0;

//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }

// let counter = new Counter();

//   alert( counter.up() ); // ?
//   alert( counter.up() ); // ?
//   alert( counter.down() ); // ?



// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
//     sayHi();
// }

// sayHi();


// function sum(a) {

//     return function(b) {
//         return a + b
//     }
// }

// alert(sum(1)(5))



// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function(num) {
//         return num >= a && num <= b;
//     }
// }

// function inArray(arr) {
//     return function(num) {
//         return arr.includes(num)
//     }
// }

// alert( arr.filter(inBetween(3, 6)) );

// alert( arr.filter(inArray([1, 2, 10])) );



// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(val) {
//     return (a, b) => a[val] > b[val]
// }

// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete

// users.sort(byField('age'));
// users.forEach(user => alert(user.age));




// function makeArmy() {
//     let shooters = [];

//     for ( let i = 0; i < 10; i++ ) {
//         let shooter = function() {
//             alert( i )
//         };
//         shooters.push(shooter);
//     }


//     return shooters;
// }

// let army = makeArmy();
// let army2 = makeArmy();

// army[0](); 
// army2[5]();
// army2[1]()


function makeArmy() {
    let shooters = [];

    let i = 0;
    while ( i < 10) {
        let j = i;

        let shooter = function() {
            alert( j )
        };
        shooters.push(shooter);

        i++
    }


    return shooters;
}

let army = makeArmy();
let army2 = makeArmy();

army[0](); 
army2[5]();
army2[1]()