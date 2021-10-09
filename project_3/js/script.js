import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal, {modalOpen} from "./modules/modal";
import cards from "./modules/cards";
import post from "./modules/post";
import slider from "./modules/slider";
import calc from "./modules/calc";


window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => modalOpen('.modal', modalTimerId), 50000 )

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    timer('.timer span', '2021-10-29T22:30')
    modal('[data-modal]', '.modal', modalTimerId )
    cards()
    post('form', modalTimerId)
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    })
    calc()
});