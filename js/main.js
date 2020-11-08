// "use strict";

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
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// } writeYourGeners();

const options = {
    name: 'run',
    plase: 'full',
    dream: 'bomb',
    start: 'fluck'
}
console.log(Object.keys(options).length);