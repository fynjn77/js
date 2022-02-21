// const btns = document.querySelectorAll('button'),
//         overlay = document.querySelector('.overlay');


// // btn.onclick = function(){
// //     alert('функция сработала');
// // };
// // btn.onclick = function(){
// //     alert('2 функция сработала');
// // };
// // последний обработчик перебьёт первый

// // btn.addEventListener('click', () =>{
// //     alert('click by eventListener');
// // } );
// let i = 0;
// const deleteElement = (e) =>{
//     // console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.type);
//     // i++;
//     // if (i == 2){
//     //  btns.forEach( btnDel =>{
//     //     btnDel.removeEventListener('click', deleteElement);
//     //     // btnDel.remove();
//     // });   
//     // }
// };

// btns.forEach(btn=>{
//     btn.addEventListener('click', deleteElement);
// });


// btns.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement);
//     // btn.addEventListener('click', (e) =>{
//     // e.target.remove();  
//     // console.log('Hover');
//     // console.log(e.type);
//     // console.log(e.target);  
     
// const link = document.querySelector('a');
// console.log(link);
// link.addEventListener('click', function(myEvent){
//     myEvent.preventDefault();
//     console.log(myEvent.target); 
// });

