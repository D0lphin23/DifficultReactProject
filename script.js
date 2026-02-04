"use strict";

// lesson 3

// предыдущее задание методом reduce

const num = 266219;

const initialValue = 1;
let result = Array.from(String(num)).reduce(
  (acc, currentValue) => acc * currentValue,
  initialValue,
);
// можно было сразу возвести в степень, но для наглядности сделал в 2 этапа

console.log(result);

result **= 3;

console.log(result);

const sliceResult = String(result).slice(0, 2);

console.log(Number(sliceResult));

// Задание про дни недели

const weekDaysRu = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const weekDaysEn = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let lang = "ru";

if (lang === "ru") {
  console.log(weekDaysRu);
} else if (lang === "en") {
  console.log(weekDaysEn);
} else {
  console.log("Язык не поддерживается");
}

// через switch
lang = "en";

switch (lang) {
  case "ru":
    console.log(weekDaysRu);
    break;
  case "en":
    console.log(weekDaysEn);
    break;
  default:
    console.log("Язык не поддерживается");
}

// через многомерный массив

const obj = {
  ru: weekDaysRu,
  en: weekDaysEn,
};

console.log(obj[lang] || "Язык не поддерживается");

// задание многоуровневый тернарник

const namePerson = "Артем";

const role =
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Александр"
      ? "Преподаватель"
      : "Студент";

console.log(role);

// lesson 4

const longString = "Это длинная строка для проверки работы функции";

const formatedString = function (str) {
  let deleteSpaces = "";

  if (typeof str === "string") {
    deleteSpaces = str.trim();
  } else {
    return "Переданный аргумент не является строкой";
  }

  return deleteSpaces.length > 30
    ? `${deleteSpaces.slice(0, 30)}...`
    : deleteSpaces;
};

console.log(formatedString(longString));

// lesson 5

const arr = ["423", "25", "903", "777", "83", "48", "99"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "2" || arr[i][0] === "4") {
    console.log(arr[i]);
  }
}

for (let i = 2; i <= 100; i++) {
  let isSimple = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isSimple = false;
      break;
    }
  }

  if (isSimple) {
    let resultText = `Делители этого числа: 1 и ${i}`;
    console.log(i, resultText);
  }
}
