"use strict";


// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
// console.log(numberOfFilms);
// let personalMivieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false,
// };

// const oneFromLastWatchedFilms = prompt("Один из последних фильмов?", "");
// console.log(oneFromLastWatchedFilms);
// const hisRateFromTen = prompt("На сколько его оцените?", "");
// personalMivieDB.movies[oneFromLastWatchedFilms] = hisRateFromTen;
// console.log(personalMivieDB.movies);

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

let numberOfFilms;
function start(){

    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    while(!numberOfFilms || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}
// start();

console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function remeberMyFilms(){
    for (let i = 0; i < numberOfFilms; i++) {
        let filmName = prompt("Один из последних фильмов который вы посмотрели", "");
        while (!filmName || filmName.length > 50){
            alert("Ты чо чел, ты чооо");
            filmName = prompt("Один из последних фильмов который вы посмотрели", "");
        }
        let rate = prompt("На сколько бы его оценили?","");
        while (!rate){
            alert("Ты чо чел, ты чооо");
            rate = prompt("На сколько бы его оценили?","");}
        
        
        personalMovieDB.movies[filmName] = rate;
    }
}
// remeberMyFilms();

function userStatus(){
    if (numberOfFilms <10){
        console.log('просмотрено довольно мало фильмов');
    }else if(numberOfFilms > 10 && numberOfFilms <30){
        console.log('Вы классический зритель');
    } else if (numberOfFilms > 30 && numberOfFilms < 100 ){
        console.log('Вы киноман!');
    }
    
}
userStatus();

  function showMyDB(){
    if (personalMovieDB.privat == false){

        console.log(personalMovieDB);
    }else {
        console.log('не работает!');
    }
}
showMyDB();

function writeYourGenres(){
    let question = 1;
    while (question <= 3){
        let genre = prompt(`Назоваите жанр под номером ${question} `);
        if (!genre){
            genre = prompt(`Назоваите жанр под номером ${question} `);
        }else {
            personalMovieDB.genres[question - 1] = genre ;
            question++;
        }
    }
    console.log(personalMovieDB);
}
writeYourGenres();
