"use strict"
let movie1, movie2, rating1, rating2;
const numberOfFilms = prompt('Сколько фильмов?',"");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const question1 = () => {
    return prompt('Один из последних фильмов?')
};
const question2 = () => {
    return prompt('Оценка?')
};

movie1 = question1();
rating1 = question2();
movie2 = question1();
rating2 = question2();

personalMovieDB.movies[movie1] = rating1;
personalMovieDB.movies[movie2] = rating2;

console.log(personalMovieDB)