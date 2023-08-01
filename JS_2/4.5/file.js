"use strict";

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jackp");

// alert(user.name);
// alert(user.isAdmin);



// function User() {
//     alert(new.target);
// }

// User();

// new User();



// function User(name) {
//     if (!new.target) {
//         return new User(name);
//     }
//     this.name = name;
// }

// let john = User("John");
// alert(john.name);


// function BigUser() {
//     this.name = "John";

//     return { name: "Godzilla" };
// }

// alert( new BigUser().name );


// function SmallUser() {
//     this.name = "John";

//     return;
// }

// alert( new SmallUser().name );



// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         alert( "My name: " + this.name );
//     };
// }

// let jo = new  User("Jo");

// jo.sayHi();




// function Calculator() {

//     this.read = function() {
//         this.num1 = +prompt("num 1", '0');
//         this.num2 = +prompt("num 2", '0');
//     };

//     this.sum = function() {
//         return this.num1 + this.num2;
//     };

//     this.mul = function() {
//         return this.num1 * this.num2;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );




// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt("Number?", '');
//     };
// }

// let accumulator = new Accumulator(5);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

