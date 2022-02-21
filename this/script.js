"use strict";

// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
//  showThis(4, 2);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function (){
//         console.log(this);
//     } 
// };
// obj.sum();

// function sayName(surname){
//     console.log(this);
//     console.log(this.name);
// }
// const user = {
//     name: "Toha",
// };
// sayName.call(user, 'mySurname');
// sayName.apply(user, ['mySurname']);
// function count (num){
//     return this * num;
// }

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    // console.log(this);
    this.style.background = "red";
});

const obj = {
    num: 5,
    sayName: function(){
        const say = () =>{
            console.log(this);
        };
        say();
    }
 };