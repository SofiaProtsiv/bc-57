"use strict";

/*
 * Конкатенація рядків, шаблонні рядки
*/

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/
// const name = prompt("Enter name")
// const age = prompt("Enter age")
// console.log("Hello" + name + ", your age is " + age);
/*
  ? Виконайте завдання вище, використовуючи шаблонні рядки
*/
// console.log(`Hello ${name}, your age is ${age}`);
// console.log(String.prototype);
// console.log(Number.prototype);
/*
 * Властивості та методи рядків
*/
/*
  ? Запросіть у користувача ім'я та дізнайтесь першу, третю та останню букву імені.
*/
// sofia
// 01234
// const username = prompt("Enter name")
// console.log(username.length);
// console.log(username[0]);
// console.log(username[2]);
// console.log(username[username.length - 1]);
/*
  ? Запросіть у користувача ім'я та дізнайтесь з кількох символів, що складається з ім'я.
*/
// const username = prompt("Enter name")
// console.log(username.length);
/*
  ? Попросіть користувача ввести email і переведіть у нижній регістр.
*/
// const email = prompt("Enter email")
// console.log(email.toLowerCase());
/*
  ? Попросіть користувача ввести email і переведіть у верхній регістр
*/
// console.log(email.toUpperCase());
/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?.
  ? Якщо є, дізнайтесь позицію на якій перебувати цей підрядок
*/
// const string = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'

// console.log(string.includes("JS"));
// console.log(string.indexOf("jS"));


/*
  ? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em або px;
*/
// const px ="24px"
// console.log(px.includes("%"));
// console.log(px.includes("rem"));
// console.log(px.includes("px"));
/*
  ? У нас є рядок '23,4', замініть кому на крапку
*/
const num = '23,4'.replace(",", ".")
console.log(num);
console.log(Number.parseFloat(num));
/*
  ? У нас є рядок "styles.css, about.css, portfolio.css", замініть  ".css" на ".min.css"
*/
// const str = "styles.css, about.css, portfolio.css";
// console.log(str.replaceAll(".css", ".min.css"));
/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

// console.log(str.replaceAll("dog", "monkey"));

/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
// */
// const str = 'Vasyl Pupkin is 24 years old';
// const usernameIndex = str.indexOf("Vasyl Pupkin")
// console.log(usernameIndex);

// const indexAge = str.indexOf("24");
// const separator = str.indexOf("is")

// console.log(str.slice(0, separator));
// console.log(str.slice(separator, str.length));
