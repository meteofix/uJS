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

export default calc;