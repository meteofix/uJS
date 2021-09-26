'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const promoAdvImages = document.querySelectorAll('.promo__adv img')
    const promoInteractiveList = document.querySelector('.promo__interactive-list')
    const addFilm = document.querySelector('.add')
    const addFilmInput = addFilm.querySelector('.adding__input')
    const chk = addFilm.querySelector('[type="checkbox"]')


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const sortArray = (arr) => {
        arr.sort();
    }

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    }

    const makeChanges = () => {
        document.querySelector('.promo__bg').style.backgroundImage = 'url(./img/bg.jpg)'
        document.querySelector('.promo__genre').textContent = 'драма'
    }

    movieDB.movies.forEach((item, i) => {
        movieDB.movies[i] = item.toLowerCase()
    })



    const moviesListUpdate = (films, parent) => {
        sortArray(movieDB.movies);
        parent.innerHTML = ''
        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>`
        })

        promoInteractiveList.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i,1);
                moviesListUpdate(films, parent);
            })
        })
        ;
    }

    addFilm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newFilm = addFilmInput.value;
        if (newFilm) {
            (newFilm.length > 21 ?
                    movieDB.movies.push(`${newFilm.toLowerCase().slice(0, 21)}...`)
                    :
                    movieDB.movies.push(newFilm.toLowerCase())
            )

            if (chk.checked) {
                console.log('Добавляем любимый фильм')
            }
            moviesListUpdate(movieDB.movies, promoInteractiveList);
        }

        e.target.reset();
    });

    deleteAdv(promoAdvImages)
    makeChanges();
    moviesListUpdate(movieDB.movies, promoInteractiveList);

})
// console.log(movieDB.movies)
