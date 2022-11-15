// Arrays

// 1. Definition

// 2. Add items to the array
// fruitsArray.push('Kiwi');
// console.log(fruitsArray);

// 3. Remove items from an array
// fruitsArray.pop();
// console.log(fruitsArray);

// 4. Remove items at a specified position
// fruitsArray.splice(1,1);
// console.log(fruitsArray);

// 5. How to retrieve items given their position
// console.log(fruitsArray[5]);

// 6. Loops
// Method 1
// fruitsArray.forEach((item, index) => {
//     if (item == 'Apple') {
//         console.log('I don\'t like apples');
//     } else {
//         console.log('I am eating a',item);
//     }
// });
// Method 2
const fruitsArray = ['Mango', 'Apple', 'Banana', 'Watermelon', 'Grape'];
// fruitsArray.map(function (value, index) {
//     console.log(value, index);
// })
// fruitsArray.map((value) => {
//     console.log(value);
// });

const newSubArray = fruitsArray.slice(1,5);
console.log(newSubArray, fruitsArray);

const splicedArray = fruitsArray.splice(1,2);
console.log(splicedArray, fruitsArray);

// Functions
// function myFunc() {

// }
// const myFunc = () => {}


// // Method 3
// for (let index = 0; index < fruitsArray.length; index++) {
//     const element = fruitsArray[index];
//     console.log(element,'is in position', index);
// }

// // Length vs Index
// const myWord = 'Fruits';
// for (let index = 0; index < myWord.length; index++) {
//     const singleLetter = myWord[index];
//     console.log(singleLetter)
// }
// console.log(myWord.length);