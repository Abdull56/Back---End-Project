const bookModel = require("../models/books");

function getAllBooks(req, res) {
  bookModel
    .find()
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

function getBooksById(req, res) {
  const id = req.params.id;
  bookModel
    .findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
}

function addBooks(req, res) {
  const book = req.body;
  book.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  bookModel
    .create(book)
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

function updateBooks(req, res) {
  const id = req.params.id;
  const book = req.body;
  book.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  bookModel
    .findByIdAndUpdate(id, book, { new: true })
    .then((newBook) => {
      res.status(200).send(newBook);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

function deleteBooks() {
  const id = req.params.id;
  bookModel
    .findByIdAndRemove(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

module.exports = {
  getAllBooks,
  getBooksById,
  addBooks,
  updateBooks,
  deleteBooks,
};
