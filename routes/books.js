const express = require("express");
const {
  BookAddValidationMW,
  BookUpdateValidationMW,
} = require("../validators/books.validator");
const bookControllers = require("../controllers/books.controllers");

const bookRouter = express.Router();

bookRouter.get("/", bookControllers.getAllBooks);

bookRouter.get("/:id", bookControllers.getBooksById);

bookRouter.post("/", BookAddValidationMW, bookControllers.addBooks);

bookRouter.put("/:id", BookUpdateValidationMW, bookControllers.updateBooks);

bookRouter.delete("/:id", bookControllers.deleteBooks);

module.exports = bookRouter;
