"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
console.log(numberOfFilms);
let personalMivieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

const oneFromLastWatchedFilms = prompt("Один из последних фильмов?", "");
console.log(oneFromLastWatchedFilms);
const hisRateFromTen = prompt("На сколько его оцените?", "");
personalMivieDB.movies[oneFromLastWatchedFilms] = hisRateFromTen;
console.log(personalMivieDB.movies);