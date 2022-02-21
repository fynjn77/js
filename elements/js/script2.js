'use strict';
//действия с элементами на странице

// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName("button")[1];
// console.log(btns);

// const circles = document.getElementsByClassName('circle');
// console.log(circles[2]); 

//css selector
// const hearts = document.querySelectorAll(".heart");
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

const box = document.getElementById('box');
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName('circle');
// const hearts = document.querySelectorAll(".heart"),
// wrapper = document.querySelector('.wrapper');
const wrapper = document.querySelector('.wrapper'),
hearts = wrapper.querySelectorAll(".heart");

// const oneHeart = document.querySelector('.heart');
box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

let myColor = "yellow";
box.style.cssText = `background-color: ${myColor};`;

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'orange';
// }

// работает так же как и for выше
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// #сохраняется только внутри js файла.
const div = document.createElement('div');

// устаревший метод
// const text = document.createTextMode('Тут текст в эллементе/node')

// добавляю класс к диву, который есть только внутри js
div.classList.add('black');
wrapper.append(div);

// добавляю мой тэг в верстку!!!
// добавляю в конец 
    // document.body.append(div);
    // wrapper.append(div);
            //appendChild('устаревшая функция')
    // добавляю в начало
    // wrapper.prepend(div);

// перед эллементом или после (не псевдоэллемент)
    // hearts[1].before(div);
// устаревшая функция//insertBefore(что, передчем);
    // hearts[1].after(div);

//удалить
// circles[0].remove();
            //.removeChild(hearts[1]); устаревшая функция 
//заменить на 
// hearts[1].replaceWith(circles[1]);
// устаревшая функция//wrapper.replaceChild(наЧтоМеняю, чтоМеняю);

//вставить что-то в html. Так можно вставлять и html-конструкцию
div.innerHTML = "<h3>Hello World</h3>";
    // вставляет только текст
    // div.textContent = "he o";

//в зависимости от первого параметра добавит второй парамет 
//перед div
//внутри div
//в конце div
//после
div.insertAdjacentHTML('afterend', '<h5>Hello</h5>');











































