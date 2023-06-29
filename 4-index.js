/*
 * Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
 */

/*
 * Результатом порівняння буде булливе значення.
 * Рядки порівнюються по unicode https://www.asciitable.com/asciifull.gif
 * При порівнянні рядків, рядки порівнюються посимвольно.
 * При порівнянні різних типів, операнди наводяться до числа.
 * null не дорівнює нічому крім себе та undefined.
 * undefined не дорівнює нічому крім себе та null.
 */
// console.log("a" < "A");
// console.log("n", "n".charCodeAt(0));
// console.log("l", "l".charCodeAt(0));
// console.log("a" + "A" > "b" + "B");
// console.log("c".charCodeAt(0));
// console.log("apple" > "aPPLE");
// console.log(null === undefined);
/*
 * Приведення різних типів до числа:
 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 * NaN --> 0
 * 0 --> 0
 */

// const str = prompt("enter name").trim()
// console.log(str);
// console.log(Boolean(str));
// // if(str.length === 0){
// if(str.length !== 0){
//     console.log("рядок не пустий");
// }else{
//     console.log("рядок пустий");
// }

//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log("a" < "b");
// console.log("b" < "a");
// console.log("A" < "a");
// console.log("a p p l e" < "a p p n anana");
// console.log("apple" > "yellow");
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не суворе рівенство (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined === null);

// console.log("123" === 123);
// console.log(true == " ");
// console.log(4 === 5 - true);

//* Суворе рівенство (===)
// console.log("123" === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Не дорівнює (!=)
// console.log("4" != 4);

//* Суворе не дорівнює (!==)
// console.log("4" !== 4);

// console.log(!!true);

