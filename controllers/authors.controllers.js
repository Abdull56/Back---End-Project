const authorModel = require("../models/authors");

function getAllAuthors(req, res) {
  authorModel
    .find()
    .then((authors) => {
      res.send(authors);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

function getAuthorsById(req, res) {
  const id = req.params.id;
  authorModel
    .findById(id)
    .then((author) => {
      res.status(200).send(author);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
}

function addAuthors(req, res) {
  const author = req.body;
  author.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  authorModel
    .create(author)
    .then((author) => {
      res.status(201).send(author);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

function updateAuthors(req, res) {
  const id = req.params.id;
  const author = req.body;
  book.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  authorModel
    .findByIdAndUpdate(id, author, { new: true })
    .then((newAuthor) => {
      res.status(200).send(newAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

function deleteAuthors() {
  const id = req.params.id;
  authorModel
    .findByIdAndRemove(id)
    .then((author) => {
      res.status(200).send(author);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

module.exports = {
  getAllAuthors,
  getAuthorsById,
  addAuthors,
  updateAuthors,
  deleteAuthors,
};
