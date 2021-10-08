function modal() {
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
}
module.exports = modal