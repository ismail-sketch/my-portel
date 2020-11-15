"use strict";

// setTimeout и setInterval 39 урок 

let timerId,
	i = 0;
	
	function myAnimation() {
		const elem = document.querySelector('.square');
		let pos = 0;

		const id = setInterval(frame, 10);
		function frame() {
			if (pos == 400) {
				clearInterval(id);
			}else {
				pos++;
				elem.style.top = pos + 'px';
				elem.style.left = pos + 'px';
			}
		} 
	}

const btn = document.querySelector('.button_1');

btn.addEventListener('click', myAnimation);

 

 

// function logger () {
// 	if (i === 3) {
// 		clearInterval(timerId);
// 	}
// 	console.log('text');
// 	i++;
// }

// let id = setTimeout(function log(){
// 	console.log('Hello');
// 	id = setTimeout(log, 500);
// }, 500);

// РАБОТА С ДАТАМИ УРОК 40

const now = new Date();

//Получение дат

// console.log(now.getFullYear());
// console.log(now.getMonth());
 //console.log(now.getDate(1605434429845));
// console.log(now.getHours());
// console.log(now.getUTCHours());
//console.log(now.getTime());

// Методы установки дат

console.log(now.setHours(18));
console.log(now);




