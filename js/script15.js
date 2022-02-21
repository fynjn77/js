"use strict";

const arr = [1,222, 2, 3,10, 22,4, 5,6,];

arr.sort(compareNum);
console.log(arr);
function compareNum(a, b){
    return a-b;
}

// arr.pop(); // убрать последнее значение в arr
// arr.push(11); //добавить 11 в конце arr
// console.log(arr);

// for (let i =0; i < arr.length;i++){
//     console.log(arr[i]);
// }

// for (let value of ar r){
//     console.log(value);
// }

// arr.forEach(function(item,i,arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const product = str.split(' ');
// product.sort(); 
// console.log(product.join('='));//Добавляю какой-то симовол 
                            //между эллементами массива и 
                            //вывожу как строку.

                             