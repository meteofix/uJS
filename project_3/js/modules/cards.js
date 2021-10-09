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

export default cards;