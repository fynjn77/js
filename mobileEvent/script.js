"use strict";
// http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
// https://habr.com/ru/company/sibirix/blog/227175/

document.addEventListener("DOMContentLoaded",()=>{
    const box = document.querySelector('.box');
    
    box.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        // console.log('не распускай пальцы!!');
        // console.log(e.touches);
        // console.log('разница');
        // console.log(e.targetTouches);
        // console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e)=>{
        e.preventDefault();
    //     console.log('что-то двигается!! оно под одеждой!!! /O.O/');
//пример targetTouches        
        console.log(e.targetTouches[0].pageX);
    });
        


    // box.addEventListener('touchend', (e)=>{
    //     e.preventDefault();
    //     console.log('а где пальцы?');});
}); 