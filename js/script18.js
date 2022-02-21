"use strict";
let personalMovieDB = {
    count: 0,
    start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        while(!personalMovieDB.count || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    remeberMyFilms: function(){
        for (let i = 0; i < personalMovieDB.count; i++) {
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
    },
    soo: 'lala',
    userStatus: function (){
        if (personalMovieDB.count <10){
            console.log('просмотрено довольно мало фильмов');
        }else if(personalMovieDB.count > 10 && personalMovieDB.count <30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30 && personalMovieDB.count < 100 ){
            console.log('Вы киноман!');
        }
    },
    showMyDB: function(){
        if (personalMovieDB.privat == false){

            console.log(personalMovieDB);
        }else {
            console.log('не работает!');
        }
    },
    writeYourGenres: function (){
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
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Ваш любимый жанр номер ${i++}, это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        }else{
            personalMovieDB.privat = false;
        }

    }
};
