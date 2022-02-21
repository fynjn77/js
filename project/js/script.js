'use strict';


// использовать js только когда DOM структура будет загружена
document.addEventListener('DOMContentLoaded',()=>{

const movieDB = {
    movies: [
        "Яндере, о которой ты и не мечтал",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
};

// 1) удаляю рекламу
const adv = document.querySelectorAll('.promo__adv img');
const deleteAdv = (arr) =>{ 
    arr.forEach(item => {
    item.remove();
});};
deleteAdv(adv);
 
const makeChanges = () => {
    // 2) Изменить жанр фильма
    const genre = document.getElementsByClassName('promo__genre')[0];
    // или document.querySelector('promo__genre');
    genre.textContent='драма';
    const posterBg = document.querySelector('.promo__bg');


    // типа так
    // posterBg.style.cssText = 'background: url("http://127.0.0.1:5500/project/img/bg.jpg"); height: 360px; background-position: top; padding: 107px 0 0 61px;';
    posterBg.style.backgroundImage = 'url("img/bg.jpg")';


};
makeChanges();


let filmsList = document.querySelector('.promo__interactive-list');
let userFilm = document.querySelector('input.adding__input');
let addUserFilm = document.querySelector('.add').lastElementChild;

// сделать фильм любимым?
let favoriteFilme = document.querySelector('.add [type = "checkbox"]');

// сортировка
function sortArr(arr){
    arr.sort();
}
sortArr(movieDB.movies);
// чищу список, сортирую массив и делаю выгрузку из него на страницу
function createMovieList(films, parent){

    parent.innerHTML ='';
    // movieDB.movies.sort();
 
    films.forEach((film, i) =>{

        // ограничение на длину отображаемого названия
        if (film.length> 21){
            film = film.slice(0, 21) + '...';
        }
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
        </li>
        `;
    });
    
    // удаляю фильм
    console.log(movieDB.movies);
    document.querySelectorAll('.delete').forEach((btn, i) =>{
        btn.addEventListener('click', () =>{
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);
            createMovieList(movieDB.movies,filmsList);
        });

    });

}
createMovieList(movieDB.movies,filmsList);
console.log(movieDB);



// нажатие на кнопку Подтвердить ввод нового фильма
addUserFilm.addEventListener("click",(soClick)=>{
    // отменяю перезагрузку страницы
    soClick.preventDefault();

    // добавляю фильм в массив
    if(userFilm.value){
    // movieDB.movies[++movieDB.movies.length] = userFilm.value;
    movieDB.movies.push(userFilm.value);
    sortArr(movieDB.movies);
    
    createMovieList(movieDB.movies, filmsList);
    
    // soClick.innerHTML ='';
    }
    
    if (favoriteFilme.checked == true){
        console.log('Добавляем любимый фильм');} 


});
});