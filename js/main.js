/* fibonacci */

// function foo(n) {
//
//     if (n <= 0) {
//         return 0
//     }
//     if (n < 2) {
//         return n;
//     }
//         return foo(n - 1) + foo(n - 2);
// }
//
// console.log(foo(7));


/* with caching */
//
// function foo(n) {
//     let cache = [];
//
//     if (n <= 0) {
//         return 0
//     }
//     if (n < 2) {
//         return n;
//     }
//     if (!cache[n]) {
//         cache[n] = foo(n - 1) + foo(n - 2);
//     }
//     return cache[n];
// }
//
// console.log(foo(7));

/* sorting array */

// const array = [];
//
// function merge(arr1, arr2) {
//
//     while (arr1.length && arr2.length) {
//         if (arr1[0] < arr2[0]) {
//             array.push(arr1.shift());
//         } else {
//             array.push(arr2.shift());
//         }
//     }
//     return [...array, ...arr1, ...arr2];
// }
//
// console.log(merge([1,5,8], [7,8,9]));

/* Binary search */

// let arr = [4, 7, 8, 9]
//
// function foo(arr, n) {
//     let num;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             num = n
//         }
//     }
//
//     if (num) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(foo(arr, 8));

// let arr = [4, 7, 8, 9]
//
// function recVersionSearch(n, arr) {
//     let mid = Math.floor(arr.length / 2);
//     if (arr.length === 1 && arr[0] !== n) {
//         return false;
//     }
//     if (n === arr[mid]) {
//         return true;
//     } else if (n < arr[mid]) {
//         return recVersionSearch(n, arr.slice(0, mid));
//     } else if (n > arr[mid]) {
//         return recVersionSearch(n, arr.slice(mid));
//     }
// }
//
// console.log(recVersionSearch(4, arr));

/* reverse string */

// function revString(str) {
//     let str1 = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         str1 += str[i];
//     }
//     console.log(str1)
// }
// revString('hello');



