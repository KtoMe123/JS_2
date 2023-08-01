"use strict";


// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };

// let json = JSON.stringify(student);

// alert(json)



// alert( JSON.stringify(1) );

// alert( JSON.stringify('text') );

// alert( JSON.stringify(true) );

// alert( JSON.stringify([1, 2, 3]) );



// let user = {
//     sayHi() {
//         alert("hello");
//     },
//     [Symbol("id")]: 22,
//     test: undefined
// };

// alert( JSON.stringify(user) );



// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["john", "ann"]
//     }
// };

// alert( JSON.stringify(meetup) );



// let room = {
//     number: 22,
// };


// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room,
//     test: 'dd'
// };


// room.qwerty = meetup;

// alert( JSON.stringify(meetup, ["title", "participants", "name", "place", "number"]) );

// alert( JSON.stringify(meetup, function replacer( key, value) {
//     alert(`${key}: ${value}`);
//     return ( key == 'qwerty') ? undefined : value;
// }));


// let user = {
//     name: "Josh",
//     age: 25,
//     roles: {
//         isAdmin: false,
//         isEditor: true,
//     }
// };

// alert( JSON.stringify(user, null, 2) );


// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// };

// let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room
// };

// alert(JSON.stringify(room))

// alert( JSON.stringify(meetup, null, 2))



// let numbers = "[1, 2, 3]"

// numbers = JSON.parse(numbers);

// alert(numbers[0])

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);
// alert(user.age)


// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//     if ( key == "date" ) return new Date(value);
//     return value;
// });

// alert( meetup.date.getDate())


// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let json = JSON.stringify(user, null, 2);
// alert(json)

// json = JSON.parse(json)
// alert(json)



// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };


// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != '' && value === meetup) ? undefined : value;
// }));


