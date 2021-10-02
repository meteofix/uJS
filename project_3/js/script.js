
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items')

    // === === === intervalAnimation start === === ===

    function hideTabContent() {
        tabsContent.forEach(tabContent => {
            tabContent.classList.add('hide')
            tabContent.classList.remove('fade')
        })
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active')
        })
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide')
        tabsContent[i].classList.add('fade');
        tabs[i].classList.add('tabheader__item_active')
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, index) => {
                if (tab == target)  {
                    hideTabContent()
                    showTabContent(index)
                }
            })
        }
    })

    hideTabContent();
    showTabContent();

    // === === === intervalAnimation end === === ===

    // === === === timer start === === ===

    const deadline = '2021-10-29T22:30',
          timer = document.querySelectorAll('.timer__block span')

    function timeConverter (endtime) {
        const timeArray = []
        ms = Date.parse(endtime) - Date.now();
        timeArray[0] = ms;
        // timeArray[1] = parseInt(((ms) / (1000 * 60 * 60 * 24)));
        // timeArray[2] = parseInt(((ms) / (1000 * 60 * 60)) % 24);
        // timeArray[3] = parseInt(((ms) / (1000 * 60)) %60);
        // timeArray[4] = parseInt(((ms) / (1000)) %60);
        timeArray[1] = Math.floor(ms / (1000 * 60 * 60 * 24));
        timeArray[2] = Math.floor((ms / (1000 * 60 * 60)) % 24);
        timeArray[3] = Math.floor((ms / (1000 * 60)) %60);
        timeArray[4] = Math.floor((ms / (1000)) %60);
        return timeArray;
    }
    setTimer()
    const timerTimeoutId = setInterval(setTimer, 1000)

    function setTimer () {
        const timeArray = timeConverter(deadline)
        for (let i = 0; i < 4 ; i++) {
            timer[i].textContent = (timeArray[i+1] > 0 && timeArray[i+1] < 10) ? `0${timeArray[i+1]}` : timeArray[i+1];
        }
        if (timeArray[0] <= 2) {
            clearInterval(timerTimeoutId)
        }
    }

    // === === === timer end === === ===

    // === === === modal start === === ===

    const modal = document.querySelector('.modal'),
        //modalCloseButtons = modal.querySelectorAll('[data-close]'),
        modalOpenButtons = document.querySelectorAll('[data-modal]'),
        offer2 = document.querySelector('.offer__action')

    function modalOpen () {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }
    function modalClose () {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    modalOpenButtons.forEach((item) => {
        item.addEventListener('click', modalOpen)
    })
    // modalCloseButtons.forEach((item) => {
    //     item.addEventListener('click', modalClose)
    // })

    modal.addEventListener('click', (e) => {
        if ( e.target === modal || e.target.getAttribute('data-close') == '') {
            modalClose();
        }

    })
    document.addEventListener('keydown',  (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            modalClose();
        }
    })
    const modalTimerId = setTimeout(modalOpen, 50000)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll)

    // === === === modal end === === ===

    // === === === menu class start === === ===

    const menuField = document.querySelector('.menu__field'),
        menuFieldContainer = document.querySelector('.menu__field .container'),
        menuItemImg = menuField.querySelectorAll('.menu__item img'),
        menuItemTitle = menuField.querySelectorAll('.menu__item .menu__item-subtitle'),
        menuItemDesc = menuField.querySelectorAll('.menu__item .menu__item-descr'),
        menuItemPriceTotal = menuField.querySelectorAll('.menu__item .menu__item-price .menu__item-total span')

    // class MenuCard {
    //     constructor(src, alt, title, desc, price, parentSelector, ...classes) {
    //          this.src = src;
    //          this.alt = alt;
    //          this.title = title;
    //          this.desc = desc;
    //          this.price = price;
    //          this.classes = classes;
    //          this.parent = document.querySelector(parentSelector)
    //          this.transfer = 27;
    //          this.changeToUah();
    //     }
    //     add(number) {
    //         menuItemImg[number].src = this.src;
    //         menuItemImg[number].alt = this.alt;
    //         menuItemTitle[number].textContent = this.title;
    //         menuItemDesc[number].textContent = this.desc;
    //         menuItemPriceTotal[number].textContent = this.price;
    //     }
    //     changeToUah() {
    //         this.price = this.price * this.transfer;
    //     }
    //     render() {
    //         const element = document.createElement('div');
    //         if (this.classes.length === 0) {
    //             this.element = 'menu__item';
    //             element.classList.add(this.element)
    //         } else {
    //             this.classes.forEach(item => element.classList.add(item));
    //         }
    //         element.innerHTML = `
    //             <img src="${this.src}" alt="${this.alt}">
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">${this.desc}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //             </div>
    //         `;
    //         this.parent.append(element)
    //     }
    //
    // }
    // const getResource = async (url) => {
    //     const res = await fetch(url);
    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }
    //
    //     return await res.json();
    // }
    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu__field .container', 'menu__item', 'custom').render()
    //         })
    //     })
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data))
    
    axios.get('http://localhost:3000/menu')
        .then(data => createCard(data.data))

    function createCard(data) {
        data.forEach(({img, altimg, title, descr, price}) => {
            const element = document.createElement('div')

            element.classList.add('menu__item');
            element.innerHTML = `
                 <img src="${img}" alt="${altimg}">
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price*27}</span> грн/день</div>
                </div>
            `;
            document.querySelector('.menu .container').append(element)
        })
    }

    // === === === menu class end === === ===

    // === === === ajax post XMLHttpRequest/fetch start === === ===

    const forms = document.querySelectorAll('form')
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Thanks!',
        failure: 'Failure...'
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    }


    forms.forEach(form => {
        bindPostData(form);
    })
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img')
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            //form.append(statusMessage)
            form.insertAdjacentElement('afterend', statusMessage)

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php')
            //request.setRequestHeader('Content-type', 'multipart/form-data');
            //request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);
            // const object = {};
            // formData.forEach(function (value, key){
            //     object[key] = value;
            // })
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            // fetch('server.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })
            postData('http://localhost:3000/requests', json)
                //.then((data) => data.text())
                .then((data) => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            })




            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response)
            //         //statusMessage.textContent = message.success;
            //         showThanksModal(message.success)
            //         form.reset();
            //             statusMessage.remove();
            //     }  else {
            //         showThanksModal(message.failure);
            //     }
            // })
        })
    }

    // == == красивое оповещение событий == ==

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        modalOpen();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            modalClose();
        }, 4000)
    }

    // === === === ajax post XMLHttpRequest/fetch class end === === ===

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

    // === === === calculator start === === ===

    const calc = document.querySelector('.calculating'),
        calcResult = calc.querySelector('.calculating__result span'),
        calcGender = calc.querySelector('#gender '),
        calcChooseBig = calc.querySelector('.calculating__choose_big '),
        calcChooseMedium = calc.querySelector('.calculating__choose_medium')
    let calcSex = 'female',
        calcHeight, calcWeight, calcAge,
        calcRatio = '1.375';

    function calcTotal() {
        if (!calcSex || !calcHeight || !calcWeight || !calcAge || !calcRatio) {
            calcResult.textContent = '____'
            return;
        }
        if (calcSex === 'female') {
            calcResult.textContent = Math.round((447.6 + (9.2 * calcWeight) + (3.1 * calcHeight) - (4.3 * calcAge)) * calcRatio);
        } else {
            calcResult.textContent = Math.round((88.36 + (13.4 * calcWeight) + (4.8 * calcHeight) - (5.7 * calcAge)) * calcRatio);
        }
    }
    calcTotal();
    function calcGetInfo(selector, item) {
        switch (selector) {
            case calcGender:
                calcSex = item.id;
                calcChangeActive(selector, item);
                break;
            case calcChooseBig: 
                calcRatio = item.getAttribute('data-ratio');
                calcChangeActive(selector, item);
                break;
            case calcChooseMedium:
                switch (item.id) {
                    case 'height': calcHeight = item.value; break;
                    case 'weight': calcWeight = item.value; break;
                    case 'age': calcAge = item.value; break;
                }
        }
        calcTotal()
    }
    function calcChangeActive(selector, item) {
        const elements = document.querySelectorAll(`.${selector.classList[1]} .calculating__choose-item`)
        elements.forEach(item => item.classList.remove('calculating__choose-item_active'))
        item.classList.add('calculating__choose-item_active')
    }
    
    calcGender.addEventListener('click', (e) => {
        if (e.target.classList.contains('calculating__choose-item')) calcGetInfo(calcGender, e.target);

    })
    calcChooseBig.addEventListener('click', (e) => {
        if (e.target.classList.contains('calculating__choose-item')) calcGetInfo(calcChooseBig, e.target);

    })
    calcChooseMedium.addEventListener('input', (e) => {
        if (e.target.classList.contains('calculating__choose-item')) calcGetInfo(calcChooseMedium, e.target);
    })

    // === === === calculator end === === ===

});