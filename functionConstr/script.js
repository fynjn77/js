"use strict";

// const num = new Number(3);
// console.log(num);

// const oldSynt = new Function(3);
// console.log(oldSynt);

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
}

// внутри переменной уже находится Объект, а не функция.
const ivan = new User('Ivan', 28),
alex = new User('Alex', 62);
console.log(ivan);
console.log(alex);