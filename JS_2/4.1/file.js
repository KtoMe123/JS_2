"use strict";


// let user = {
//     name: "John",
//     age: 30
// }

// user.isAdmin = true;
// delete user.age;

// alert(user.name)
// alert(user.age)


// let user = {
//     name: "John",
//     age: 30,
//     "like birds": true,
// }




// const user = {
//     name: "John",
//     age: 30,
// }

// user.name = "Niko";
// alert(user.name);



// let user = {}

// user["like birds"] = false;
// alert(user["like birds"])

// let key = "like birds";

// delete user[key];

// alert(user[key])

// let user = {
//     name: "John",
//     age: 30,
// }

// let key = prompt("?", 'name/age');

// alert(user[key]);


// let fruit = prompt("Какой фрукт купить?", 'apple');

// let bag = {
//     [fruit]: 5,
// }

// alert( bag.apple );


// let bag = {};

// bag[fruit] = 5;
// alert(bag[fruit])



// let fruit = 'apple';

// let bag = {
//     [fruit + 'Fresh']: 5,
// }

// alert(bag)




// function makeUser(name, age){
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser("Loky", 30);
// alert(user.name);



// let obj = {};
// obj.__proto__ = 5;
// alert(obj.__proto__);



// let user = {};

// alert( user.age === undefined );



// let user = {
//     name: "Loky",
//     age: 30,
// }

// alert( "age" in user );
// alert( "no" in user );



// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,

// };

// for (let key in user){
//     //alert(key);

//     alert( user[key] );
// }




// let codes = {
//     // "49": "Germany",
//     // "41": "Switzerland",
//     // "44": "Great Britain",
//     // "1": "USA",
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA",
// };

// for (let code in codes) {
//     alert( +code );
// }


// let user = {
//     name: "John",
// }
// alert(user.name)

// user.surname = "Smith";

// user.name = "Pete";
// alert(user.name)

// delete user.name;
// alert(user.name)





// function isEmpty(obj){
//     for (let key in obj){
//         return false;

//     }
//     return true;
// }

// let schedule = {};

// alert( isEmpty(schedule) ); 

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); 



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0

// for ( let key in salaries){

//     sum += salaries[key]
    
// }
// alert(sum)




// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for ( let key in obj ){
//         if ( Number(obj[key]) ){
//             obj[key] *= 2;
//             alert(obj[key])
//         }

//     }
// }
// multiplyNumeric(menu);



