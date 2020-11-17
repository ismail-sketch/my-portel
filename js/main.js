"use strict";

// КОНТЕКСТ ВЫЗОВА ФУНКЦИЙ УРОК 46

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     dum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.dum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
//     let ivan = new User('Ivan', 28);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); // Метод присвоение контекста для функции
// sayName.apply(user, ['Smith']); // Метод присвоение контекста для функции

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция: this = window, но если стоит use strict, то будет undefined 
// 2) Констекстом у методов объекта будет сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind
// 5) У стрелочной функции нет своего контекста, и она ссылается на родителя

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//    this.style.backgroundColor = 'green';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2; // Если тело стрелочной функции помещается в одну строку, то она может быть записана таким образом

// console.log(double(4));

// =============================================================================

// КЛАССЫ ES6 47 УРОК 

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcAreal() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text  = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcAreal());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcAreal());
// console.log(long.calcAreal());