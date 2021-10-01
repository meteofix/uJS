
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

    class MenuCard {
        constructor(src, alt, title, desc, price, parentSelector, ...classes) {
             this.src = src;
             this.alt = alt;
             this.title = title;
             this.desc = desc;
             this.price = price;
             this.classes = classes;
             this.parent = document.querySelector(parentSelector)
             this.transfer = 27;
             this.changeToUah();
        }
        add(number) {
            menuItemImg[number].src = this.src;
            menuItemImg[number].alt = this.alt;
            menuItemTitle[number].textContent = this.title;
            menuItemDesc[number].textContent = this.desc;
            menuItemPriceTotal[number].textContent = this.price;
        }
        changeToUah() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element)
            } else {
                this.classes.forEach(item => element.classList.add(item));
            }
            element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element)
        }

    }
    const fitness = new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '9' ,
        '.menu__field .container',
    );
    const premium = new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '20' ,
        '.menu__field .container',
        'menu__item',
        'custom'
    );
    const post = new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        '16' ,
        '.menu__field .container',
        'menu__item',
        'custom'
    );

    fitness.render()
    premium.render()
    post.render()

    // === === === menu class end === === ===

    // === === === ajax post XMLHttpRequest start === === ===

    const forms = document.querySelectorAll('form')
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Thanks!',
        failure: 'Failure...'
    }

    forms.forEach(form => {
        postData(form);
    })

    function postData(form) {
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
            const object = {};
            formData.forEach(function (value, key){
                object[key] = value;
            })


            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then((data) => data.text())
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

    // == == красивое оповещение событий start == ==

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
    
    fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res))


    // === === === ajax post XMLHttpRequest class end === === ===

});