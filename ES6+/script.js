// classList
const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')){
//     console.log('red');
// }

// btns[0].addEventListener('click', () =>{
//     // if (!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // } else{
//     //     btns[1].classList.remove('red');
//     // }
//     btns[1].classList.toggle('red');
// } );

// устарело. Выводит все классы одной строкой
// console.log(typeof(btns[0].className));
// console.log(btns[0].className);

// Делегирование событий
const wrapperr = document.querySelector('.btn-block');
wrapperr.addEventListener('click', (event) =>{
    // console.dir(event.target);
    // if (event.target && event.target.tagName== "BUTTON"){
    if (event.target && event.target.matches("button.blue")){
        console.log('lala');
        event.target.classList.add('red');
    }
});
// добавля ещё один эллемент после делегирования
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapperr.append(btn);

// без делегирования
// const wrapperr = document.querySelector('.btn-block');
// btns.forEach(btn =>{
//     btn.addEventListener('click', () =>{
//         console.log('hello');
//     });
// });
// // добавля ещё один эллемент после перебора
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapperr.append(btn);