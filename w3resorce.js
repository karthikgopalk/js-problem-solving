/*
1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

// let today = new Date();
// let day = [
//   'sunday',
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
// ];
// console.log('Today is : ', day[today.getDay()]);
// let hours = today.getHours();
// hours = hours >= 12 ? hours - 12 : hours;
// let meridian = hours >= 12 ? 'PM' : 'AM';
// console.log(
//   'Current time is : ' +
//     hours +
//     ' ' +
//     meridian +
//     ' : ' +
//     today.getMinutes() +
//     ' : ' +
//     today.getSeconds()
// );

/*2.Write a JavaScript program to print the contents of the current window. */

// window.print();

/*3. Write a JavaScript program to get the current date. 
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

// let today = new Date();
// let date = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// date = date.toString().length == 1 ? '0' + date : date;
// month = month.toString().length == 1 ? '0' + month : month;
// console.log(date + '-' + month + '-' + year, date + '/' + month + '/' + year);

/*4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */

// let sides;
// function areaOfTriangle(s1, s2, s3) {
//   let sides = (s1 + s2 + s3) / 2;
//   return Math.sqrt(sides * (sides - s1) * (sides - s2) * (sides - s3));
// }
// console.log(areaOfTriangle(5, 6, 7));

/*5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  */

/*6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  */

// function leapYear(year) {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// console.log(leapYear(2021));

/*7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  */

// for (let i = 2014; i < 2050; i++) {
//   let date = new Date(i.toString(), 0, 1);
//   if (date.getDay() == 0) console.log(i);
// }

/*8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  */

// let fixed = Math.trunc(Math.random() * 1e1);
// fixed = fixed === 0 ? 1 : fixed;
// let input = +prompt('enter the number', 0);
// let output = input === fixed ? 'Good work' : 'Not Matched';
// console.log('input: ' + input + ' generated: ' + fixed + ' output: ' + output);

/*9. Write a JavaScript program to calculate days left until next Christmas. */
//date -> cristmas = 25 dec -> cristmas-date

// let date = new Date();
// let Christmas = new Date(date.getFullYear(), 11, 25);
// let oneDay = 1000 * 60 * 60 * 24;
// let totalDays = Math.ceil((Christmas.getTime() - date.getTime()) / oneDay);
// console.log(totalDays);

/*11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

// function ctof(c) {
//   return `the ${c}° c is ${(c * 9) / 5 + 32} f`;
// }
// function ftoc(f) {
//   return `the ${f}° f is ${((f - 32) * 5) / 9} c`;
// }
// console.log(ctof(60));
// console.log(ftoc(45));

/*12. Write a JavaScript program to get the website URL (loading page).  */

// console.log(document.URL);

//13. Write a JavaScript exercise to create a variable using a user-defined name.

// let user_name = 'abcd';
// let n = 120;
// this.user_name = n;
// console.log(this.user_name);
// console.log(user_name);

//14. Write a JavaScript exercise to get the extension of a filename.

// let file_name = 'sample.js';
// console.log(file_name.split('.').pop());

/*15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. */

// const given_number = +prompt('enter the number', 0);
// const num = given_number <= 13 ? 13 - given_number : given_number - 13 * 2;
// console.log(num);

//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

// function sum(a, b) {
//   return a === b ? (a + b) * 3 : a + b;
// }
// console.log(sum(5, 5));

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

// const given_number = +prompt('enter the number', 0);
// const num = given_number > 19 ? (given_number - 19) * 3 : 19 - given_number;
// console.log(num);

//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

// function sum(a, b) {
//   if (a == 50 || b == 50 || a + b === 50) return true;
//   return false;
// }
// console.log(sum(20, 50));

//20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// function checkNumber(a, b) {
//   let c1 = a < 0 ? false : true;
//   let c2 = b < 0 ? false : true;
//   return `a is ${c1} and b is ${c2}`;
// }
// console.log(checkNumber(-5, -5));

//21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// function checkInput(input) {
//   if (input.substring(0, 2) == 'py') return input;
//   return 'py' + input;
// }
// console.log(checkInput(''));

//22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// function specificPos(string_val, position) {
//   let p1 = string_val.substring(0, position);
//   let p2 = string_val.substring(position + 1, string_val.length);
//   return p1 + p2;
// }
// console.log(specificPos('hello', 3));

//23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

// function changingPosition(input) {
//   let mid_string = input.substring(1, input.length - 1);
//   return input.charAt(input.length - 1) + mid_string + input.charAt(0);
// }
// console.log(changingPosition('hello'));

//24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

// function addStringfb(input) {
//   const first_letter = input.charAt(0);
//   return first_letter + input + first_letter;
// }
// console.log(addStringfb('a'));

//25.Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

// function mulThreeSeven(input) {
//   if (input > 0) {
//     if (input % 3 == 0) return 'it is divisible by 3';
//     if (input % 7 == 0) return 'it is divisible by 7';
//     return 'it is not divisible by both';
//   }
//   return 'please enter positive number';
// }
// console.log(mulThreeSeven(-3));

//26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

// function newString(input) {
//   if (input.length > 3) {
//     const last_three = input.substring(input.length - 3);
//     return last_three + input + last_three;
//   }
//   return input;
// }
// console.log(newString('hel'));

//27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

// function stringStarts(input) {
//   return input.substring(0, 4) == 'Java' ? true : false;
// }
// console.log(stringStarts('JavaScript'));

//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

// function range(a, b) {
//   for (let i = 50; i < 99; i++) {
//     console.log(i);
//     if (a == i || b == i) {
//       return 'it is in range';
//     } else if (i == 98 && a != i && b !== i) return 'nothing is a range';
//   }
// }
// console.log(range(5, 99));

// function checkNumber(a, b) {
//   if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) return true;
//   return false;
// }
// console.log(checkNumber(15, 36));

//30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

// function checkScript(input) {
//   if (input.length < 6) return 'it is not a valid input';
//   if (input.substring(4, 10) == 'Script') return input.split('Script').join('');
//   return input;
// }
// console.log(checkScript('javaScript'));

//31. Write a JavaScript program to find the largest of three given integers.

// function findLargest(a, b, c) {
//   if (a > b && a > c) return 'a is greater';
//   else if (b > c && b > a) return 'b is greater';
//   else if (c > a && c > b) return 'c is greater';
//   return 'all are equal';
// }
// console.log(findLargest(55, 55, 55));

//32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function nearest100(a, b) {
//   return 100 - a < 100 - b ? 'a is greater' : 'b is greater';
// }
// console.log(nearest100(80, 70));

//33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// function checkRange(a, b) {
//   let result_a, result_b;
//   if (a >= 40 && a <= 60) result_a = 'a is a range between 40 to 60';
//   else if (a >= 70 && a <= 100) result_a = 'a is a range between 70 to 100';
//   if (b >= 40 && b <= 60) result_b = 'b is a range between 40 to 60';
//   else if (b >= 70 && b <= 100) result_b = 'b is a range between 70 to 100';
//   return result_a + ' and ' + result_b;
// }
// console.log(checkRange(90, 80));

//35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// function checkChar(input, check) {
//   return input.substring(2, 5).search(check) != -1 ? true : false;
// }
// console.log(checkChar('abcdef', 'cde'));

//37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

// function lowerUpper(input) {
//   if (input.length < 3) return input.toUpperCase();
//   const mid_string = input.substring(3, input.length);
//   return input.substring(0, 3).toLowerCase() + mid_string;
// }
// console.log(lowerUpper('ASDGHJGFHG'));

//48. Write a JavaScript program to reverse a given string.

// function reverseStrinng(input) {
//   return Array.from(input).sort().join('');
// }
// console.log(reverseStrinng('helloa'));

//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// function replaceString(input) {
//   let arr = [];
//   let alphabets = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < input.length; i++) {
//     const charCode = input.charCodeAt(i) + 1;
//     let fromCharCode = String.fromCharCode(charCode);
//     let checkCase =
//       fromCharCode.includes('a') ||
//       fromCharCode.includes('e') ||
//       fromCharCode.includes('i') ||
//       fromCharCode.includes('o') ||
//       fromCharCode.includes('u')
//         ? fromCharCode.toUpperCase()
//         : fromCharCode;
//     arr.push(checkCase);
//   }
//   return arr.join('');
// }
// console.log(replaceString('hello'));

//50. Write a JavaScript program to capitalize the first letter of each word of a given string.

// function capsForSingleWord(input) {
//   return input.substring(0, 1).toUpperCase() + input.substring(1, input.length);
// }
// console.log(capsForSingleWord('tree'));

// function capsForMultiWord(input) {
//   let splitValue = input.split(' ');
//   for (let j = 0; j < splitValue.length; j++) {
//     splitValue[j] =
//       splitValue[j].charAt(0).toUpperCase() + splitValue[j].substr(1);
//   }
//   return splitValue.join(' ');
// }
// console.log(capsForMultiWord('tree is beautiful'));

//51. Write a JavaScript program to convert a given number to hours and minutes.

// let num = 450;
// let date = new Date();
// let hours = date.setHours(Math.floor(num / 60));
// let min = date.setMinutes(num % 60);
// console.log(date.getHours() + ':' + date.getMinutes());

//52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

// function alphabet(input) {
//   return console.log([...input].sort().join(''));
// }
// alphabet('qwerty');

//53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// function atob(input) {
//   let splitString = input.substring(input.indexOf('a'), input.indexOf('b') + 1);
//   if (splitString.length === 5) return true;
//   return false;
// }
// console.log(atob('pane borrowed'));

// function ab_Check(str) {
//   return /a...b/.test(str) || /b...a/.test(str);
// }
// console.log(ab_Check('pbne aorrowed'));

//54. Write a JavaScript program to count the number of vowels in a given string.

// function countVowels() {
//   let input = 'aeiouqwaee';
//   return input.match(/aeiou/gi);
// }
// console.log(countVowels());

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

//70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

// let arr = [3, 4, 5];
// console.log([arr[1], arr[2], arr[0]]);

//71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

// function checkOne(arr) {
//   return arr[0] == 1 || arr[arr.length - 1] == 1;
// }
// console.log(checkOne([]));
