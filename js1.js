/**
 * 
 * @param width
 * @param height
 * @param h
 * @param l
 * @param w
 * @returns {number}
 */
function resCount(width, height, h, l, w) {
    var s = squareRoom(width, height, h);
    var so = l * w;
    return s / so;
}

console.log('' == false)

/**
 *
 */
var a;
var b = null;
console.log(a == b);
console.log(a === b);

/*
var x = 1;
console.log(++x)

var one =1;
var five = 5;

console.log(one++ + five++)
*/

/*// 4
// Напишите функцию, которая по размерам комнаты (ширина, длина, высота) возвращает площадь стен комнаты.
// Затем примените ее в программе, которая по размерам комнаты вычисляет - сколько нужно взять рулонов обоев,
// чтобы оклеить эту комнату? Размеры рулона тоже, разумеется, нужно задать.
function squareRoom(width, height, h) {
    return width * height * h;
}

function resCount(width, height, h, l, w) {
    var s = squareRoom(width, height, h);
    var so = l * w;
    return s / so;
}

console.log(resCount(5, 5, 1, 1, 1))*/

/*
// 3
var x = 2;
function editX() {
    //var x = 3;
    return x + 2;
}
//editX();
console.log(x)
console.log(editX())
*/

/*// 2
// Чтобы создать объект, в JS можно использовать синтаксис с фигурными скобками (пересмотрите, как мы делали это на уроке).
var man = {
    name: 'saf',
    lastName: 'yaylyaev',
    birthDay: 1993,
    birth: function (year) {
        return year - man.birthDay;
    }
}
//console.log(man.birth(2020))

// А как к существующему объекту добавить новое свойство? Догадайтесь, покажите в коде.
man.hasWife = true
console.log(man)

// А что произойдет, если обратиться к незаданному свойству объекта? Опять же - проиллюстрируйте кодом.
//console.log(man.child) // undefined


// Найдите способ (прочитав документацию) удалить свойство из объекта. И тоже используйте его в вашем коде.
delete man.lastName
console.log(man)*/

// 1
// Изучите поведение оператора "+": как он работает с числами, как - со строками. Напишите код, который наглядно проиллюстрирует ваше исследование.
/*var a = '4';
var b = 4;

console.log(a + b);
console.log(b + a);
console.log(b + b);
console.log(a + a);
console.log(b + 5);
console.log(+a + b);*/


















/*
console.log('hello')
var table = {
    name: 'saf',
    lastName: 'yaylyaev',
    age: 27
}

console.table(table)*/
/*

var x = 10;

var sum = function (a, b) {
    x = 42;
    var y = 42; // внутри функции и останется
    return x + a + b;
};

x = 20;

console.log(sum(3, 2))
console.log(x)
*/

// var x = y = 0;
// console.log(x);

