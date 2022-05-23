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
