"use strict";


// callback Как контроллировать нужную поселодовательность выполнения функций
// 
function first(){
    setTimeout(function(){
        console.log('result');
    }, 500);
}

function second(){
    console.log('second result');
}

// first();
// second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();

}
function done (){
    console.log('пример того как функцию вставлять аргументом');
}

learnJS('JavaScript', function(){
    console.log('какой-то текст анонимной функции');
});
learnJS('JavaScript', done);