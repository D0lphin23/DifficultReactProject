// 1) Создать переменную num со значением 266219 (тип данных число)
const num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа
let result = 1;

for (let digit of String(num)) {
    result *= digit
};

console.log(result);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
result **= 3;

console.log(result);

// 4) Вывести в консоль первые 2 цифры полученного числа
const sliceResult = String(result).slice(0, 2);

console.log(Number(sliceResult));