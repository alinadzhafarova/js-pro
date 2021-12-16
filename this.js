//1. Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное
let calculator = {
    read() {
        this.x = +prompt('Введите первое число');
        this.y = +prompt('Введите второе число');
    },
    sum() {
        return this.x + this.y;
    },
    multi() {
        return this.x * this.y;
    },
    diff() {
        return this.x - this.y;
    },
    div() {
        return this.x / this.y;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.multi());

//
// 2.Создайте объект coffeeMachine со свойством message:
// ‘Your coffee is ready!’ и методом start(), при вызове которого
// – coffeeMachine.start() – через 3 секунды появляется окно с сообщением,
// записанным в свойстве объекта message.
let coffeeMachine = {
    message: 'Your coffee is ready!',
    start() {
        setTimeout(function () {
            alert(this.message);
        }.bind(this), 3000);
    }
}
coffeeMachine.start()
//
// 3.Создайте объект counter с методами увеличения,
// уменьшения значения счетчика и методом возврата текущего значения.
// Используйте концепцию chaining для создания цепочки вызовов.
let counter = {
    count: 0,

    increase() {
        this.count++;
        return this;
    },
    decrease() {
        this.count--;
        return this;
    },
    getValue () {
        return this.count;
    }
};

let current = counter.increase().increase().decrease().increase().decrease().getValue();
alert(current);
//
// 4.Создайте объект с данными: x, y и методами:
// getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют,
// а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’.
// Для расчетов все методы используют функционал ранее созданного калькулятора.
let analogueCalculator = {
    getSum (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' + ' + this.y + ' = ' + calculator.sum.call(this, this.x, this.y);
    },
    getDiff(x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' - ' + this.y + ' = ' + calculator.diff.call(this, this.x, this.y);
    },
    getMulti (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' * ' + this.y + ' = ' + calculator.multi.call(this, this.x, this.y);
    },
    getDiv (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' / ' + this.y + ' = ' + calculator.div.call(this, this.x, this.y);
    }
};

alert(analogueCalculator.getSum(1, 1));

alert(analogueCalculator.getDiv(1, 0));

// 5.Допишите код, чтобы в консоли браузера появились строки,
//     которые написаны в комментариях
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', '');
format.apply(country, ['[', ']']);
format.call(country.capital, '', '');
format.apply(country.capital, ['', '']);
format.apply();

// 6.Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
// Привяжите функцию format() к объекту user таким образом,
// чтобы ее вызов возвращал отформатированное имя пользователя
// Реализуйте решение текущего задания используя метод bind().

const user = {
    name: 'John'
};

function format(start, end) {
  console.log(start + this.name + end);
}

let userFormat =  format.bind(user);
userFormat('<<<', '>>>');

// 7.Напишите функцию concat, которая соединяет две строки,
// разделенные каким-то символом: разделитель и строки передаются в параметрах функции.
// Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому,
// кто передан в ее параметре:
function concat(str1, str2, sep = ' ') {
    return console.log(str1 + sep + str2);
}

let hello = concat.bind(null, 'Hello');

hello('World');
hello('John');

// 8.Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3)
// a) используя цикл
// b) используя рекурсию:
function cubeWithRecursion(num, pow = 3) {
    if(pow !== 1) {
        return num * cubeWithRecursion(num, pow - 1);
    }

    return num;
}
console.log( cubeWithRecursion(2) )



function cubeWithFor(num) {
    let cube = num;

    for (let i = 1; i < 3; i++) {
        cube *= num;
    }

    return cube;
}

console.log( cubeWithFor(2) );

// 9.Придумайте алгоритм расчета суммы всех фактических параметров функции
// с использованием только рекурсии:

function sum(...args) {
    if (args.length > 0) {

        return args[0] + sum(...args.slice(1));
    }
    return 0;
}

console.log(sum(1, 2, 3, 4, 5));

