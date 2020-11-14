"use strict";




const btns = document.querySelectorAll('button'), //Псевдомассив 
	  wrp = document.querySelector('.title');


 
 // Урок 37 classList и делегирование событий

 
 btns[0].addEventListener('click', () => {
	// if (!btns[1].classList.contains('red')) {
	// 	btns[1].classList.add('red');
	// }else {
	// 	btns[1].classList.remove('red');
	// }
	btns[1].classList.toggle('red');
 });
 
 wrp.addEventListener('click', (e) => {
	if (e.target && e.target.tagName == 'BUTTON') {
		console.log('Hello');
	}

 });

 const btn = document.createElement('button');
 btn.classList.add('ellow');
 wrp.append(btn);

