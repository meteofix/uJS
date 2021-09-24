"use strict"
let movie, rating;
const numberOfFilms = +prompt('Сколько фильмов?',"");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i <2; ) {
    movie = prompt('Один из последних фильмов?');
    rating = prompt('Оценка?');
    if (movie===''||rating===''||movie===null||rating===null||movie.length>=50) {
        continue;
    }
    personalMovieDB.movies[movie] = rating;
    i++;
}
if (personalMovieDB.count<10) {
    alert("Мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Классический зритель')
} else if (personalMovieDB.count > 30) {
    alert('Киноман')
} else {
    alert('Ошибка')
}


console.log(personalMovieDB)