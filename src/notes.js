'use strict'
// === === ===  Нововведения в ES6  === === === === === === === === === === === === === === === === ===

// == стрелочные функции ==
// == оператор spread для массивов (начиная с ES9 - и для объектов ==
// == деструктуризация ==
const obj = {
    subObject: {
        str: '',
        num: 5
    }
}
const {str, num} = obj.subObject;


// === === ===  Методы и свойства строк и чисел  === === === === === === === === === === === === === ===

const string = 'Пример какой-то строки';
string.toUpperCase()                            // вернуть строку с большими буквами
string.toLowerCase()                            // вернуть строку с маленькими буквами
string.indexOf('какой')                         // [7]: поиск подстроки, если подстрока не найдена - возвращает [-1]
string.slice(7, 15)                             // ['какой-то']: вырезает часть строки по индексу, последний индекс НЕ ВКЛЮЧИТЕЛЬНО.
                                                // если второй аргумент не указан - вырезается часть до конца строки.
                                                // если указать отрицательное значение, отсчет ведется с конца строки
string.substring(7,15)                          // ['какой-то']: почти как slice, не поддерживает отрицательные значения
string.substr(7,7)                  // ['какой-то']: вырезает часть строки по индексу и длине

const number = 12.2;
Math.round(number)                              //[12]: округление числа до ближайшего целого

const test = '12.2px';
parseInt(test)                                  // [12]: перевод строки в целое число
parseFloat(test)                                // [12]: перевод строки в число с плавающей точкой

// == превращение в строку ==

// 1)
let someString = String(null)             // редко используемый способ
// 2)
someString = null + ''                         // при конкатенации чего-либо со строкой получается строка

// == превращение в число ==

// 1)
let someNumber = Number('45')             // редко используемый способ
// 2)
someNumber = +'46'                              // унарный плюс
// 3)
someNumber = parseInt('15px', 10)      // нечасто используется, второй аргумент - система исчисления

// == превращение в boolean ==
// 1)
// 0, '', null, undefined, NaN;                 // нативное преобразование, перечисленное превращается в false, все остальное - в true
// 2)
let someBoolean = Boolean('4')            // редко, так как есть нативное
// 3)
someBoolean = !!'444'                           // еще более редкий прием


// === === ===  Методы и свойства объектов  === === === === === === === === === === === === === === ===

const object = {
    string: 'some string',
    number: 22,
    toDelete: '',
    makeTest: function () { }                   // создание метода в объекте
}
const add = {
    d: 17,
    e: 20
}

for (let key in object) { }                     // перебор опций объекта
delete object.toDelete;                         // позволяет удалить элемент из объекта
Object.keys(object)                             // создает массив из ключей объекта
Object.assign(object, obj)                      // объединить два объекта (объект в который нуно поместить, объект который нужно добавить

// !!!!!!!!!!
// Рассмотреть передачу по ссылке и по значению, копии объектов
// !!!!!!!!!!
// 1) Поверхностная копия через цикл

function copy1(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy;
}

// 2) Поверхностная копия через Object.assign

Object.assign({}, add);                                     // клонируем add в пустой объект

// 3) Поверхностная копия массива

// array.slice()                                                  // создать поверхностную копию массива

// 4) Новейший способ поверхностной копии - spread

// const newArray = {...array}
const newObject = {...object}                              // можно также развоорачивать массивы в объект. аоборот - нельзя


// === === ===  Методы массивов  === === === === === === === === === === === === === === === === === ===

const array = [1, 2, 3, 6, 8]

array.pop();                                    // удаляет последний элемент из массива и возвращает его
array.push(10);                                 // добавляет элемент в конец массива
for (let value of array) { }                    // перебор значений массива, работает break и continue
array.forEach(function (                        // перебор значений массива и применение функции к каждому элементу
    item,                               // значеение элемента
    index,                              // индекс элемента
    array) {                           // ссылка на массив

})
array.map(a => {})                             // перебирает и модифициррует элементы, возвращая новый массив
//array.filter()                               // отфильтровываем массив по заданному критерию
const split = string.split(' ')        // превращает строку в массив по разделителю
split.join('_')                                // превращает массив в строку по разделителю
array.sort()                                   // сортировка элементов массива (как строк, по первым символам)
// http://algolist.ru/sort/quick_sort.php      // инфо про алгоритм быстрой сортировки
function compareNum(a, b) {
    return a - b;
}
array.sort(compareNum)                         // для правильной сортировки чисел
array.slice()                                  // создать поверхностную копию массива
//array.splice(i, c)                             // удаляет элементы из массива, (номер, количество)

// Псевдомассивы - выглядят как массивы, но не имеют их методов


// === === ===  Работа со страницей  === === === === === === === === === === === === === === === === === ===

const hi = document.getElementById('hi')
const sub = document.querySelectorAll('.sub')       // обращение ко всем элементам по селектору
const wr = document.querySelector('.wrapper')       // обращение к первому элементу по селектору
const div = document.createElement('div')           // создает элемент div
const btn1 = document.querySelector('#btn1')
const sub2 = document.querySelector('[data-current="2"]')   // обращение по селектору - дата-атрибуту
const btns = document.querySelectorAll('button')

wr.append(div)                                              // добавляет элемент div в конец .wrapper
wr.prepend(div)                                             // добавляет элемент div в начало .wrapper
sub[0].after(div)                                           // добавляет элемент div после первого sub
sub[1].before(div)                                          // добавляет элемент div перед третьим sub
sub[0].remove()                                             // удаляет первый элемент sub
sub[2].replaceWith(sub[1])                                // заменяет второй элемент sub на hi, причем удаляет hi с прошлого места

div.classList.add('black')                                  // добавляет элементу div класс black
//div.innerHTML = '<h1>Hello</h1>'                            // добавляет html в элемент
//div.textContent = 'Hello';                                  // добавляет текст в элемент

//div.insertAdjacentHTML('', '<h2>Hello2</h2>')     // добавляет html перед, в начало, в конец или после элемента

wr.childNodes                                               // возвращает псевдомассив дочерних узлов (нод)
wr.firstChild                                               // возвращает первую ноду
wr.lastChild                                                // возвращает последнюю ноду
btn1.parentNode                                             // возвращает родительскую ноду
sub2.nextSibling                                            // возвращает следующую ноду
sub2.previousSibling                                        // возвращает предыдущую ноду


wr.firstElementChild                                        // возвращает первый элемент
wr.lastElementChild                                         // возвращает последний элемент
btn1.parentElement                                          // возвращает родительский элемент
sub2.nextElementSibling                                     // возвращает следующий элемент
sub2.previousElementSibling                                 // возвращает предыдущий элемент
for (let node of wr.childNodes) {                           // избавляемся от текстовых нод в childNodes
    if (node.nodeName == '#text') {
        continue;
    }
}


// === === ===  События и обработчики событий  === === === === === === === === === === === === === === === === === ===

const btn = document.querySelector("button")
const listener = (event) => {
    event.preventDefault();                                  // отменяет стандартное поведение браузера, пишется в начале
    event.target;                                            // элемент, на котором сработало собитые
    event.currentTarget;                                     // элемент, на котором сработал текущий слушатель (если есть всплытие событий)

}
btn.addEventListener('click', listener)                 // добавляет слушатель события на элемент в порядке очереди
btn.removeEventListener('click', listener)              // удаляет слушатель события с элемента
//input.addEventListener('change', listener)                 // событие change происходит, когда input теряе фокус


// == == == События на мобильных устройствах == == == == == == ==

// touch addEventListeners
// touchstart - событие при касании к элементу
// touchmove - событие при касании и однвременном смещении
// touchend - событие при прикращении касания
// touchenter - событие при попадании на элемент в процессе скольжения пальцем по экрану
// touchleave - событие при выходе за пределы элемента в процессе скольжения пальцем по экрану
// touchcancel - событие срабатывает, когда точка соприкосновения больше не регистрируется на поверности

// свойства event touch
// touches - выдает список всех пальцев, взаимодействующих с экраном
// targetTouches - выдает список всех пальцев, взаимодействующих с элементом
// changedTouches - выдает список всех пальцев, учавствующих в текущем событии
//                  (будет содержать даже убранные пальцы, если все еще есть неубранные


// === === ===  Загрузка скриптов на странице  === === === === === === === === === === === === === === === === === ===

// <script defer src=''></script>   - скрипт с defer не блокирует загрузку DOM-структуры, подгружает скрипт паралельно DOM,
//                                    срабатывает когда DOM готов. Несколько скриптов с defer загружаются последовательно
// <script async src=''></script>   - скрипты с async выполняются независимо от загрузки DOM и других скриптов, как только загрузятся


// === === ===  classList  === === === === === === === === === === === === === === === === === ===

sub[0].classList.length                         // возвращает количество классов элемента
sub[0].classList.item(0)                  // возвращает класс элемента по индексу
sub[0].classList.add('new', 'new2')             // добавляет классы элементу
sub[0].classList.remove('new', 'new2')   // удаляет классы у элемента
sub[0].classList.toggle('new')           // если класса нет - добавляет, если есть - удаляет

if (sub[0].classList.contains('new')){}         // проверка на наличие класса, возвращает true или false


// === === ===  setTimeout и setInterval  === === === === === === === === === === === === === === === === === ===

let intervalCount = 0;

const setFunc = (dd) =>{
    div.insertAdjacentHTML('beforeend', dd)
    intervalCount++
    hi.textContent = `${intervalCount}`

}
//const timerId =                                                   // индентификатор таймаута
//    setTimeout(setFunc, 2000, ' ololo ')                          // позволяет вызвать любую операцию через промежуток времени
const intervalId =
    setInterval(setFunc, 500, ' lol')             // позволяет повторять любую операцию через интервал, не ждет выполнения кода
clearInterval(intervalId)                                              // сброс таймера по идентификатору


// === === ===  Date  === === === === === === === === === === === === === === === === === ===

const now = new Date();                                             // получаем сегодняшнюю дату и время
now.getFullYear()                                                   // метод, получающий год
now.getMonth()                                                      // метод, получающий месяц. Номерация месяцев начинается с нуля!
now.getDate()                                                       // метод, получающий день
now.getDay()                                                        // метод, получающий день недели. Воскресенье - 0 день
                                                                    // аналогично можно получить время.
                                                                    // есть аналогичные команды для UTC
now.getTimezoneOffset()                                             // возвращает разницу в минутах между текущим и нулевым поясами
now.getTime()                                                       // возвращает количесвто мс, прошедших с 1.01.1970
Date.parse('2021-10-29T22:30')                                   // Парсит дату из строки
now.setHours(18, 40, 4)                            // устанавливает часы (а также минуты, секунды и мс). Аналогично остальные get=>set


// === === ===  Document, window  === === === === === === === === === === === === === === === === === ===


hi.clientHeight                                                     // высота без margin и border
hi.clientWidth                                                      // ширина без margin и border
hi.offsetHeight                                                     // высота с учетом margin, border и полосы прокрутки
hi.offsetWidth                                                      // ширина с учетом margin, border и полосы прокрутки
hi.scrollHeight                                                     // высота с учетом margin, border и всей прокрутки, без полосы
hi.scrollWidth                                                      // ширина с учетом margin, border и всей прокрутки, без полосы
hi.scrollTop                                                        // высота невидимой части вверху, которую можно прокрутить. Изменяемо
hi.getBoundingClientRect()                                          // получить координаты относительно левого верхнего края
hi.getBoundingClientRect().top                                      // получить координаты сверху относительно левого верхнего края
window.getComputedStyle(hi/*, after*/)                              // получить примененные стили элемента. Можно получить стили псевдоэлементов
window.getComputedStyle(hi).display                                 // получить значение примененного стиля display у элемента
hi.scrollTop = 300                                                  // модификация scrollTop
hi.scrollBy(0, 400)                                           // скролл по (x, y) относительно текущей позиции
hi.scrollTo(0, 400)                                           // скролл по (x, y) относительно начала страницы
window.pageYOffset                                                  // сколько пикселей пользователь прокрутил сверху


document.addEventListener('keydown',  (e) => {      // обработчик нажатия клавиши
    if (e.code === "Escape") {}                                                 // https://keycode.info/
});

btns[2].addEventListener('click', () => {
    //hi.style.height = hi.scrollHeight + 'px';
    hi.scrollBy(0, 400)
})


// === === ===  Функции-конструкторы. Контекст вызова. This  === === === === === === === === === === === === === === === === === ===

function User(name, id) {                                   // функция-конструктор
    this.name = name;
    this.id = id;
    this.function = function () {};
}
User.prototype.method = function () {}                      // добавляем методы или свойства в уже существующую функцию. Метод будет у всех последующих объектов
const ivan = new User('Ivan', 28);                // объект,созданный функцией-конструктором
// Классы - синтаксический сахар для функций-конструкторов
// Функция может вызываться четырьмя способами. и в каждой контекст вызова отличается

// 1) Обычная функция
function showThis() {                                       // Если не используется 'use strict' - возвращает объект Window
    console.log(this)                                       // Если используется 'use strict' - возвращает undefined
}
//showThis();

// 2) Функция - метод объекта
const objThis = {
    a: 20,
    b: 15,
    sum: function () {                                       // Контекс у методов объекта - сам объект
        console.log(this)
    }
}
//objThis.sum();

// 3) Конструкторы
function This(name, id) {                                   // Контекст в конструкторах и классах - новый экземпляр объекта
    this.name = name;
    this.id = id;
    this.function = function () {};
}

// 4) Ручная привязка this: call, apply, bind
function sayName(surname) {
    console.log(this)
    console.log(this.name + surname)
}
const user = {
    name: 'John'
}
//sayName.call(user, 'Smith');                                         // передаем контекст вызова в функцию.
//sayName.apply(user, ['Smith']);                                      // то же самое. Разницы в функциональности нет, только в синтаксисе

function count(num) {                                                // создает новую функцию, и подвязывает контекст
    return this*num;
}
//const double = count.bind(2);
//console.log(double(3))

// == == == Примеры == == ==

btns[3].addEventListener('click', function (){          // если классическая функция - контекстом будет сам объект 
    console.log(this)
    this.style.backgroundColor = 'red'
})
const obj2 = {
    num: 5,
    sayNumber: function () {
        const say = () => {                                           // стрелочная функция не имеет своего контекста и берет его у родителя
            console.log(this.num)
        };
        say();
    }
}
//obj2.sayNumber()


// === === ===  Классы  === === === === === === === === === === === === === === === === === ===



// === === ===  Rest оператор и параметры по умолчанию  === === === === === === === === === === === === === === ===

// Spread берет сущность  раскладывает ее на отдельные элементы
// Rest отдельные элементы объединяет в один массив

const log = function (a, b, ...rest) {
    console.log(a, b, rest)
}
//log('basic','rest', 'operator', 'usage')

function calcOrDouble(number, basis = 3) {
    //basis = basis || 3

    console.log(number * basis)
}
//calcOrDouble(2, 3)


// === === ===  JSON  === === === === === === === === === === === === === === === === === === === === ===


const person = {
    name: "Alex",
    tel: "+380677777777",
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
}
const strng = JSON.stringify(person)                                    // Переводит в подходящий для передачи формат json
const clone = JSON.parse(strng)                                         // Переводит из json назад
                                                                        // две операции выше осуществили глубокое копирование

// === === ===  AJAX (asynchronous Javascript and XML) и общение с сервером. Promises === === === === === === === === ===

// 1) XML HTTP Request - уже не совсем актуален

const inputUah = document.querySelector('#uah'),
    inputUsd = document.querySelector('#usd')

inputUah.addEventListener('input', (e) => {
    const request = new XMLHttpRequest();

    //// далее - методы XMLHttpRequest
    request.open(                                               // метод open(method, url, async, login, password) собирает настройки запроса
        'GET',
        'notes.json'                                        // путь нужно указывать относительно html файла
    );
    request.setRequestHeader(                                   // указать серверу, что в запросе
        'Content-type',                                   // имя - тип контента
        'application/json; charset=utf-8'                 // тип контента и кодировка
    )
    request.send()                                              // отправляем запрост (для некоторых методов, например пост, принимает аргумент body)

    //// далее - свойства XMLHttpRequest
    request.status                                              // статус запроса (например 404)
    request.statusText                                          // текстовое описание статус запроса (например NOT FOUND)
    request.response                                            // ответ от сервера
    request.readyState                                          // текущее состояние объекта. https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

    //// далее - события XMLHttpRequest
    // интуитивно понятные: loadstart, progress, abort, timeout, loadend
    
    // request.addEventListener('readystatechange', () => {        // событие, следящее за readyState
    //     if (request.readyState === 4 && request.status === 200) {
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = '$' + (+e.target.value / data.current.usd).toFixed(2);   // округлили до двух знаков
    //     } else {
    //         inputUsd.value = 'Error'
    //     }
    // })

    request.addEventListener('load', () => {                    // событие, когда запрос завершен
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = '$' + (+e.target.value / data.current.usd).toFixed(2);   // округлили до двух знаков
        } else {
            inputUsd.value = 'Error'
        }
    })

    // request.setRequestHeader('Content-type', 'multipart/form-data');      // при использовании FormData и XMLHttpRequest хедер не писать!
    const formData = new FormData('form');                                   // позволяет собрать все данные с аттрибутом name из формы

})

// 2) Promises

//console.log('Zapros')
const req = new Promise(function (resolve, reject){                  // создаем промис
    setTimeout(() => {                                                // асинхронная функция
        //console.log('Podgotovka')
        const product = {
            name: 'TV',
            price: '2000'
        }
        resolve(product);                                                    // в случае успеха
        reject();                                                            // в случае неудачи
    }, 2000)
})

req.then((product) => {                                                      // начинаем вызов цепочки промисов
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product)
        }, 2000)
    })
}).then(data => {                                                            // второй промис
    data.modify = true;
    return data;
}).then((data) => {
    //console.log(data);
}).catch(() => {                                                             // обработка ошибки
    //console.error('ERROR')
}).finally(() => {                                                   // после всего,в любом случае
    //console.log('Finally')
})

//Promise.all([promise1(), promise2()]).then(() => {})                    // ждет выполнения всех промисов, и выполняется дальше
//Promise.race([promise1(), promise2()]).then(() => {})                    // ждет выполнения первого промиса, и выполняется дальше

// 3) Fetch API (application programming interface)

fetch('https://jsonplaceholder.typicode.com/posts',{            // объект с настройками запроса
    method: "POST",
    body: JSON.stringify({name: 'alex'}),
    headers:{
        'Content-type': 'application/json'
    }
})
    .then(response => response.json())                                      // метод fetch, аналог JSON.parse. Возвращает промис
    .then(json => console.log(json))



// Shift+F5 - сброс кеша

console.log()