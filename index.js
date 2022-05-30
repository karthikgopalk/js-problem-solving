//81. Write a JavaScript program to add two digits of a given positive integer of length two.

// const input = 852;
// const output = input
//   .toString()
//   .split('')
//   .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
// console.log(output);

//83. Write a JavaScript to find the longest string from a given array of strings.

// const arr = ['a', 'aa', 'aaaaaa', 'aaaa', 'aaaaa'];
// let greater = 0;
// let value;
// for (let val of arr) {
//   if (greater < val.length) {
//     greater = val.length;
//     value = val;
//   }
// }
// console.log(value, arr.indexOf(value), greater);

//84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.

// const input = 'abcdxyz';
// let arr = [];
// let output;
// for (let val of input) {
//   output = String.fromCharCode(input.charCodeAt(input.indexOf(val)) + 1);
//   arr.push(output);
// }
// console.log(arr.join(''));
