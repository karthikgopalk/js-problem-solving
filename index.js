//compare two array values are equal

// let array1 = ['a', 'b', 'c', 'x'];
// let array2 = ['z', 'y', 'i'];
// return false

// let array1 = ['a', 'b', 'c', 'x'];
// let array2 = ['z', 'y', 'x'];
// return true

/*
1. for loop for array1
2. nested for loop for array2
3. if charat of array1 equals array2 then true else false
*/

// function compareArray(array1, array2) {
//   for (let input1 = 0; input1 <= array1.length - 1; input1++) {
//     for (let input2 = 0; input2 <= array2.length - 1; input2++) {
//       if (array1[input1] == array2[input2]) return true;
//     }
//   }
//   return false;
// }
// console.log(compareArray(array1, array2));

//another solution//

// for (let index of array1) {
//   for (let i2 of array2) {
//     if (index == i2) console.log(index);
//   }
// }

//another solution//

// console.log(array1.some((val) => array2.includes(val)));
// console.log(array1.find((val) => array2.includes(val)));
