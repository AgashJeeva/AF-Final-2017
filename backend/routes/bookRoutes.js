const express = require("express");

const router = express.Router();

const {
  addBook,
  getBooks,
  filterBooksByAuthor,
} = require("../controllers/bookController");

router.post("/", addBook);

router.get("/", getBooks);

router.get("/author/:authorId", filterBooksByAuthor);

module.exports = router;
