"use strict";

// let user = {
//     name: "joe",
//     age: 30,
// };

// let clone = {};

// for ( let key in user ){
//     clone[key] = user[key];
// }

// clone.name = "komi";

// alert(user.name);



// let user = { name: "Joe" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Object.assign(user, permissions1, permissions2);

// for ( let key in user ){
//     alert(user[key])
// }



// let user = { name: "Joe" };

// Object.assign(user, { name: "Pete" });

// alert(user.name)


// let user = {
//     name: "Joe",
//     age: 30,
// };

// let clone = Object.assign({}, user);

// for ( let key in clone ){
//     alert(clone[key])
// }


// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = Object.assign({}, user);

// user.sizes.width++
// alert(user.sizes.width);
// alert(clone.sizes.width);



let user = {
    name: "jo"
};

let clone = structuredClone(user);
clone.surname = "lo";

alert(clone.name)
alert(clone.surname)
