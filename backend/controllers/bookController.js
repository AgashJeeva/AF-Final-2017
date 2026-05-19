const Book = require("../models/Book");

// ADD BOOK
exports.addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);

    await newBook.save();

    res.json({
      message: "Book Added Successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL BOOKS
exports.getBooks = async (req, res) => {
  const books = await Book.find().populate("author");

  res.json(books);
};

// FILTER BOOKS
exports.filterBooksByAuthor = async (req, res) => {
  const books = await Book.find({
    author: req.params.authorId,
  }).populate("author");

  res.json(books);
};
