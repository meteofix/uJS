function post() {
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
}

module.exports = post;