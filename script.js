// O(1)
// const isEven = (num) => {
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];
// const findIndex = (num) => {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] === num) {
//             console.log(`${num} found at index ${i}`);
//         }
//     }
// }

// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   if (num === arr[middle]) {
//     return 'found it';
//   }
//   else if (num < arr[middle]) {
//     right = middle;
//     return `bring right down to ${right}`;
//   }
//   else if (num > arr[middle]) {
//     left = middle + 1;
//     return `bring left up to ${left}`;
//   }
// };

// console.log(binarySearch(data, 38));

