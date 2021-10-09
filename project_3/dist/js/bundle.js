/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./project_3/js/modules/calc.js":
/*!**************************************!*\
  !*** ./project_3/js/modules/calc.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    const calc = document.querySelector('.calculating'),
        calcResult = calc.querySelector('.calculating__result span'),
        calcGender = calc.querySelector('#gender '),
        calcChooseBig = calc.querySelector('.calculating__choose_big '),
        calcChooseMedium = calc.querySelector('.calculating__choose_medium')
    let calcSex, calcHeight, calcWeight, calcAge,
        calcRatio = localStorage.getItem('calcRatio') || '1.375';

    if (!localStorage.getItem('calcSex')) localStorage.setItem('calcSex', 'female');
    calcSex = localStorage.getItem('calcSex')
    if (!localStorage.getItem('calcRatio')) localStorage.setItem('calcRatio', '1.375');
    calcRatio = localStorage.getItem('calcRatio')

    function calcInitActive(selector, local) {
        selector.querySelectorAll('div').forEach(item => {
            if (item.id === localStorage.getItem(local)) {
                calcChangeActive(selector, item);
            }
            if (item.getAttribute('data-ratio') === localStorage.getItem(local)) {
                calcChangeActive(selector, item)
            }
        })
    }
    calcInitActive(calcGender, 'calcSex');
    calcInitActive(calcChooseBig, 'calcRatio')

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
                localStorage.setItem('calcSex', calcSex)
                break;
            case calcChooseBig:
                calcRatio = item.getAttribute('data-ratio');
                calcChangeActive(selector, item);
                localStorage.setItem('calcRatio', calcRatio)
                break;
            case calcChooseMedium:
                switch (item.id) {
                    case 'height': calcHeight = +item.value; break;
                    case 'weight': calcWeight = +item.value; break;
                    case 'age': calcAge = +item.value; break;
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
        if (/\D/ig.test(e.target.value)) {
            e.target.style.boxShadow = '0 4px 15px rgba(255, 0, 0, 0.6)'
        } else {
            if (e.target.classList.contains('calculating__choose-item')) calcGetInfo(calcChooseMedium, e.target);
            e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 0, 0.6)'
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./project_3/js/modules/cards.js":
/*!***************************************!*\
  !*** ./project_3/js/modules/cards.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import {getResource} from "../services/services";

function cards() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./project_3/js/modules/modal.js":
/*!***************************************!*\
  !*** ./project_3/js/modules/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "modalClose": () => (/* binding */ modalClose),
/* harmony export */   "modalOpen": () => (/* binding */ modalOpen)
/* harmony export */ });
function modalOpen (modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    clearInterval(modalTimerId)
}
function modalClose (modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector),
        //modalCloseButtons = modal.querySelectorAll('[data-close]'),
        modalOpenButtons = document.querySelectorAll(triggerSelector),
        offer2 = document.querySelector('.offer__action')

    modalOpenButtons.forEach((item) => {
        item.addEventListener('click', () => modalOpen(modalSelector, modalTimerId))
    })
    // modalCloseButtons.forEach((item) => {
    //     item.addEventListener('click', modalClose)
    // })

    modal.addEventListener('click', (e) => {
        if ( e.target === modal || e.target.getAttribute('data-close') == '') {
            modalClose(modalSelector );
        }

    })
    document.addEventListener('keydown',  (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            modalClose(modalSelector );
        }
    })

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./project_3/js/modules/post.js":
/*!**************************************!*\
  !*** ./project_3/js/modules/post.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./project_3/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./project_3/js/services/services.js");



function post(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector)
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Thanks!',
        failure: 'Failure...'
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
            ;(0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
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

    // == == оповещение событий == ==

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modalOpen)('.modal', modalTimerId);
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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modalClose)('.modal' );
        }, 4000)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);

/***/ }),

/***/ "./project_3/js/modules/slider.js":
/*!****************************************!*\
  !*** ./project_3/js/modules/slider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const slider = document.querySelector(container),
        slides = slider.querySelectorAll(slide),
        sliderNext = slider.querySelector(nextArrow),
        sliderPrev = slider.querySelector(prevArrow),
        sliderCurrent = slider.querySelector(currentCounter),
        sliderTotal = slider.querySelector(totalCounter),
        sliderWrapper = slider.querySelector(wrapper),
        sliderField = slider.querySelector(field),
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./project_3/js/modules/tabs.js":
/*!**************************************!*\
  !*** ./project_3/js/modules/tabs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector)

    function hideTabContent() {
        tabsContent.forEach(tabContent => {
            tabContent.classList.add('hide')
            tabContent.classList.remove('fade')
        })
        tabs.forEach(tab => {
            tab.classList.remove(activeClass)
        })
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide')
        tabsContent[i].classList.add('fade');
        tabs[i].classList.add(activeClass)
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains(tabsSelector.slice(1))) {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./project_3/js/modules/timer.js":
/*!***************************************!*\
  !*** ./project_3/js/modules/timer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(timerSpanSelector, deadline) {
    const timer = document.querySelectorAll(timerSpanSelector)

    function timeConverter (endtime) {
        const timeArray = []
        let ms = Date.parse(endtime) - Date.now();
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./project_3/js/services/services.js":
/*!*******************************************!*\
  !*** ./project_3/js/services/services.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
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
// const getResource = async (url) => {
//     let res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//
//     return await res.json();
// }

// export {getResource}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./project_3/js/script.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./project_3/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./project_3/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./project_3/js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./project_3/js/modules/cards.js");
/* harmony import */ var _modules_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/post */ "./project_3/js/modules/post.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./project_3/js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./project_3/js/modules/calc.js");









window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.modalOpen)('.modal', modalTimerId), 50000 )

    ;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    ;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer span', '2021-10-29T22:30')
    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal', modalTimerId )
    ;(0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_modules_post__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId)
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    })
    ;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])()
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map