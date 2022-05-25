//JavaScript Program to Swap Two Variables

// let a = 'hello';
// let b = 'world';
// let temp;
// temp = a;
// console.log('temp', temp);
// a = b;
// console.log('a', a);
// b = temp;
// console.log('b', b);

//solution 2

// [a, b] = [b, a];
// console.log('a', a);
// console.log('b', b);

//JavaScript Program to Convert Kilometers to Miles

// let kilometer = 5;
// let factor = 0.62;
// let mile = kilometer * factor;
// console.log(mile);

//Javascript Program to Generate a Random Number

// let random = Math.random() * (10 - 1) + 1;
// console.log(Math.floor(random));

//Javascript Program to Check if a number is Positive, Negative, or Zero

// function checkNumber() {
//   let num = -10;
//   if (num < 0) return console.log('negative');
//   else if (num > 0) return console.log('positive');
//   return console.log('zero');
// }
// checkNumber();

//Javascript Program to Check if a Number is Odd or Even

// function oddOrEven(input) {
//   if (input > 0) {
//     if (input % 2 == 0) return 'even';
//     return 'odd';
//   }
//   return 'number should greater than zero';
// }
// console.log(oddOrEven(2));

//JavaScript Program to Find the Largest Among Three Numbers

// function largestValue(a, b, c) {
//   if (a > b && a > c) return 'a is greater';
//   else if (b > a && b > c) return 'b is greater';
//   return 'c is greater';
// }
// console.log(largestValue(25, 16, 7));

//solution 2

// console.log(Math.max(5, 7, 9));

//JavaScript Program to Check Prime Number

// function checkPrimeOrNot(input) {
//   let arr = [];
//   primeNumber: for (let i = 0; i <= input; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue primeNumber;
//     }
//     arr.push(i);
//     console.log(i);
//   }
//   if (arr.find((val) => val == input)) return console.log(true);
//   return console.log(false);
// }
// checkPrimeOrNot(6);

//JavaScript Program to Find the Factorial of a Number

// function factorial(n) {
//   return n == 1 || n == 0 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5));

// function multiplyTable(n, limit) {
//   limit = limit == undefined ? 10 : limit;
//   for (let i = 1; i <= limit; i++) {
//     console.log(`${i} * ${n} = ${i * n}`);
//   }
// }
// multiplyTable(5, 15);

//JavaScript Program to Print the Fibonacci Sequence

// function fibonacci(n) {
//   return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

//JavaScript Program to Reverse a String
// let input = 'hello';
// console.log([...input].reverse().join(''));

//JavaScript Program to Replace Characters of a String

// let input = 'helhlo';
// let replace = input.replace(/h/g, 'j');
// console.log(replace);

//JavaScript Program to Sort Words in Alphabetical Order

// let input = 'hello';
// console.log([...input].sort().join(''));

//JavaScript Program to Check Whether a String is Palindrome or Not

// function palindrome(input) {
//   let reverse = [...input].reverse().join('');
//   if (input === reverse) return 'it is palindrome';
//   return 'it is not palindrome';
// }
// console.log(palindrome('malayalam'));

//JavaScript Program to Find ASCII Value of Character

// console.log('A'.charCodeAt(0));
// console.log('a'.codePointAt(0));

//JavaScript Program to Create Objects in Different Ways

// let obj1 = {};
// let obj2 = new Object();
// let obj3 = Object.assign({});
// function ObjConstructor() {
//   this.name = 'one';
// }
// let obj4 = new ObjConstructor();
// class ObjClass {
//   constructor() {}
// }
// let obj5 = new ObjClass();
// let obj6 = Object.create({});
// console.log(typeof obj1);
// console.log(typeof obj2);
// console.log(typeof obj3);
// console.log(typeof obj4);
// console.log(typeof obj5);
// console.log(typeof obj6);

//JavaScript Program to Convert the First Letter of a String into UpperCase

// let input = 'hello world';
// console.log(
//   input
//     .split(' ')
//     .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
//     .join(' ')
// );

//JavaScript Program to Count the Number of Vowels in a String

// let input = 'helloaoo';
// let filteredVovels = input.match(/[aeiou]/gi).join('');
// console.log(`${input} ${filteredVovels} ${filteredVovels.length}`);

//JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

// let input = 'helldfo';
// let output =
//   input.charAt(0) == 'h' && input.charAt(input.length - 1) == 'o'
//     ? true
//     : false;
// console.log(output);
// let out = input.startsWith('h') && input.endsWith('o');
// console.log(out);

// let outRegex = /^h/i.test(input) && /o$/i.test(input);
// console.log(outRegex);
//JavaScript Program to Check if a Key Exists in an Object

// let obj = {
//   sno: 1,
//   userName: 'karthi',
// };
// console.log('userName' in obj);
// console.log(obj.hasOwnProperty('userName'));

// let str = `Prices: $2, €1, ¥9`;
// console.log(str.match(/\p{Sc}\d/giu));

// let goodInput = '12:34';
// console.log(/^\d\d:\d\d$/.test(goodInput));

//1. Write a JavaScript program to test the first character of a string is uppercase or not.

// let string = 'hello World';
// console.log(/^[A-Z]/.test(string));

//2. Write a JavaScript program to check a credit card number.

// let creditCard = '3567654678543212';
// console.log(creditCard.match(/^35/g));

//3. Write a pattern that matches e-mail addresses.

// let email = 'karthik.tn05@gmail.in';
// let validation = /([a-z0-9])+[.-]?([a-z0-9]+)?\@([a-z0-9]+)\.([a-z0-9]{2,3})/g;
// const result = validation.test(email)
//   ? 'it is valid email'
//   : 'it is not a valid email';
// console.log(result);

//4. Write a JavaScript program to search a date within a string.

// let input = 'Albert Einstein was born in Ulm, on 155/03/1879.';
// console.log(input.match(/\d{1,2}[\s-/]?\d{1,2}[\s-/]?\d{4}/g) || 'invalid');
