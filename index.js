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
