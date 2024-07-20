const book = {
  title: "The Rudest Book Ever",
  author: "Shwetabh Gangwar",
  year: 2018,
  getBook: function () {
    return `Title: ${this.title}, Author of this book is ${this.author}.`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
    console.log(book);
  },
};

const library = {
  name: "The National Library",
  books: [
    {
      title: "The Rudest Book ever",
      author: "Shwetabh Gangwar",
      year: 2020,
    },
    {
      title: "Book 2",
      author: "John Doe",
      year: 2021,
    },
    {
      title: "Book 3",
      author: "Jane Doe",
      year: 2009,
    },
  ],
};

// console.log(library);

// console.log(
//   `Name of Library is ${library["name"]}
// We have ${library.books.length} books`
// );

// library.books.map((book) =>
//   console.log(book.title)
// );

for (let book in library) {
  console.log(`${book}, ${library[book]}`);
}
console.log(
  "*************************************"
);

console.log(Object.keys(library));
console.log(Object.values(library));
