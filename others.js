//Write a function that returns true or false for a given number. We will reuse this function, so make it reusable.

// const isOdd = (str) => console.log(str % 2 == 1);
// isOdd(5);

//Write a function that returns the given string with a concatenated exclamation ! at the end. We will reuse this function, so make it reusable.

// const exclaim = (str) => `${str}!`;
// console.log(exclaim('Adrian'));
// console.log(exclaim(exclaim(exclaim('Adrian'))));

//Write a function that duplicates each char in a string. If I pass 'abc' to the function, it should return 'aabbcc'. We will reuse this function, so make it reusable.

// const doubleChars = (str) => {
//   return [...str].map((val) => `${val}${val}`).join('');
// };
// console.log(doubleChars('Adrian'));

//Write a function called atLeastTwo that receives an array and a callback as its arguments. If at least two elements from the array return a truthy value when passed as an argument to the callback, atLeastTwo should return true. If there aren't at least two elements from the array that return a truthy value when passed as arguments to the callback, atLeastTwo should return false.

// const isOdd = (val) => val % 2 == 1;
// const atLeastTwo = (arr, callback) => {
//   const output = arr.filter(callback);
//   return output.length >= 2 && output;
// };
// console.log(atLeastTwo([1, 2, 3, 4], isOdd));

const input = [
  {
    name: 'John',
    yearOfBirth: 1988,
    placeOfBirth: 'New York',
  },
  {
    name: 'Nancy',
    yearOfBirth: 1963,
    placeOfBirth: 'New York',
  },
  {
    name: 'John',
    yearOfBirth: 1980,
    placeOfBirth: 'Toronto',
  },
];

const groupBy = (obj, callback) => {
  return [...obj].map(callback);
};
const isOdd = (val) => val % 2 == 1;

// 1
console.log(groupBy(input, (t) => t.name));

// 2
console.log(groupBy(input, (t) => isOdd(t.yearOfBirth)));
