/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./project_3/js/modules/calc.js":
/*!**************************************!*\
  !*** ./project_3/js/modules/calc.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  const calc = document.querySelector('.calculating'),
        calcResult = calc.querySelector('.calculating__result span'),
        calcGender = calc.querySelector('#gender '),
        calcChooseBig = calc.querySelector('.calculating__choose_big '),
        calcChooseMedium = calc.querySelector('.calculating__choose_medium');
  let calcSex,
      calcHeight,
      calcWeight,
      calcAge,
      calcRatio = localStorage.getItem('calcRatio') || '1.375';
  if (!localStorage.getItem('calcSex')) localStorage.setItem('calcSex', 'female');
  calcSex = localStorage.getItem('calcSex');
  if (!localStorage.getItem('calcRatio')) localStorage.setItem('calcRatio', '1.375');
  calcRatio = localStorage.getItem('calcRatio');

  function calcInitActive(selector, local) {
    selector.querySelectorAll('div').forEach(item => {
      if (item.id === localStorage.getItem(local)) {
        calcChangeActive(selector, item);
      }

      if (item.getAttribute('data-ratio') === localStorage.getItem(local)) {
        calcChangeActive(selector, item);
      }
    });
  }

  calcInitActive(calcGender, 'calcSex');
  calcInitActive(calcChooseBig, 'calcRatio');

  function calcTotal() {
    if (!calcSex || !calcHeight || !calcWeight || !calcAge || !calcRatio) {
      calcResult.textContent = '____';
      return;
    }

    if (calcSex === 'female') {
      calcResult.textContent = Math.round((447.6 + 9.2 * calcWeight + 3.1 * calcHeight - 4.3 * calcAge) * calcRatio);
    } else {
      calcResult.textContent = Math.round((88.36 + 13.4 * calcWeight + 4.8 * calcHeight - 5.7 * calcAge) * calcRatio);
    }
  }

  calcTotal();

  function calcGetInfo(selector, item) {
    switch (selector) {
      case calcGender:
        calcSex = item.id;
        calcChangeActive(selector, item);
        localStorage.setItem('calcSex', calcSex);
        break;

      case calcChooseBig:
        calcRatio = item.getAttribute('data-ratio');
        calcChangeActive(selector, item);
        localStorage.setItem('calcRatio', calcRatio);
        break;

      case calcChooseMedium:
        switch (item.id) {
          case 'height':
            calcHeight = +item.value;
            break;

          case 'weight':
            calcWeight = +item.value;
            break;

          case 'age':
            calcAge = +item.value;
            break;
        }

    }

    calcTotal();
  }

  function calcChangeActive(selector, item) {
    const elements = document.querySelectorAll(`.${selector.classList[1]} .calculating__choose-item`);
    elements.forEach(item => item.classList.remove('calculating__choose-item_active'));
    item.classList.add('calculating__choose-item_active');
  }

  calcGender.addEventListener('click', e => {
    if (e.target.classList.contains('calculating__choose-item')) calcGetInfo(calcGender, e.target);
  });
  calcChooseBig.addEventListener('click', e => {
    if (e.target.classList.contains('calculating__choose-item')) calcGetInfo(calcChooseBig, e.target);
  });
  calcChooseMedium.addEventListener('input', e => {
    if (/\D/ig.test(e.target.value)) {
      e.target.style.boxShadow = '0 4px 15px rgba(255, 0, 0, 0.6)';
    } else {
      if (e.target.classList.contains('calculating__choose-item')) calcGetInfo(calcChooseMedium, e.target);
      e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 0, 0.6)';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./project_3/js/modules/cards.js":
/*!***************************************!*\
  !*** ./project_3/js/modules/cards.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import {getResource} from "../services/services";
function cards() {
  const menuField = document.querySelector('.menu__field'),
        menuFieldContainer = document.querySelector('.menu__field .container'),
        menuItemImg = menuField.querySelectorAll('.menu__item img'),
        menuItemTitle = menuField.querySelectorAll('.menu__item .menu__item-subtitle'),
        menuItemDesc = menuField.querySelectorAll('.menu__item .menu__item-descr'),
        menuItemPriceTotal = menuField.querySelectorAll('.menu__item .menu__item-price .menu__item-total span'); // class MenuCard {
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

  axios.get('http://localhost:3000/menu').then(data => createCard(data.data));

  function createCard(data) {
    data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      const element = document.createElement('div');
      element.classList.add('menu__item');
      element.innerHTML = `
                 <img src="${img}" alt="${altimg}">
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price * 27}</span> грн/день</div>
                </div>
            `;
      document.querySelector('.menu .container').append(element);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./project_3/js/modules/modal.js":
/*!***************************************!*\
  !*** ./project_3/js/modules/modal.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalClose": function() { return /* binding */ modalClose; },
/* harmony export */   "modalOpen": function() { return /* binding */ modalOpen; }
/* harmony export */ });
function modalOpen(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimerId);
}

function modalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector),
        //modalCloseButtons = modal.querySelectorAll('[data-close]'),
  modalOpenButtons = document.querySelectorAll(triggerSelector),
        offer2 = document.querySelector('.offer__action');
  modalOpenButtons.forEach(item => {
    item.addEventListener('click', () => modalOpen(modalSelector, modalTimerId));
  }); // modalCloseButtons.forEach((item) => {
  //     item.addEventListener('click', modalClose)
  // })

  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      modalClose(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      modalClose(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      modalOpen(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./project_3/js/modules/post.js":
/*!**************************************!*\
  !*** ./project_3/js/modules/post.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./project_3/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./project_3/js/services/services.js");



function post(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Thanks!',
    failure: 'Failure...'
  };
  forms.forEach(form => {
    bindPostData(form);
  });

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `; //form.append(statusMessage)

      form.insertAdjacentElement('afterend', statusMessage); // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php')
      //request.setRequestHeader('Content-type', 'multipart/form-data');
      //request.setRequestHeader('Content-type', 'application/json');

      const formData = new FormData(form); // const object = {};
      // formData.forEach(function (value, key){
      //     object[key] = value;
      // })

      const json = JSON.stringify(Object.fromEntries(formData.entries())); // fetch('server.php', {
      //     method: 'POST',
      //     headers: {
      //         'Content-type': 'application/json'
      //     },
      //     body: JSON.stringify(object)
      // })

      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json) //.then((data) => data.text())
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      }); // request.addEventListener('load', () => {
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
    });
  } // == == оповещение событий == ==


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
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modalClose)('.modal');
    }, 4000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./project_3/js/modules/slider.js":
/*!****************************************!*\
  !*** ./project_3/js/modules/slider.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field
}) {
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
  let dotes = []; // == == slider 2 dotes == ==

  sliderDotesWrapper.classList.add('carousel-indicators');
  slider.append(sliderDotesWrapper);

  for (let i = 0; i < slides.length; i++) {
    dotes[i] = document.createElement('li');
    dotes[i].classList.add('dot');
    sliderDotesWrapper.append(dotes[i]);
    dotes[i].addEventListener('click', () => slideDot(i));
  }

  dotes[slidesCounter].style.opacity = 1;

  function slideDot(index) {
    slidesOffset = index * numbersFromString(sliderWidth);
    slideChangeCurrent();
  } // == == slider 2 == ==


  sliderField.style.width = 100 * slides.length + '%';
  slides.forEach(slide => slide.style.width = sliderWidth);
  slideChangeCurrent();
  sliderTotal.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;

  function slideNext() {
    slidesOffset == numbersFromString(sliderWidth) * (slides.length - 1) ? slidesOffset = 0 : slidesOffset += numbersFromString(sliderWidth);
    slideChangeCurrent();
  }

  function slidePrev() {
    slidesOffset == 0 ? slidesOffset = numbersFromString(sliderWidth) * (slides.length - 1) : slidesOffset -= numbersFromString(sliderWidth);
    slideChangeCurrent();
  }

  function slideChangeCurrent() {
    dotes[slidesCounter].style.opacity = '';
    slidesCounter = slidesOffset / numbersFromString(sliderWidth);
    dotes[slidesCounter].style.opacity = 1;
    sliderField.style.transform = `translateX(-${slidesOffset}px)`;
    sliderCurrent.textContent = slidesCounter + 1 < 10 ? `0${slidesCounter + 1}` : `${slidesCounter + 1}`;
  }

  sliderNext.addEventListener('click', () => {
    slideNext();
  });
  sliderPrev.addEventListener('click', () => {
    slidePrev();
  }); // == == slider 1 == ==
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

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./project_3/js/modules/tabs.js":
/*!**************************************!*\
  !*** ./project_3/js/modules/tabs.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach(tabContent => {
      tabContent.classList.add('hide');
      tabContent.classList.remove('fade');
    });
    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('fade');
    tabs[i].classList.add(activeClass);
  }

  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((tab, index) => {
        if (tab == target) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
  hideTabContent();
  showTabContent();
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./project_3/js/modules/timer.js":
/*!***************************************!*\
  !*** ./project_3/js/modules/timer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(timerSpanSelector, deadline) {
  const timer = document.querySelectorAll(timerSpanSelector);

  function timeConverter(endtime) {
    const timeArray = [];
    let ms = Date.parse(endtime) - Date.now();
    timeArray[0] = ms; // timeArray[1] = parseInt(((ms) / (1000 * 60 * 60 * 24)));
    // timeArray[2] = parseInt(((ms) / (1000 * 60 * 60)) % 24);
    // timeArray[3] = parseInt(((ms) / (1000 * 60)) %60);
    // timeArray[4] = parseInt(((ms) / (1000)) %60);

    timeArray[1] = Math.floor(ms / (1000 * 60 * 60 * 24));
    timeArray[2] = Math.floor(ms / (1000 * 60 * 60) % 24);
    timeArray[3] = Math.floor(ms / (1000 * 60) % 60);
    timeArray[4] = Math.floor(ms / 1000 % 60);
    return timeArray;
  }

  setTimer();
  const timerTimeoutId = setInterval(setTimer, 1000);

  function setTimer() {
    const timeArray = timeConverter(deadline);

    for (let i = 0; i < 4; i++) {
      timer[i].textContent = timeArray[i + 1] > 0 && timeArray[i + 1] < 10 ? `0${timeArray[i + 1]}` : timeArray[i + 1];
    }

    if (timeArray[0] <= 2) {
      clearInterval(timerTimeoutId);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./project_3/js/services/services.js":
/*!*******************************************!*\
  !*** ./project_3/js/services/services.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": function() { return /* binding */ postData; }
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
}; // const getResource = async (url) => {
//     let res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//
//     return await res.json();
// }
// export {getResource}




/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/***/ (function() {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!********************************!*\
  !*** ./project_3/js/script.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./project_3/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./project_3/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./project_3/js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./project_3/js/modules/cards.js");
/* harmony import */ var _modules_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/post */ "./project_3/js/modules/post.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./project_3/js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ "./project_3/js/modules/calc.js");
__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();









window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.modalOpen)('.modal', modalTimerId), 50000);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer span', '2021-10-29T22:30');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', modalTimerId);
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_post__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    currentCounter: '#current',
    totalCounter: '#total',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    slide: '.offer__slide'
  });
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map