function slider() {
    // === === === slider start === === ===

    const slider = document.querySelector('.offer__slider'),
        slides = slider.querySelectorAll('.offer__slide'),
        sliderNext = slider.querySelector('.offer__slider-next'),
        sliderPrev = slider.querySelector('.offer__slider-prev'),
        sliderCurrent = slider.querySelector('#current'),
        sliderTotal = slider.querySelector('#total'),
        sliderWrapper = slider.querySelector('.offer__slider-wrapper'),
        sliderField = slider.querySelector('.offer__slider-inner'),
        sliderWidth = window.getComputedStyle(sliderWrapper).width,
        sliderDotesWrapper = document.createElement('ol');
    let slidesCounter = 0;
    let slidesOffset = 0;
    let dotes = [];

    // == == slider 2 dotes == ==

    sliderDotesWrapper.classList.add('carousel-indicators')
    slider.append(sliderDotesWrapper)
    for (let i = 0; i < slides.length; i++) {
        dotes[i] = document.createElement('li')
        dotes[i].classList.add('dot')
        sliderDotesWrapper.append(dotes[i])
        dotes[i].addEventListener('click', () => slideDot(i))
    }
    dotes[slidesCounter].style.opacity = 1;

    function slideDot(index) {
        slidesOffset = index * numbersFromString(sliderWidth);
        slideChangeCurrent()
    }

    // == == slider 2 == ==

    sliderField.style.width = 100 * slides.length + '%';

    slides.forEach((slide) => slide.style.width = sliderWidth)
    slideChangeCurrent()
    sliderTotal.textContent = (slides.length < 10) ? `0${slides.length}`: slides.length;

    function slideNext() {
        (slidesOffset == numbersFromString(sliderWidth) * (slides.length - 1))
            ? slidesOffset = 0
            : slidesOffset += numbersFromString(sliderWidth);
        slideChangeCurrent()
    }
    function slidePrev() {
        (slidesOffset == 0)
            ? slidesOffset = numbersFromString(sliderWidth) * (slides.length - 1)
            : slidesOffset -= numbersFromString(sliderWidth);
        slideChangeCurrent()
    }
    function slideChangeCurrent() {
        dotes[slidesCounter].style.opacity = '';
        slidesCounter = slidesOffset/numbersFromString(sliderWidth)
        dotes[slidesCounter].style.opacity = 1;

        sliderField.style.transform = `translateX(-${slidesOffset}px)`
        sliderCurrent.textContent = (slidesCounter + 1 < 10) ? `0${slidesCounter + 1}`: `${slidesCounter + 1}`;

    }
    sliderNext.addEventListener('click', () => {
        slideNext();
    });

    sliderPrev.addEventListener('click', () => {
        slidePrev();
    });

    // == == slider 1 == ==

    // slides.forEach((slide) => slide.classList.add('hide'))
    //
    // slideShow();
    // function slideShow() {
    //     slides[slidesCounter].classList.remove('hide');
    //     slides[slidesCounter].classList.add('show');
    //     sliderCurrent.textContent = (slidesCounter + 1 < 10) ? `0${slidesCounter + 1}`: `${slidesCounter + 1}`;
    //
    // }
    // function slideHide() {
    //     slides[slidesCounter].classList.remove('show')
    //     slides[slidesCounter].classList.add('hide')
    // }
    //
    // function slideNext() {
    //     slideHide();
    //     (slidesCounter === slides.length - 1) ? slidesCounter = 0 : slidesCounter++;
    //     slideShow();
    // }
    // function slidePrev() {
    //     slideHide();
    //     (slidesCounter === 0) ? slidesCounter = slides.length - 1 : slidesCounter--;
    //     slideShow();
    // }
    // sliderNext.addEventListener('click', slideNext);
    // sliderPrev.addEventListener('click', slidePrev);
    // sliderTotal.textContent = (slides.length < 10) ? `0${slides.length}`: `${slides.length}`;

    function numbersFromString(string) {
        return +string.replace(/\D/g, '');
    }

    // === === === slider end === === ===
}

module.exports = slider;