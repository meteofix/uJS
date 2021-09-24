"use strict"
let movie, rating;
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов?',"");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов?',"");
    }
}
//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i <2; ) {
        movie = prompt('Один из последних фильмов?');
        rating = prompt('Оценка?');
        if (movie=='' || rating=='' || movie==null || rating==null || movie.length>=50) {
            continue;
        }
        personalMovieDB.movies[movie] = rating;
        i++;
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count<10) {
        alert("Мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Классический зритель')
    } else if (personalMovieDB.count > 30) {
        alert('Киноман')
    } else {
        alert('Ошибка')
    }
}
//detectPersonalLevel()

function showMyDB()  {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres() {
    let genre;
    for (let i = 0; i < 3 ; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i+1}`,'')
        while (genre == '' || genre == null || genre.length > 50) {
            genre = prompt(`Ваш любимый жанр под номером ${i+1}`,'')
        }
        personalMovieDB.genres[i] = genre
    }
}
writeYourGenres()
console.log(personalMovieDB)