"use strict"
// === === === personalMovie start === === ===
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

// === === === personalMovie end === === ===

// === === === intervalAnimation start === === ===

const wrapper = document.querySelector('.wrapper');
const box = document.createElement('div')
wrapper.style = 'position: relative; border: 1px solid red; width: 400px; height: 400px;'
wrapper.append(box)
box.style = 'position: absolute; background-color: blue; width: 100px; height: 100px;'

const move = () => {
    let position = 0;
    if (position == 300) {
        clearInterval(moveIntervalId)
    } else {
        box.style.top = `${position + 1}px`
        box.style.left = `${position + 1}px`
        moveIntervalId = setTimeout(move, 10)
        position++;
    }
}
let moveIntervalId = setTimeout(move, 10)

// === === === intervalAnimation end === === ===



