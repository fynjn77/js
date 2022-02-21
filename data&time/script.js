"use strict";

// беру текущую дату 
// const now = new Date(); 
// console.log(now);

// const now = new Date('2021-12-01'); 
// console.log(now);   

// const now = new Date(2021, 0, 1, 20); 
// console.log(now);   

// timestamp (с начала эпохи)
// const now = new Date(0); 
// console.log(now);   

// let now = new Date(); 
// // console.log(now.getFullYear());   
// // console.log(now.getMonth());   
// console.log(now.getDate ());   

// let start = new Date(); 
// for(let i = 0; i < 100000; i++){
//     // let someNum = i ** i;
// }
// let end = new Date();
// console.log(`Say ${end - start}`);


// Timer
 const deadline = '2021-12-30';
 function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t/(1000*60 * 60 * 24)),
    // для получения оставшихся дней делю
    // кол-во милисекунд (от сейчас до установленной даный)
    // на кол-во милисекунд в сутках
    hours = Math.floor((t / (1000*60*60)) % 24),
    minutes = Math.floor((t/1000/60) % 60),
    seconds = Math.floor((t/1000) % 60);

    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
 
}

function setClock(selector, endtime){
    //selector - обертка для отображения таймера
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock(){
        const t = getTimeRemaining(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if(t.total <=0){
            clearInterval(timeInterval);
        }
    }
}
setClock();

// console.log(Date());
// console.log(new Date());
// console.log(Date.parse(Date()));
// console.log(Date.parse(new Date()));