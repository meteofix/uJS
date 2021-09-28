
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items')

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

    //tabs[1]

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

    hideTabContent()
    showTabContent()
});