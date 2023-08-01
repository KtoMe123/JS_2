"use strict";



// let arr = ["apple", "orange", "potato"];

// arr[2] = "tomato"; 

// alert(arr.length);

// let arr = [ "apple", { name: "Jo" }, true, function() { alert("hi"); } ];

// alert(arr[1].name)

// arr[3]();

// alert(arr.at(-1))


// let arr = ["apple", "orange", "potato"];

// alert( arr.pop() );
// alert( arr );

// arr.push("Jo")

// alert( arr );

// alert( arr.shift() );
// alert( arr );

// arr.unshift("Jo")
// alert( arr );



// let fruits = ["e"];

// fruits.push("r", "t");
// fruits.unshift("q", "w");

// alert(fruits)


// let arr = ["banana"];

// let fruits = arr;

// alert(arr === fruits)


// fruits.push("apple");
// alert(arr)



// let arr = [];

// arr[12345] = 5;

// arr.age = 20;

// alert(arr)



// let arr = ["apple", "orange", "potato"];

// for (let fruits of arr){
//     alert(fruits)
// }


// let arr = [];

// arr[5] = "qwerty";

// alert( arr.length );



// let arr = [1, 2, 3, 4, 5, 6];

// arr.length = 2;
// alert( arr )

// arr.length = 6;
// alert( arr[3] )



// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// alert( matrix[0][2] )



// alert( [1, 2] + 1)


// alert( [1] == "1" );
// alert( [] == [] );


// let style = ["Джаз", "Блюз"]; 
// alert(style)

// style.push("Рок-н-ролл");
// alert(style)
// alert(style.length)
// style[Math.floor((style.length - 1) / 2 )] = "Классика";
// alert(style)

// style.shift();
// alert(style)

// style.unshift("Рэп", "Регги");
// alert(style)



// function sumInput() {
//     let num;
//     let arr = []
//     let sum = 0;

//     while (true) {
//         num  = prompt("num", 0);
    
//         if (num === "" || num === null || !isFinite(num)) break;
    
//         arr.push(+num);
//     }

//     for (let number of arr) {
//         sum += number;

//     }
//     return sum;
// }

// alert(sumInput())



// function getMaxSubSum(arr) {
//     let arrSums = [];
//     let sum = 0;
//     for (let item of arr) {
//         if (item > 0) {
//         sum += +item;
//     } else {
//         arrSums.push(sum);
//         sum = 0;
//     }
//     }
//     for (let item of arrSums) {
//         if (item > sum) sum = item ;
//     }
//     alert(sum);
//     }

// getMaxSubSum([100, 2, 3, -3, -4, 300])