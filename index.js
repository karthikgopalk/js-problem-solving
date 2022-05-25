//55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.

// let input = 'patpssT';
// let input_p = input.match(/p/gi).length;
// let input_t = input.match(/t/gi).length;
// console.log(input_p == input_t);

//57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

// function copiedData(input, count) {
//   return input.repeat(count);
// }
// console.log(copiedData('abc', 5));

//58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

// function checkLast3(input) {
//   let output =
//     input.length > 3 ? input.slice(input.length - 3).repeat(4) : false;
//   return console.log(output);
// }
// checkLast3('hellog');

//59. Write a JavaScript program to extract the first half of a string of even length.

// let input = 'javascriptgdd';
// let half = Math.floor(input.length / 2);
// console.log(half);
// console.log(input.substring(0, half));

//60. Write a JavaScript program to create a new string without the first and last character of a given string.

// let input = 'javascript';
// console.log(input.slice(1, input.length - 1));

//61. Write a JavaScript program to concatenate two strings except their first character.

// let input1 = 'hello';
// let input2 = 'world';
// console.log(input1.slice(1).concat(' ', input2.slice(1)));

//62. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

// let input = 'python';
// console.log(input.slice(-3) + input.slice(0, -3));

//63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

// function findMiddleThree(input) {
//   if (input.length >= 3 && input.length % 2 != 0) {
//     let half = Math.floor(input.length / 2);
//     return console.log(input.substr(half - 1, 3));
//   }
//   return console.log(false);
// }
// findMiddleThree('abcdefe');

//64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

// function campareTwoStrings(input1, input2) {
//   if (input1.length === input2.length) {
//     return input1 + ' ' + input2;
//   }
//   let minimum = Math.min(input1.length, input2.length);
//   return input1.slice(-minimum) + ' ' + input2.slice(-minimum);
// }
// console.log(campareTwoStrings('py', 'js'));

//65. Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.

// let input = 'Script';
// let output = input.length >= 6 ? input.endsWith('Script') : false;
// console.log(output);

//66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// let input = 'Ne angels';
// let output = input.startsWith('Los') || input.startsWith('New') ? input : '';
// console.log(output);

//67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.

// let input = 'poordfghp';
// let output =
//   input.startsWith('p') && input.endsWith('p')
//     ? input.slice(1, input.length - 1)
//     : input;
// console.log(output);

//68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.

// function firstLastInput(input, n) {
//   if (input.length >= n) {
//     return input.substr(0, n) + input.slice(-n);
//   }
//   return false;
// }
// console.log(firstLastInput('javascript', 2));

//69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

// let arr = [10, 20, 30];
// console.log(arr.reduce((acc, cur) => acc + cur));
