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

// const input = [
//   {
//     name: 'John',
//     yearOfBirth: 1988,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'Nancy',
//     yearOfBirth: 1963,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'John',
//     yearOfBirth: 1980,
//     placeOfBirth: 'Toronto',
//   },
// ];

// const groupBy = (obj, callback) => {
//   return [...obj].map(callback);
// };
// const isOdd = (val) => val % 2 == 1;

// // 1
// console.log(groupBy(input, (t) => t.name));

// // 2
// console.log(groupBy(input, (t) => isOdd(t.yearOfBirth)));

// let isPromise = true;
// new Promise((resolve, reject) => {
//   if (isPromise) resolve('promise is success');
//   else reject('promise is failed');
// })
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((err) => {
//     err;
//   });

// const isPromise = true;
// const promise = new Promise(function (resolve, reject) {
//   if (isPromise) resolve('promise is success');
//   else reject('promise is failed');
// });
// console.log(promise);

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve('There is a count value.');
//   } else {
//     reject('There is no count value');
//   }
// });

// countValue.then((resolve) => {
//   console.log(resolve);
// });

// function sleep(ms) {
//   return new Promise((res) => setTimeout(res, ms));
// }
// console.log(sleep(2000));

// async function d() {
//   return 1;
// }
// console.log('one');
// d().then((val) => console.log(val));
// console.log('two');
// console.log('three');
// console.log('four');
// console.log('five');
// console.log('six');

// async function one() {
//   return Promise.resolve(1);
// }
// one().then((res) => console.log(res));

// console.log('one');
// setTimeout(() => console.log('two'));
// console.log('three');
// console.log('four');

// async function one() {
//   const time = setTimeout(() => console.log('execution'), 2000);
//   console.log('one');
//   await time;
//   console.log('two');
// }
// one();

// class Demo {
//   async sample() {
//     return await Promise.resolve(1);
//   }
// }
// new Demo().sample().then((val) => console.log(val));

// async function demo() {
//   await Promise.reject(new Error('it is error'));
// }
// demo().catch((err) => console.log(err.stack));

// async function sample() {
//   throw new Error('custom error');
// }
// sample().catch((val) => console.log(val.message));

// async function demo() {
//   return await fetch('no url')
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));
// }
// demo();

// async function demo() {
//   let response = await fetch('https://reqres.in/api/users?page=2');
//   let data = await response.json();
//   return console.log(data);
// }
// demo();

// function demo() {
//   let response = fetch('https://reqres.in/api/users?page=2');
//   response.then((val) => val.json()).then((val) => console.log(val));
// }
// demo();

// function* generated() {
//   yield 1;
//   yield 2;
//   return 3;
// }
// console.log(generated().next());
// console.log(generated().next());
// console.log(generated().next());

// function* demo() {
//   yield 1;
//   return 1;
// }
// console.log(demo().next());
// console.log(0, 2, 3, ...demo());
// console.log(...demo());

// const obj = {
//   name: 'karthy',
//   age: 20,
//   city: 'chennai',
// };
// const filtered = JSON.stringify(obj, ['age', 'city']);
// console.log(filtered);
// const val = JSON.parse(filtered);
// console.log(val);
