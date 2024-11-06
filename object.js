const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
  },
  { title: "Pride and Prejudice", author: "Harper Lee", year: 1813 },
];
function filterBookSByYear(authorOfBook) {
  for (let i = 0; i < books.length; i++) {
    if (authorOfBook == books[i].author) {
      console.log(books[i]);
    }
  }
}
console.log(filterBookSByYear("Harper Lee"));
