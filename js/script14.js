"use strict";

// Объекты и деструктуризация объектов
// const obj = new Object(); можно, но так не делаеют
const options = {
    name: 'Jack',
    width: 112,
    height: 112,
    colors: {border: 'yellow', 
            bg: 'orange', },
    makeTest: function(){
        console.log("Tests");
    }

};

// console.log(options.colors.br);
// console.log(options);
// delete options.name;
// console.log(options);

// let counter = 0
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Объект ${key} имеет значение ${options[key][i]}`);            
            
//         }counter++;
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);
// options.makeTest();

// деструктуризация
const {border, bg} = options.colors;
console.log(bg);






