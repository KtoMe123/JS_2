"use strict";


// function sayHi() {
//     alert('hi')
// }

// setTimeout(sayHi, 1000)


// function sayHi(what, who) {
//     alert(what + ', ' + who);
// }

// setTimeout(sayHi, 1000, "hi", "Peter")


// setTimeout("alert('hello')", 1000);

// setTimeout(() => alert("hello"), 1000)


// let timer = setTimeout(() => alert('hello'), 1000);
// alert(timer);

// clearTimeout(timer);
// alert(timer)



// let timer = setInterval(() => alert("bom"), 1000)

// setTimeout(() => {clearInterval(timer); alert("stop")}, 5000)



// let timer = setTimeout(function tick() {
//     alert("tick");
//     timer = setTimeout(tick, 2000);
// }, 2000)



// let i = 1;
// setInterval(function() {
//     alert(i);
//     i++;
// }, 100)


// let i = 1
// setTimeout(function run() {
//     alert(i);
//     i++;
//     setTimeout(run, 100);
// }, 100)



// setTimeout(() => alert("hi"));

// alert("hello")


// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//     times.push(Date.now() - start);

//     if (start + 100 < Date.now()) alert(times);
//     else setTimeout(run);
// });



// function printNumbers(from, to) {

    // let timer = setInterval(function () {
    //     alert(from);

    //     if ( from >= to ) {
    //         clearInterval(timer) 
    //     }

    //     from++;       
    // }, 1000);

//     setTimeout(function run() {
        
//         alert(from)

//         if ( from < to ) {
//             setTimeout(run, 1000)
//         }

//         from++;
//     }, 100)
// }

// printNumbers(1, 10)


// let i = 0;

// setTimeout(() => alert(i), 100); 


// for(let j = 0; j < 100000000; j++) {
//     i++;
// }



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };


let arr = [ vasya, petya, masha ];


function getAverageAge(users) {
    let sum = 0;

    users.map(name => {
        sum += name.age; 
    })    

    return sum / (users.length)
}


alert( getAverageAge(arr) );