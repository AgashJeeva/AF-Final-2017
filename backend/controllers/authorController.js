const Author = require("../models/Author");
const Book = require("../models/Book");

// GET AUTHORS
exports.getAuthors = async (req, res) => {
  const authors = await Author.find();

  res.json(authors);
};

// AUTHORS WITH BOOKS
exports.getAuthorsWithBooks = async (req, res) => {
  const authors = await Author.find();

  const result = [];

  for (let author of authors) {
    const books = await Book.find({
      author: author._id,
    });

    result.push({
      author,
      books,
    });
  }

  res.json(result);
};
