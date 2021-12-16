1.
// Создайте смешанный массив, например
// [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые.
// Выведите сумму в alert

let  arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;
for(let key of arr) {
    if (!isNaN(key)) {
        sum += +key
    }
}
console.log(sum)

//
// 2.
//
// Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его элементов,
// возведенные в пятую степень, не используя функцию Math.pow().

let arr = [];
let arr2 = [];

for (let i = 0; i < 10; i++) {
    let item = (Math.random().toFixed(2));
    let item2 = 1;

    arr.push(item);

    for (let j = 0; j < 5; j++) {
        item2 *= item;
    }

    arr2.push(item2);
}
console.log(arr);
console.log(arr2);


//
// 3.
// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’,
// выведите его в alert со словами “Это здесь лишнее”

let arr = ['AngularJS', 'jQuery'];
arr.unshift('Backbone.js');
arr.push('ReactJS','Vue.js');
arr.splice(1,0,'CommonJS');
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'jQuery'){
        alert(`${arr[i]}  - это здесь лишнее`);
        arr.splice(3,1);
    }
}
alert(arr)


// 4.
// Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в порядке
// ‘Как Жак звонарь однажды сломал головой фонарь’
// с помощью любых методов массива (indexOf, splice ...).
// Затем объедините элементы массива в строку и
// выведите в alert исходный и итоговый варианты

let str = "Как однажды Жак звонарь сломал фонарь головой";
let finalStr = str.split(" ");
finalStr.pop();
finalStr.splice(1,1);
finalStr.splice(3,0,"однажды");
finalStr.splice(5,0,"головой");
finalStr = finalStr.join(" ")

alert(str)
alert(finalStr)
//
// 5.
// Создайте ассоциативный массив person, описывающий персону,
// с произвольным количеством произвольных полей.
// С помощью оператора in или typeof проверьте наличие в объекте свойства,
// прочитанного из prompt, и выведите его на экран.
// Если свойства нет, то добавляйте его в объект со значением,
// которое также запрашивается из prompt.
//
let person = {
    name : "Alina",
    age : 26,
    city : "Kharkov",
    married : false
};
let option = prompt("Введите свойство");
if( option in person) {
    alert(`${person[option]}`)
}else {
    person[option] = prompt('Введите значение свойства');
}
console.log(person)
//
// 6.
// Сгенерируйте объект, описывающий модель телефона,
// заполнив все свойства значениями, прочитанными из prompt
// (например: brand, model, resolution, color...),
// не используя вспомогательные переменные.
// Добавьте этот гаджет персоне, созданной ранее.

let phone = {};
phone.brand = prompt('Введите бренд');
phone.model = prompt('Введите модель');
phone.resolution = prompt('Введите расширение');
phone.color = prompt('Введите цвет');

person.phone = phone;

console.log(person)
//
// 7.
// Создайте объект dates для хранения дат.
// Первая дата – текущая, new Date.
// Вторая дата – текущая дата минус 365 дней.
// Из prompt читается дата в формате yyyy-MM-dd.
// Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
//
const dates = {};

let currentDate = new Date();

let userInput = new Date(prompt('Введите дату в формате (yyyy-MM-dd)'));

dates.today = currentDate.getTime();
dates.yearBefore = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)).getTime();

if (new Date(userInput.getTime()) <= new Date(dates.today) && new Date(userInput.getTime()) >= new Date(dates.yearBefore)) {
    console.log('Ваша дата в диапазоне!');
} else {
    console.log('Вы не попали в диапазон дат!');
}


// 8.

// Создайте пустой массив.
// В цикле до n на каждой итерации запускайте prompt
// для ввода любых символов, полученное значение добавляйте
// в конец созданного массива. После выхода из цикла посчитайте
// сумму всех чисел массива и выведите в alert полученный результат.
let arr = [];
let n = 5;
for (let i = 0; i < n; i++) {
    let userNumber = prompt('Введите символ');
    if (!isNaN(+userNumber)) {
        arr.push(+userNumber);
    }else{
        alert('Вы ввели не число!');
    }
}

let sum = arr.reduce((num, item) => num +item, 0);

alert(`Общая сумма равна ${sum}`)




//
// 9.
// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

let  multiplicationTable = [];

for (let i = 1; i <= 10; i++) {
    multiplicationTable[i-1] = [];

    for (let j = 1; j <= 10; j++) {
        multiplicationTable[i-1].push(`${i} x ${j} = ${i * j}`);
    }
}

console.log(multiplicationTable);
//
// 10.
// Создайте структуру данных, полностью описывающую html-разметку картинки.

let htmlImg = {
    src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    alt: "",
    style: "border: 1px solid #ccc",
    width: 200
};
let result = "<img "
for (let key in htmlImg) {
    result += key + "="  + "\"" + htmlImg[key] + "\"" + " ";
}
result += "/>"
alert(result)


