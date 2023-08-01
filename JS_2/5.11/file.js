"use strict";


// let now = new Date();
// alert( now );


// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// let Jan01_1970 = new Date(24 * 3600 * 1000);
// alert(Jan01_1970)

// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// alert( Dec31_1969 );

// let date = new Date("2017-01-26")
// alert(date)


// let date = new Date(2011, 0, 1, 2, 22, 30, 200)
// alert(date)


// let date = new Date();

// alert( date.getHours() );
// alert( date.getFullYear() );
// alert( date.getDate() );

// alert( date.getUTCHours() );
// alert( date.getUTCFullYear() );
// alert( date.getUTCDate() );



// let date = new Date().getTimezoneOffset();
// alert(date)



// let today = new Date();

// today.setHours(0, 0, 0, 0);
// today.setHours(0);
// alert(today)



// let date = new Date(2013, 0, 33);
// alert(date)

// let date = new Date(2016, 1, 28);

// date.setDate(date.getDate() + 2);
// date.setSeconds(date.getSeconds() + 70);

// alert(date)


// let date = new Date(2016, 0, 2);

// date.setDate(1);
// alert(date);

// date.setDate(0);
// alert(date)


// let date = new Date();
// alert(+date);


// let start = Date.now();

// let doSomething

// for ( let i = 0; i < 100000; i++ ) {
//     doSomething = i * i * i* i * i* i * i* i * i* i * i* i * i* i * i* i * i* i * i* i * i* i * i* i * i* i * i* i * i;
// }

// let end = Date.now();

// alert(`Цикл отработал за ${end - start} миллисекунд`)
// alert(doSomething)


// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// bench(diffSubtract);
// bench(diffGetTime);

// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
// }

// alert( 'Итоговое время diffSubtract: ' + time1 );
// alert( 'Итоговое время diffGetTime: ' + time2 );



// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

// alert(date)


// alert(`Загрузка началась ${performance.now()} mc назад`);


// let date = new Date(2012, 1, 20, 3, 12);
// alert(date)


// let date = new Date(2012, 0, 3); 

// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days[date.getDay()];
// }

// alert( getWeekDay(date) )


// let date = new Date(2012, 0, 3); 

// function getLocalDay(date) {
//     let day = date.getDay();

//     if ( day == 0 ) {
//         day = 7;
//     }
//     return day;
// }

// alert(getLocalDay(date))



// let date = new Date();
// alert(date - 377)

// function getDateAgo(date, days) {

// }


// let date = new Date(2015, 0, 2);


// function getDateAgo(date, days) {
//     let dateCopy = new Date(date)
//     dateCopy.setDate(date.getDate() - days);
    
//     return dateCopy.getDate()
// }

// alert( getDateAgo(date, 1) ); 
// alert( getDateAgo(date, 2) ); 
// alert( getDateAgo(date, 365) );


// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1) 
//     date.setDate(0);
//     return date.getDate()

// }

// alert( getLastDayOfMonth(2012, 0) );
// alert( getLastDayOfMonth(2012, 1) );
// alert( getLastDayOfMonth(2013, 1) );





// function getSecondsToday()  {
    
//     let date = new Date();
    
//     let today = new Date( date.getFullYear(), date.getMonth(), date.getDate() );

//     let dif = date - today;
//     return (dif / 1000).toFixed();

// }

// alert(getSecondsToday())



// function getSecondsToTomorrow()  {
    
//     let now = new Date();
//     let dateTomorrow = new Date( now.getFullYear(), now.getMonth(), now.getDate()+1)
    
//     let dif = dateTomorrow - now;
//     return (dif / 1000).toFixed();
// }

// alert( getSecondsToTomorrow() )



function formatDate(date) {
    let dif = new Date() - date;

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
        ].map(component => component.slice(-2)); 


    if ( dif <= 1000 ) {
        return 'прямо сейчас';
    } else if ( dif <= 60000 ) {
        return `${(dif / 1000).toFixed()} сек. назад`
    } else if ( dif <= 6000000 ) {
        return `${(dif / 60000).toFixed()} мин. назад`
    } else {
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
}

alert( formatDate(new Date(new Date - 1)) ); 

alert( formatDate(new Date(new Date - 30 * 1000)) ); 

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 


alert( formatDate(new Date(new Date - 86400 * 1000)) );