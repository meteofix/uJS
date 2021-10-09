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

export default modal;
export {modalClose, modalOpen}