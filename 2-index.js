"use strict";
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/
const a = "20";
const b = "10";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
/*
 ? Перевірте чи парні числа 15, 20, 45, 30.
*/
const odd = 23 % 2;
// console.log(odd);
/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
const totalMinutes = 161;
let hours = Number.parseInt(totalMinutes / 60);
let minutes = totalMinutes % 60;
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");

// console.log(hours + ":" + minutes);
// console.log(`${hours}:${minutes}`);
/*
 * Number.parseInt() Number.parseFloat()
 */

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// const number = prompt("Enter number");
// console.log(Number.parseFloat(number));
// console.log(+number);

/*
  ? Даний рядок '24px', дістаньте з цього рядка ціле число.
*/
// console.log(Number("24px")); //NaN
// console.log(+"24px"); //NaN
// console.log(Number.parseInt("24px"));
/*
  ? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
*/
// console.log(Number.parseFloat("25%"));
/*
  ? Спробуйте привести до числа рядок 'abc'. (typeof)
*/
// const result = 1/0;
// console.log(result);
// console.log(Number("abc"));
// console.log(typeof NaN);
// console.log(typeof 1);
// console.log(typeof result);
/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */
// console.log(Math.ceil(3.4)); //4
// console.log(Math.floor(3.9)); //3
// console.log(Math.round(3.5)); // 4
// console.log(Math.round(3.2)); // 3
// console.log((12345.6859).toFixed(2));
// console.log(Math.max(20, 10, 50, 40, 94)); // 94
// console.log(Math.min(20, 10, 50, 40, 94, -4)); // -4
// // console.log(...[20, 10, 50, 40, 94, -4]);
// console.log(Math.min(...[20, 10, 50, 40, 94, -4])); // -4
// console.log(Math.pow(2, 4));
// console.log(2 ** 4);

// const max = 10;
// const min = 1;
// console.log(Math.floor(Math.random() * (max - min) + min));

/*
  ? Дане число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = prompt("Enter num")
// console.log(Math.pow(num, 2));
/*
  ? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача
*/
// variant 1
// const min = 50;
// const max = 100;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);

// variant 2
// console.log(Math.floor(Math.random() * 25));