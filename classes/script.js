"use strict";

class Rectangle{
    // constructor - это обычная функция
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}
// const square = new Rectangle(100,100);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, color){
        super(height, width);
        this.text = text;
        this.color = color;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.color}`);
    }
}

const div = new ColoredRectangleWithText(30, 50, "Нууу каа", "blue");

div.showMyProps();
console.log(div.calcArea());