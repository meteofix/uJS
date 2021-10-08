
window.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        cards = require('./modules/cards'),
        post = require('./modules/post'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc')

    tabs()
    timer()
    modal()
    cards()
    post()
    slider()
    calc()
});