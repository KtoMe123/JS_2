"use strict";


// let arr = ["Ilya", "Kantor"];

// let [firstName, surName] = arr;

// alert(firstName)
// alert(surName)


// let [firstName, surName] = "Ilya Kantor".split(' ');

// alert(firstName)
// alert(surName)


// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title );
// alert(firstName)



// let user = {};

// [user.name, user.surname] = "Ilya Kantor".split(' ');

// alert(user.name); 
// alert(user.surname); 


// let user = {
//     name: "John",
//     age: 30
// };

// for (let [item, value] of Object.entries(user) ) {
//     alert( `${item}:${value}`);
// }




// let user = "jo";
// let admin = "pete";

// [user, admin] = [admin, user];

// alert(admin)
// alert(user)



// let [name1, name2, ...rest] = ["jo", "pete", 'cooky', 'loky'];


// alert(rest[0]); 
// alert(rest[1]); 
// alert(rest.length);


// let [name1 = 'noname', name2 = 'noname2', ...rest] = [];

// alert(name1)
// alert(name2)


// let [name1 = prompt("name?", ''), name2, ...rest] = [, "toto"];

// alert(name1)
// alert(name2)


// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let {title, width, height} = options;


// et {height, width, title} = { title: "Menu", height: 200, width: 100 }

// alert(title); 
// alert(width);  
// alert(height);

// let {height: h, width: w, title: t} = { title: "Menu", height: 200, width: 100 }

// alert(t); 
// alert(w);  
// alert(h);



// let option = {
//     title: "Menu"
// };

// let {height = 200, width = 100, title} = option;
// let {height: h = 200, width: w = 100, title} = option;

// alert(title); 
// alert(w);  
// alert(h);



// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let {title, ...rest} = options;

// alert(title)
// alert(rest.height)

// let title, width, height;

// ({title, width, height} = {title: "menu", width: 100, height: 200})



// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };


// let {
//     size: {
//         width,
//         height,
//     },
//     items: [item1, item2],
//     title = "RE"
// } = options

// alert(item1)
// alert(width)




// let options = {
//     title: "My menu",
//     items: ['item1', 'item2'],
// };

// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     alert( `${title} ${width} ${height}` );
//     alert(items)
// }

// function showMenu({
//     title = "Untitles",
//     width: w = 200,
//     height: h = 100,
//     items: [item1, item2],
// }) {
//     alert( `${title} ${w} ${h}` ); 
//     alert( item1 ); 
//     alert( item2 ); 
// }

// showMenu(options);
// showMenu({});




// function showMenu({ title = "Menu", width = 200, height = 100 } = {}) {
//     alert(`${title} ${width} ${height}`)
// }

// showMenu()




// let user = {
//     name: "John",
//     years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert(name)
// alert(age)
// alert(isAdmin)


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {
//     let max = 0;
//     let maxName = 0;

//     for ( let [name, value] of Object.entries(salaries) ) {
//         if ( value > max ) {
//             max = value;
//             maxName = name;
//         }
//     }
//     return(maxName)
// }

// alert(topSalary(salaries))


// let users = [
//     {name: "jo", isAdmin: true},
//     {name: "Pete", isAdmin: false},
//     {name: "Loky", isAdmin: true},
//     {name: "Oscar", isAdmin: false},
// ]



// function adminCheck(users) {
//     for ( let [index] of Object.entries(users) ) {

//         if ( users[index].isAdmin === true ) {
//             alert(`is admin: ${users[index].name}`)
//         }
//     }
// }

// adminCheck(users)