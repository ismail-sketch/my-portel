"use strict";

// Параметры документа, окна и работа с ними

const wrp = document.querySelector('.wrp'),
      btn = document.querySelector('.btn');

const width = wrp.clientWidth;
const height = wrp.clientHeight;
const cross = document.querySelector('.cross');

//console.log(width, height);



  
        btn.addEventListener('click', () => {
        wrp.style.height = wrp.scrollHeight + 'px';
        cross.classList.add('block');
    });

    cross.addEventListener('click', () => {
        wrp.style.height = '';
        cross.classList.remove('block');
    });
//console.log(wrp.getBoundingClientRect().top);
//console.log(wrp.scrollTop);

//=======================================================================

//  ФУНКЦИИ-КОНСТРУКТОРЫ УРОК 45

// Пример функции-конструктора, с помощью которой можно создавать новых пользователей: 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Привет ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
};



const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);