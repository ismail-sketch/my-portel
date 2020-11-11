"use strict";



const titleHero = document.querySelector('.title');
let btns = document.querySelectorAll('button'); //Псевдомассив 
const wrapperDiv = document.querySelector('.wrapper')

console.log(btns);

// titleHero.style.backgroundColor = 'blue';

btns[1].style.borderRadius = '100%';

titleHero.style.cssText = 'background-color: blue; width: 700px; margin: 0 auto';

// for (let i = 0; i < btns.length; i++) {
//     btns[i].style.backgroundColor = 'red';
// }


//Работа со всеми элементами полученного псевдомассива:
btns.forEach(item => {
    item.style.backgroundColor = 'red';
});

//Основные методы для работы с элементами страницы:

const div = document.createElement('div'); //Создание элемента (в данном случае div) 
//const text = document.createTextNode('Сюда помещается текст, который необходим');  //Создание текстового узла (элемента без оболочки тега)

div.classList.add('title'); //Свойство classList в котором мы через точку можем писать действия с нашим классом
//document.body.append(div);//Добавление div, созданного в JS на страницу в конец body 

//wrapperDiv.append(div);//Добавление div, созданного в JS, на страницу в КОНЦЕ какого-либо элемента
wrapperDiv.prepend(div); //Добавление div, созданного, в JS на страницу в НАЧАЛЕ какого-либо элемента

//btns[1].remove(); //Удаление элемента

//Метод replaceWith используется для замены одного элемента на другой
div.innerHTML = '<h2>Привет, Геша</h2>'; //Добавление текста в элемент и вообще HTML элементы 
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); //Вставление HTML кусков в элементы