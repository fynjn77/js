"use strict";

const inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
    // создаю шаблон запроса
    const request = new XMLHttpRequest();

    // собираю настройки для запроса
    // request.open(методGetИлиPost, urlПусть к серверу/файлу Т.е.путь запроса, указываюСинхронныйИлиАсинхронныйКод);
    // по умолчанию асинхронные

    // запросы посылаются из html
    // остальные аргументы не обязательны
    request.open('GET', 'js/current.json');

    //для передачи указываю тип - контент, потом какой именно тип - json. Можно указать кодировку
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
    //отправляю запрос
    request.send();

    //Если был использован POST запрос, то указываю что отправляю.
    // request.send();

    // событие 'readystatechange' отслеживает статус готовности запроса в текущий момент
    // событие 'load' срабатывает только когда запрос готов (не важно успешно ли)
    request.addEventListener('load', ()=>{
        if(request.status === 200){
            console.log(request.response);
            
            //создаю переменную для ответа на запрос 
            const data = JSON.parse(request.response);
            // из рублей в баксы
            // toFixed задаёт кол-во знаков после точки
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);

        }
        else{
            // если запрос будет к несуществующему Url
            inputUsd.value = "Что-то пошло не так";
        }
    });
    // status (404 и прочие)
    // statusText (тектовый отвый ответ: OK/NotFound и проч)
    // response(Ответ от сервера)
    // readyState()Возвращает текущее состояние объекта


});