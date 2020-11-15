"use strict";

// Параметры документа, окна и работа с ними

const wrp = document.querySelector('.wrp'),
      btn = document.querySelector('.btn');

const width = wrp.clientWidth;
const height = wrp.clientHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    //wrp.style.height = wrp.scrollHeight + 'px';
    console.log(wrp.scrollTop);
});

console.log(wrp.getBoundingClientRect().top);

