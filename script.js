'use strict';

// 1) Создать переменную num со значением 266219 (тип данных число)
// const num = 266219;

// // 2) Вывести в консоль произведение (умножение) цифр этого числа
// let result = 1;

// for (let digit of String(num)) {
//     result *= digit
// };

// console.log(result);

// // 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
// result **= 3;

// console.log(result);

// // 4) Вывести в консоль первые 2 цифры полученного числа
// const sliceResult = String(result).slice(0, 2);

// console.log(Number(sliceResult));

// lesson 3

// предыдущее задание методом reduce

const num = 266219;

const initialValue = 1;
let result2 = Array.from(String(num)).reduce((acc, currentValue) => acc * currentValue, initialValue);
// можно было сразу возвести в степень, но для наглядности сделал в 2 этапа

console.log(result2);

result2 **= 3;

console.log(result2);

const sliceResult2 = String(result2).slice(0, 2);

console.log(Number(sliceResult2));


// Задание про дни недели

const weekDaysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const weekDaysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let lang = 'ru';

if (lang === 'ru') {
    console.log(weekDaysRu);
} else if (lang === 'en') {
    console.log(weekDaysEn);
} else {
    console.log('Язык не поддерживается');

}

// через switch
lang = 'en';

switch (lang) {
    case 'ru':
        console.log(weekDaysRu);
        break;
    case 'en':
        console.log(weekDaysEn);
        break;
    default:
        console.log('Язык не поддерживается');
}

// через многомерный массив

const obj = {
    'ru': weekDaysRu,
    'en': weekDaysEn
}

console.log(obj[lang] || 'Язык не поддерживается');


// задание многоуровневый тернарник

const namePerson = 'Артем';

const role = (namePerson === 'Артем') ? 'Директор' :
    (namePerson === 'Александр') ? 'Преподаватель' : 'Студент';

console.log(role);