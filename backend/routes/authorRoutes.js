const express = require("express");

const router = express.Router();

const {
  getAuthors,
  getAuthorsWithBooks,
} = require("../controllers/authorController");

router.get("/", getAuthors);

router.get("/with-books", getAuthorsWithBooks);

module.exports = router;
