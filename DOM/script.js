// console.log(document.head);//обращаюсь к тегу
// console.log(document.documentElement);//обращаюсь к верстке начиная с <html></html>
console.log(document.body.childNodes);//вернёт псевдомассив с узлами
// console.log(document.body.firstChild);//вернёт первый узел
// console.log(document.body.lastChild);//вернёт последний узел

// console.log(document.querySelector('#current').parentNode); // родительский узел выбранного эллемента 
// console.log(document.querySelector('#current').parentNode.parentNode); // родительский узел Родительского узла выбранного элемента 

// console.log(document.querySelector('[data-current="3"]')); //по атрибуту
// console.log(document.querySelector('[data-current="3"]').nextSibling); //следующий за нодой потомок (получу #text от знака переноса строки)
// console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling); //второй за нодой потомок li 

// аналог childNodes - пропускаю ненужное
for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }

    console.log(node);
}