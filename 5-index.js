// "use strict";
/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на (false)брехні
//* Якщо всі операнди були дійсними, повертається останній.
//* Якщо результат false, зупиняється та повертає вихідне значення цього операнда.
// console.log(4 && 0 && 'Hello!');
// console.log(4 && "0" && "Hello!");

//* || - Запинається на правді
//* Повертає перше справжнє значення або останнє, якщо таке значення не знайдено.

console.log(localStorage.getItem("theme") || "light" );

// console.log(4 !== 0);
// const username = prompt('Your name?').trim() || 'Anonymus';
// const username = prompt("Your name?");
// console.log(username.trim());
// console.log(`Hello ${username}`);

//* ! - інвертує правду на брехню, а брехню на правду

// console.log(!false);

//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "kiwi");
// console.log(true && 0 && "kiwi");
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) >= 0);
// console.log(null || (2 && 3) || 4);

//? Перетворення типів
// console.log(2 + 5 + "" + 1 + 0);
// console.log( "" + 1 - 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log(null + 1);
// console.log(undefined + 1);