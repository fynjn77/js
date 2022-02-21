"use strict";

// передача по ссылке или по значению
let a = 5,
    b = a;

b = b + 5;

// console.log(b);

const obj = {
    a: 5,
    b: 1,
};
// const copy = obj; 
// console.log(copy);
// copy.b = 10; 
// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c:{
        x:7,
        y: 4,
    }
};

// const newNumbers = copy(numbers);
// numbers.a = 13; 
// newNumbers.c.x = 18;
// console.log(newNumbers);
// console.log(numbers);
 
const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers));
const clone = Object.assign({}, add);
clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[3] = 'test';
// console.log(oldArr);
// console.log(newArr);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'live journal', 'blogger'],
//    применяю spread оператор
    internet = [...video, ...blogs, 'vk'];
// console.log(internet);

function loog(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const numm = [2, 5, 7];

loog(...numm);

const array = ['a', 'b'];
const newAarray = [...array];
const q = {
    one: 1,
    two: 2,
};
const newObject = {...q};
console.log(newObject);