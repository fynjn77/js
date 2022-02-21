// const timeId = setTimeout(function(){
//     console.log('hello');
// }, 2000);

// const timeId = setTimeout(function(arg){
//     console.log(arg);
// }, 2000, 'test');

// const timeId = setTimeout(logger, 2000);
// function logger () {
//     console.log('text'); 
// }
// clearInterval(timeId);

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id);
        } else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);




// btn.addEventListener('click', ()=>{
//     timerId = setInterval(logger, 2000);
// });



// function logger(){
//     if (i == 3){clearInterval(timerId);}
//     console.log('Терпииии');
//     i++;
// }

// Рекурсивный вызов setTimeout
// будет ждать полсекунды
// let id = setTimeout(function log(){
//     console.log('Hello');
//     id= setTimeout(log, 500);
// }, 500);