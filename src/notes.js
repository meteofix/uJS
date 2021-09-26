
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
for (let key in object) { }                     // перебор опций объекта
delete object.toDelete;                         // позволяет удалить элемент из объекта
Object.keys(object)                             // создает массив из ключей объекта
Object.assign(object, obj)                      // объединить два объекта

// !!!!!!!!!!
// Рассмотреть передачу по ссылке и по значению, копии объектов
// !!!!!!!!!!


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
array.splice(i, c)                             // удаляет элементы из массива, (номер, количество)

// Псевдомассивы - выглядят как массивы, но не имеют их методов


// === === ===  Работа со страницей  === === === === === === === === === === === === === === === === === ===

const hi = document.getElementById('hi')
const sub = document.querySelectorAll('.sub')       // обращение ко всем элементам по селектору
const wr = document.querySelector('.wrapper')       // обращение к первому элементу по селектору
const div = document.createElement('div')           // создает элемент div
const btn1 = document.querySelector('#btn1')
const sub2 = document.querySelector('[data-current="2"]')   // обращение по селектору - дата-атрибуту

wr.append(div)                                              // добавляет элемент div в конец .wrapper
wr.prepend(div)                                             // добавляет элемент div в начало .wrapper
sub[0].after(div)                                           // добавляет элемент div после первого sub
sub[1].before(div)                                          // добавляет элемент div перед третьим sub
sub[0].remove()                                             // удаляет первый элемент sub
sub[1].replaceWith(hi)                                      // заменяет второй элемент sub на hi, причем удаляет hi с прошлого места

div.classList.add('black')                                  // добавляет элементу div класс black
div.innerHTML = '<h1>Hello</h1>'                            // добавляет html в элемент
div.textContent = 'Hello'                                   // добавляет текст в элемент
div.insertAdjacentHTML('', '<h2>Hello</h2>')     // добавляет html перед, в начало, в конец или после элемента

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





console.log()
