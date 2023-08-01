"use strict";

// let user = {
//     name: "Jo",
//     age: 30,
// };

// user.sayHi = function() {
//     alert("Hello");
// };

// user.sayHi();



// let user = {
//     sayHi() {
//         alert("Hello");
//     },
// };

// user.sayHi();



// let user = {
//     name: "Jo",
//     age: 30,

//     sayHi() {
//         alert(this.age);
//     }
// };
// user.sayHi();




// let user = { name: 'jo' };
// let admin = { name: 'admin' };

// function sayHi() {
//     alert( this.name );
// }

// user.say = sayHi;
// admin.say = sayHi;

// user.say();
// admin.say();


// let user = {
//     firstName: "blabla",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };

// user.sayHi(); 

// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
//   }

//   let user = makeUser();

//   alert( user.ref().name ); // John





// let calculator = {
//     read() {
//         this.firstCalc = +prompt("Первое число", '0');
//         this.secondCalc = +prompt("Второе число", '0');
//     },

//     sum() {
//         return this.firstCalc + this.secondCalc;
//     },

//     mul() {
//         return  this.firstCalc * this.secondCalc;
//     }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); 