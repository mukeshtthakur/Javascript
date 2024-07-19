const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// console.log(number[0]);
// console.log(number[number.length - 1]);

// numbers.push(6);
// numbers.pop();
// numbers.shift();
// numbers.unshift(1);

// const doubledNumbers = numbers.map((number) => number * 2);
// const evenNumbers = numbers.filter((number) => {
//   if (number % 2 === 0) {
//     return number;
//   }
// });

// const sumOfNumbers = numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);

// console.log(`Sum of Numbers: ${sumOfNumbers}`);
// evenNumbers.map((number) => console.log(number));

const squareArray = [
  [1, 2, 3, 4, 5],
  [1, 4, 9, 16, 25],
  [1, 16, 27, 64, 125],
  [1, 64, 81, 256, 625],
];

for (let i = 0; i < squareArray.length; i++) {
  for (let j = 0; j < squareArray[i].length; j++) {
    console.log(squareArray[i][j]);
  }
}
