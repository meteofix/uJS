"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        this.count = +prompt('Сколько фильмов?',"");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов?',"");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2;) {
            let movie = prompt('Один из последних фильмов?');
            let rating = prompt('Оценка?');
            if (movie == '' || rating == '' || movie == null || rating == null || movie.length >= 50) {
                continue;
            }
            personalMovieDB.movies[movie] = rating;
            i++;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count<10) {
            alert("Мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Классический зритель')
        } else if (personalMovieDB.count > 30) {
            alert('Киноман')
        } else {
            alert('Ошибка')
        }
    },
    showMyDB: function ()  {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB)
        }
    },
    toogleVisibleMydb: function () {
        (this.privat) ? this.privat = false : this.privat = true;
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3 ; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`,'')
            while (genre == '' || genre == null || genre.length > 50) {
                genre = prompt(`Ваш любимый жанр под номером ${i+1}`,'')
            }
            personalMovieDB.genres[i] = genre
        }
        this.genres.forEach(function(item, index) {
            console.log(`Любимый жанр #${index+1} - это ${item}`)
        })
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel()
//personalMovieDB.writeYourGenres()
//personalMovieDB.toogleVisibleMydb()
//personalMovieDB.showMyDB()
console.log(2&&1&&3)