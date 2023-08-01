"use strict";

// let billion = 1e9;
// let num = 1.23e6;
// let num2 = 123e-6;

// alert(num2)


// alert(0xff)
// alert(0b11111111)
// alert(0o377)


// let num = 255;

// alert( num.toString(8) );
// alert( num.toString(2) );
// alert( num.toString(16) );


// alert( 999..toString(2) );




// let num = 1.23456;

// alert( Math.floor(num * 100) / 100 );



// let num = 1.2345;

// alert( num.toFixed(3) );


// let sum = 0.1 + 0.2;
// let num = 0.3;

// alert(sum == num)


// alert( parseInt('100px') );
// alert( parseFloat('12.5px') );




// alert( Math.random() );

// alert( Math.max(3, 5, 10, -1) );
// alert( Math.min(3, 5, 10, -1) );

// alert( Math.pow(2, 10) );



// let num1 = +prompt("Num1?", '0');
// let num2 = +prompt("Num2?", '0');

// alert( num1 + num2 )


// alert( 1.35.toFixed(1) );
// alert( Math.round(6.35 * 10) / 10 );



// function readNumber() {
//     let num;

//     do {
//         num = prompt("Number?", '0');
//     } while ( !isFinite(num));
    

//     if (num === null || num === '') return null;

//     return +num;

// }

// alert(readNumber());




// let i = 0;
// while (i < 10) {
//   i += 0.2;
//   alert(i)
// }



// function random(min, max) {

//     return min + Math.random() * (max - min);
// }

// alert( random(1, 10) );


function random(min, max) {

    let rand = min + Math.random() * (max - min);

    return rand.toFixed(0);
}

alert( random(1, 10) );

