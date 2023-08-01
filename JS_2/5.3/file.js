"use strict";


// let num = 3;

// alert(`три ${num}`)



// let num = `num:
//     -1
//     -2
//     -3
//     -4
//     `;

// alert(num);



// let num = "num: \n-1 \n-2 \n-3 \n-4" 

// alert(num);



// alert('i\'m')

// alert("backslash: \\")


// alert("Lorem, ipsum dolor sit amet consectetur adipisicing elit.".length);


// let str = "Lorem";

// alert( str.at(0) )
// alert( str.at(-1) )


// for ( let char of "Lorem" ){
//     alert(char)
// }



// let str = "HI";

// str = 'h' + str.at(1);

// alert(str)


// alert( "hello".at(0).toUpperCase() );



// let str = "qwerty in lorem in";

// alert( str.indexOf("in", 10) );



// let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";

// let target = "i";

// let pos = 0;

// while (true){
//     let found = str.indexOf(target, pos);
//     if ( found == -1 ) break;

//     alert( `found in ${found}` );
//     pos = found + 1;
    
// }

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1){
//     alert(pos)
// }


// if ( str.indexOf("Lorem" != -1) ){
//     alert("nice")
// }



// if (~str.indexOf("Lorem")) {
//     alert( 'Совпадение есть' ); 
// }



// alert( str.includes("Lorem") );
// alert( str.includes("Lorem", 55) );
// alert( str.includes("fdfdf") );


// alert( str.startsWith("Lorem") );
// alert( str.startsWith("Lodrem") );

// alert( str.endsWith(".") );



// alert( str.slice(0, 5) );
// alert( str.slice(0, 1) );
// alert( str.slice(0, 50) );

// alert( str.slice(5) );
// alert( str.slice(-4, -1) );
// alert( str.slice(-30, -4) );


// alert( str.substring(6, 11) );


// alert( str.substr(0, 5) );
// alert( str.substr(-5, 4) );


// alert("a" > "B");



// let str = "";

// for ( let i = 65; i <= 220; i++) {
//     str += String.fromCharCode(i);
// }

// alert(str)

// let password
// let passwordAgain

// do {
//     password = prompt("pass", '');
    
// } while (password == '');

// do {
//     passwordAgain = prompt("pass again", '');
    
// } while (passwordAgain == '');


// if (password.localeCompare(passwordAgain) != 0) {
//     alert("Пароль несовпадает")
// };
// if (password.localeCompare(passwordAgain) == 0) {
//     alert("Пароль совпадает")
// };



// function ucFirst(str) {
//     if (!str) return str;

//     return( str.toUpperCase().at(0) + str.substr(1) );
// }

// alert( ucFirst("sdsd") )


// function checkSpam(str) {
//     let strLower = str.toLowerCase();

//     return strLower.includes("viagra") || strLower.includes("xxx")
// }

// alert(checkSpam("- XXX -"))



// function truncate(str, maxlength) {
//     if ( str.length >= maxlength ) {
//         alert( str.substr(0, maxlength) + "…" )
//     }
// }

// truncate("sasasasatr", 5)


// function extractCurrencyValue(str) {
//     return parseInt(str);
// }

// alert( extractCurrencyValue("120$") )


function extractCurrencyValue(str) {
    return +str.substr(1);
}

alert( extractCurrencyValue("$120") )