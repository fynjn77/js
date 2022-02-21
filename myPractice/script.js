
// // const myObj = {
// //     Links: ['https://www.youtube.com/watch?v=7l0vKLsS7AY', 'https://www.youtube.com/watch?v=5Q2Pc-e-8Qc',
// //     'https://www.youtube.com/watch?v=SgCIZZodox8', 'https://www.youtube.com/watch?v=2kppIwA9Bsg'],
// //     linksTitles: ['Как стать программистом быстрее', '4GoodNight', 'What dogs love', 'Home alone with cat'],
// //     image: '',
// //     header: 'Header in da house!',

// // };

// // // LETS DO IT!!!!!

// // // обнуление и декорация списка
// // const myList = document.querySelector('ul');
// // myList.innerHTML = '';
// // myList.style = 'list-style:none;';

// // // добавление эллементов в список
// // myObj.linksTitles.forEach((item, i) =>{
// //     myList.innerHTML += `<li><a href ="${myObj.Links[i]}">${item}</a></li><br>`;

// // });

// // // отображение названий ссылок
// // const linksStyle = myList.querySelectorAll('a');
// // linksStyle.forEach(styleMy =>{
// //     styleMy.style.cssText = 'color: yellow; text-decoration: none; background:red; border: 1px solid red;';
// // });
// // const camooonDontSleeep = document.querySelector('h1');
// // camooonDontSleeep.style = 'display:inline;';
// // camooonDontSleeep.textContent = myObj.header;
// // camooonDontSleeep.addEventListener('mouseenter',() => { alert('BANG BANG!!!');});
// // document.querySelectorAll('p').forEach(item =>{
// //     item.innerText = "Выше нос!";
// //     // item.textContent
// //     // item.outerText = 'test';
// // });


// let item = document.querySelector('main');
// let myBtn = document.createElement('button');
// // console.log(item);
// // item
// myBtn.style.cssText = "display: inline-block; position: relative; bottom: 100px; height: 20px; width: 40px; background: yellow;";
// // myBtn
// // item.innerHTML += toString(myBtn);
// item.append(myBtn);

// // console.log(myBtn);
// // myBtn.innerHtm = '<button>+</button>';
// // console.log(myBtn);
// // item.forEach(iter =>{
// //     // iter.style.cssText = 'border: 1px solid red;';
// //     iter.innerHTML += myBtn.;
// // });


let testMu = '1 test .  2';
while( testMu.indexOf(' ')){

    testMu = testMu.replace(' ','');
    // console.log(testMu);

}
console.log(testMu);
