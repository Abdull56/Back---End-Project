const express = require("express");
const bodyParser = require("body-parser");
const CONFIG = require("./config/config");
const bookRouter = require("./routes/books");
const authorRouter = require("./routes/authors");
const connectToDb = require("./db/db");

const app = express();

connectToDb();

//Add Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/authors", authorRouter);

app.get("/", (req, res) => {
  res.send("Bookstore Working");
});

//Error Handler Middleware

app.use((err, req, res, next) => {
  console.log(err);

  const errorStatus = err.status || 500;
  res.status(errorStatus).send("An error occured");
  next();
});

app.listen(CONFIG.PORT, () => {
  console.log(
    `Server is connected successfully http://localhost: ${CONFIG.PORT}`
  );
});
