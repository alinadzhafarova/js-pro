// 1.Напишите функцию max, которая сравнивает два числа и возвращает большее:
let max = (a, b) => {
    if (a > b) return a;
    else return b
}
console.log(max(0, -1));


// 2.Напишите функцию-аналог Math.min(). Функция принимает любое количество
// чисел и возвращает меньшее из них:
function min() {
    let arr = [...arguments];

    if (arr.length === 0) return
    if (arr.length === 1) return arr[0];

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log( min(0, -1, 100, 500, 100500));

// 3.Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
// каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:
//     Отфильтруйте пользователей младше 18 лет
// Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// Сформируйте новый массив, который содержит только полное имя пользователей
let users = [
    {firstname: "Alina", lastname: "Ivanova", age: 1},
    {firstname: "Artem", lastname: "Ivanov", age: 15},
    {firstname: "Dima", lastname: "Petrov", age: 19},
    {firstname: "Anastasia", lastname: "Petrova", age: 21},
    {firstname: "Vanya", lastname: "Bond", age: 28},
    {firstname: "Denis", lastname: "Doe", age: 32},
    {firstname: "Kiril", lastname: "Romanenko", age: 37},
    {firstname: "Dasha", lastname: "Kozlov", age: 44},
    {firstname: "Masha", lastname: "Kozlova", age: 49},
    {firstname: "Vlad", lastname: "Marchenko", age: 52},

];
let youngUsers = users.filter((user) => user.age < 18)

console.log("Эти пользователи младше 18 :", youngUsers);


users.forEach((item, i, users) => {
    item.fullName = item.firstname + " " + item.lastname
})

console.log(users);

let onlyFullName = users.map((item => item.fullName))

console.log(onlyFullName);

//
// 4.Напишите функцию аналог метода массива shift.
//   Функция удаляет из переданного в параметре массива первый элемент.
let deleteFirstElement = ((arr) => {
    arr.splice(0, 1)
    return arr
})
console.log(deleteFirstElement([1, 2, 3, 4, 5, 6, 7, 8]))

// 5.Напишите функцию аналог метода массива push.
//  Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
function addElemToEnd(arr) {
    let allArguments = [...arguments]
    let argumentsToAddInTheArray = deleteFirstElement(allArguments)
    arr.splice(arr.length, 0, ...argumentsToAddInTheArray);
    return arr;
}

console.log(addElemToEnd([1, 2, 3, 4, 5], 6, 7, 8))

// 6.Напишите функцию аналог метода Object.assign().
// Первый параметр функции - целевой объект,
// поля которого будут изменены или расширены. Остальные параметры - объекты-источники,
// полями которых будет расширяться целевой объект.

function extend(source) {
    let obj = {};

    for (let i = 1; i < arguments.length; i++) {
        obj = {
            ...obj,
            ...arguments[i]
        };
    }

    return {
        ...source,
        ...obj
    }
}
var source = {firstname: 'Tom', age: 10};
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'}, );
console.log(s);

//
// 7.Напишите функцию setComment с параметрами: date, message, author.
// Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют,
// то выполнение функции должно обрываться, а пользователю выдаваться предупреждение
// (alert) о том, что данные переданы некорректно. Параметр author - опциональный,
// но должна происходить проверка: если параметр не передан,
// то вместо него подставляется значение ‘Anonymous’.
// Функция распечатывает в консоле текст в формате:

function setComment(date, message, author) {
    if ((!date || !message) || (!date && !message))
        return alert("Данные переданы некорректно");
    author = author || "Anonymous";

    console.log(author + "," + date + "\n" + message)
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!')

//
// 8.Используя замыкание, напишите функцию createTimer, которая использует
// метод performance.now() для получения текущей временной метки
// и служит для замера времени выполнения другого кода
// (код менять, видоизменять нельзя, как написан так и должен остаться):
function createTimer() {
    let timeNow = performance.now();
    return () => {
        let leadTime = performance.now();
        return `Время выполнения - ${leadTime - timeNow} миллисекунд`;
    }
}

let timer = createTimer();
alert ('!')
alert( timer() );

// 9.Используя замыкания, создайте функцию createAdder(),
// которая принимает на вход любой примитивный параметр и возвращает функцию,
// которая добавляет к первому параметру второй.
// Функция работает по следующему принципу:
function createAdder(arg1) {
    return arg2 => arg1 + arg2;
}

var hello = createAdder('Hello, ');
alert(hello('John'));
alert(hello('Harry'));

var plus = createAdder(5);
alert(plus(1));
alert(plus(5));