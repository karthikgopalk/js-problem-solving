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

function sum(a, b) {
  let output = a || b === 50 ? true : false;
  // if (a || b === 50) {
  //   output = true;
  // } else if (a + b === 50) {
  //   output = true;
  // }
  return output;
}
console.log(sum(20, 36));
