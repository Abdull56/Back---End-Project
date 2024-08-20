const express = require("express");
const {
  AuthorAddValidationMW,
  AuthorUpdateValidationMW,
} = require("../validators/authors.validation");
const authorsControllers = require("../controllers/authors.controllers");

const authorRouter = express.Router();

authorRouter.get("/", authorsControllers.getAllAuthors);

authorRouter.get("/:id", authorsControllers.getAuthorsById);

authorRouter.post("/", AuthorAddValidationMW, authorsControllers.addAuthors);

authorRouter.put(
  "/:id",
  AuthorUpdateValidationMW,
  authorsControllers.updateAuthors
);

authorRouter.delete("/:id", authorsControllers.deleteAuthors);

module.exports = authorRouter;
