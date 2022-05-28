//72. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

// let arr = [10, 10];
// console.log(arr.length > 2 && arr[0] === arr[arr.length - 1]);

//73. Write a JavaScript program to reverse the elements of a given array of integers length 3.

// console.log([1, 2, 3].reverse());

//74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

// const arr = [50, 20, 30];
// const value = Math.max(arr[0], arr[arr.length - 1]);
// const out = arr.map(() => (val = value));
// console.log(out);

//75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

// const arr1 = [1, 2, 3];
// const arr2 = [5, 6, 7];
// const arr3 = [];
// arr1.length === 3 && arr2.length == 3
//   ? arr3.push(arr1[1], arr2[1])
//   : 'invalid input';
// console.log(arr3);

//76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.

// const arr = [20, 20, 10];
// const arr2 = [];
// arr2.push(arr[0], arr[arr.length - 1]);
// console.log(arr2);

//77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.

// const arr = [5, 2];
// const output = arr.indexOf(1) !== -1 || arr.indexOf(3) != -1;
// console.log(output);

//78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.

// const arr = [2, 4];
// const output = arr.indexOf(1) == -1 && arr.indexOf(3) == -1;
// console.log(output);

//79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

// const arr = [30, 30];
// const arr1 = arr[0];
// const arr2 = arr[1];
// const output = (arr1 === 30 && arr2 === 30) || (arr1 === 40 && arr2 === 40);
// console.log(output);

//80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

// const arr = [1, 2, 3, 4, 5];
// if (arr.length >= 1)
//   [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
// console.log(arr);
