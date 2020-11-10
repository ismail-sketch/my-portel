"use strict";

// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt ('Сколько фильмов вы уже просмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt ('Сколько фильмов вы уже просмотрели?', '');
//     }
// }
// start ();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }; //console.log(personalMovieDB);



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов', ''),
//               b = prompt('На сколько оцените его?', '');
              
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
        
//         }else {
//             i--;
//             console.log('eror');
//         } 
//     }
// }//rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено мало фильмов');
//     }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');     
//     }else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     }else {
//         console.log('Произошла обшика!');
//     }
// }
// //detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log (personalMovieDB);
//     }
// }
// showMyDB (personalMovieDB.privat);

// function writeYourGeners() {
//     for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// } writeYourGeners();


//Урок 22 (основы js: Передача по ссылке или по значению

let a = 5,
    b = a;

    b = b+5;

    console.log(b);
    console.log(a);

    const obj = {
        a: 5,
        b: 1
    };

    //const copy = obj;// Здесь не делается копия obj, а передается именно ссылка на него

    // copy.a = 10;  
    
    // console.log(copy);
    // console.log(obj);

    //Как получить копию объекта (испольование цикла):

    function copy(mainObj) {
        let objectCopy = {};

        let key;
        for (key in mainObj) {
            objectCopy[key] = mainObj[key];
        }
        
        return objectCopy;
    }

    const numbers = {
        a: 2,
        b: 5,
        c: {
            x: 7,
            y: 4
        }
    };

    const newNumbers = copy(numbers);

    newNumbers.a = 10;

    console.log(newNumbers);
    console.log(numbers);







//===============================================================================

// const options = {
//     name: 'run',
//     plase: 'full',
//     dream: 'bomb',
//     start: 'fluck'
// }
// console.log(Object.keys(options).length);