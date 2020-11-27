"use strict";
/* jslint node: true */
/* jshint browser: true */
/*jshint esversion: 6 */

// REST ОПЕРАТОР И ПАРМЕТРЫ ПО УМОЛЧАНИЮ (ES6) УРОК 49

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'plump', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);

// Методы перебора массивов

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)// Метод, делающий из объекта массив
.filter((item) => {
   return item[1] === 'persone'; // Можно либо так функцию записывать, либо так как ниже, если она в одну строку
})
.map(item => item[0]);
console.log(newArr);