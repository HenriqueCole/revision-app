const express = require("express");
const router = express.Router();
const booksController = require("./api/book/book.controller");

router.use("/books", booksController);

module.exports = router;
