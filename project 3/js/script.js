
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
        modalCloseButtons = modal.querySelectorAll('[data-close]'),
        modalOpenButtons = document.querySelectorAll('[data-modal]'),
        offer2 = document.querySelector('.offer__action')

    function modalOpen () {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }
    function modalClose () {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    modalOpenButtons.forEach((item) => {
        item.addEventListener('click', modalOpen)
    })
    modalCloseButtons.forEach((item) => {
        item.addEventListener('click', modalClose)
    })

    modal.addEventListener('click', (e) => {
        if ( e.target === modal) {
            modalClose();
        }
    })
    document.addEventListener('keydown',  (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            modalClose();
        }
    })

});