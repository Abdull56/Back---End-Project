const { types } = require("joi");
const moogoose = require("mongoose");

//Define a schema
const Schema = moogoose.Schema;

//Define author schema
const AuthorSchema = new Schema({
  First_Name: {
    type: String,
    required: true,
  },
  Last_Name: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
  },
  country: {
    type: String,
    required: false,
  },
  books: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdateAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = moogoose.model("authors", AuthorSchema); //collection name is Books. This is the name of the collection in the database
