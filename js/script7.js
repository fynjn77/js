"use strict";

// тернаный оператор ?
//  (5 < 11) ? console.log("value is true") : console.log("value is false");

//  бинарные операторы. К примеру
// 4 + 4 ;

// унарные операторы
// -4;

let myNum = 30;
switch (myNum){
    case 1: 
        console.log('myNum == 1');
        break;
    case myNum > 5:
        console.log('will not work');
        break;
    default:
        console.log('sooo 30');
}
