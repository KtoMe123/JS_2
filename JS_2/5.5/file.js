"use strict";


// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(0, 1); 

// alert( arr );

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.splice(3, 2, "ясно", "понятно")

// alert(arr)


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// let rem = arr.splice(0, 2);

// arr.splice(2, 0, "этот");
// alert(arr)

// alert(rem)


// let arr = [1, 2, 3];

// arr.splice(-1, 1, 3, 4, 5)
// alert(arr)


// let arr = [1, 2, 3, 4];

// alert( arr.slice(1, 3) );
// alert( arr.slice(-2) );

// alert( arr.concat([5, 6], 7, 8) );

// let array = {
//     0: 'jo',
//     1: 30,
//     [Symbol.isConcatSpreadable]: true,
//     length: 2,
// }

// alert( arr.concat(array) );


// [1, 2, 3, 4].forEach((item, index, array) => {
//     alert(`У ${item} индекс ${index} в ${array}`);
// });


// let arr = ["gg", 1, 2, 3, 4, "gg"];

// alert(arr.indexOf("gg"))
// alert(arr.lastIndexOf("gg"))
// alert(arr.includes("gg"))

// let users = [
//     { id: 1, name: "jo" },
//     { id: 2, name: "loky" },
//     { id: 3, name: "tor" },
//     { id: 4, name: "odin" },
//     { id: 5, name: "loky" },
// ];


// let user = users.find(item => item.id == 3);

// alert(user.name)

// alert(users.findIndex( item => item.name == "loky" ));
// alert(users.findLastIndex( item => item.name == "loky" ));

// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.at(1).name)


// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => alert(item.length));



// function campareNum(a, b) {
//     if ( a > b ) return 1;
//     if ( a == b ) return 0;
//     if ( a < b ) return -1;
// }
// let arr = [1, 2, 15];

// arr.sort(campareNum);
// alert(arr)


// [1, 2, -3, 20, 0, 1, 3].sort(function(a, b) {
//     alert( a + " <> " + b);
//     return a - b;
// });


// let arr = [ 1, 20, 15, -2 ];

// arr.sort(function(a, b) { return a - b; });

// alert(arr); 


// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert(countries.sort(function(a, b) {
//     return a.localeCompare(b)
// }))

// alert(countries.reverse())


// let names = "Вася, Петя, Маша";

// let arr = names.split(', ');

// for (let key of arr) {
//     alert( `Message for ${key}` );
// }



// let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);

// alert(arr);



// let arr = ['Вася', 'Петя', 'Маша'];

// let str = arr.join(" ");
// alert(str)



// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(Array.isArray(arr));




// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };

// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
// ];


// let soldiers = users.filter(army.canJoin, army);

// alert(soldiers.length)

// let a = [4, 5, 6, 7, 8, 9]

// let c = [
//     {name: 'jo', age: 23},
//     {name: 'jo', age: 1},
//     {name: 'jo', age: 23},
// ]
    


// let b = c.every(item => {
//     return true

// });

// alert(b)




// function camelize(str) {
//     return str
//     .split('-') 
//     .map( (word, index) => {
//         if (index == 0) { 
//             return word
//         } else { 
//             return word[0].toUpperCase() + word.substr(1)
//         } 
//     })
//     .join('');
// }
// alert(camelize("list-style-image"))





// let arrat = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     return arr.filter(item => {
//         if ( a <= item && item <= b ) {
//             return item;
//         } else {
//             return false
//         } })
    
// }

// let filtered = filterRange(arrat, 1, 4);

// alert( filtered );

// alert( arrat );




// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
    
//     for ( let i = 0; i < arr.length; i++) {
//         let arrValue = arr[i];

//         if ( arrValue < a || arrValue > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
    
// }

// filterRangeInPlace(arr, 1, 4); 

// alert( arr );



// let arr = [5, 2, 1, -10, 8];

// arr.sort( function(a, b) { return b - a } )

// alert(arr)





// let arr = ["HTML", "JavaScript", "CSS"];


// function copySorted(arr) {
//     return arr.concat().sort();
    
// }

// let sorted = copySorted(arr);

// alert( sorted ); 
// alert( arr );




// function Calculator() {

//     this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     }
    
//     this.calculate = function(str) {
    
//     let arr = str.split(' ');
//     return this.methods[arr[1]](+arr[0], +arr[2]);
    
//     }
    
//     this.addMethod = function(name, func) {
//     this.methods[name] = func;
//     }
    
//     }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") );




// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)

// alert( names ); 



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };


// let users = [ vasya, petya, masha ];


// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id:user.id,
// }))


// alert( usersMapped[1].id ) 
// alert( usersMapped[1].fullName )


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(users) {
//     arr.sort((a, b) => {
//         if (a.age > b.age) {
//             return 1;
//         } else {
//             return -1;
//         }
//     })
// }

// sortByAge(arr);

// alert(arr[0].name); 
// alert(arr[1].name); 
// alert(arr[2].name);




// let arr = [1, 2, 3];



// function shuffle(array) {
//     arr.sort(() => Math.random() - 0.5);
// }

// shuffle(arr);
// alert(arr);





// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };


// let arr = [ vasya, petya, masha ];


// function getAverageAge(users) {
//     let sum = 0;

//     users.map(name => {
//         sum += name.age; 
//     })    

//     return sum / (users.length)
// }


// alert( getAverageAge(arr) );





// function unique(arr) {
//     let newArr = [];

//         arr.map(item => {
//             if (!newArr.includes(item)) {
//                 newArr.push(item)
//             } 
//         });

//     return newArr;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); 





// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];


// function groupById(arr){
//     let obj={}
//     arr.forEach(function(item){
//         obj[item.id]=item
//     })  
//     return obj
// }

// let usersById = groupById(users) 


