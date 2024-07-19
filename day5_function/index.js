// function oddOrEven(num) {
//   console.log(num % 2 === 0 ? "Even" : "Odd");
// }

// oddOrEven(21);

// function square(num) {
//   return num * num;
// }

// console.log(square(4));

// const maxOfTwo = function (num1, num2) {
//   console.log(num1 > num2 ? num1 : num2);
// };

// maxOfTwo(23, 3);

// const concat = function (str1, str2) {
//   console.log(str1 + str2);
// };

// concat("Mukesh", "Thakur");

//ARROW FUNCTION

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(4, 50));

// const has = (str, char) => {
//   return str.includes(char);
// };

// console.log(has("mukesh", "p"));

// function product(num1, num2 = 4) {
//   return num1 * num2;
// }

// console.log(product(4, 2));

// function greetings(name, age = 3) {
//   console.log(`Hi ${name}, you are ${age} year old`);
// }

// greetings("mike");

const firstFunction = function (val) {
  return val * val;
};

const secondFunction = function (val2) {
  return val2 * val2;
};

const HOF = function (firstFunction, secondFunction, value) {
  return secondFunction(firstFunction(value));
};

const value = 12;
console.log(HOF(firstFunction, secondFunction, value));
