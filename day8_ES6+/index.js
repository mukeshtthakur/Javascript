const name = "John Doe";
const age = "28";
// console.log(
//   `My name is ${name}.
// i am ${age} year old.`
// );

const books = [
  "Atomic Habits",
  "Feel Good Productivity",
  "Think and Grow Rich",
  "The 7 Habits of highly effective people",
  "Awaken the Giant Within",
  "How to win friends and influence people",
];

const [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
] = books;

const [book1, book2, ...otherBooks] = books;

console.log(
  `My top 2 books are:\n1.${book1}\n2.${book2}`
);

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  price: "$13.99",
  year: 2018,
};

const { title, author } = book;

console.log(`${title} is written by ${author}`);

const top5Books = [
  "Atomic Habits",
  "Feel Good Productivity",
  "Think and Grow Rich",
  "The 7 Habits of highly effective people",
  "Awaken the Giant Within",
];

const top10Books = [
  ...top5Books,
  "How to win friends and influence people",
  "How to Stop Worrying and Start Living",
  "The Four Agreements",
  "You are a Badass",
  "The Power of Habit",
];

console.log(top10Books);

function sum(...args) {
  let total = 0;
  for (let num in args) {
    total += args[num];
  }
  return total;
}

console.log(sum(1, 9, 10, 100, 1000, 1000));
