import express from "express";
import * as actions from "./actions/books.js";

const PORT = 3000;
const app = express();

app.use(express.json());

//middleware to console log the request body and message
app.use(function (req, res, next) {
  console.log("Request received!", req.body);
  next();
});

//message to log time of request
app.use(function (req, res, next) {
  const date = new Date().toString();
  req.body.timestamp = date;

  console.log(req.body.timestamp);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/books", actions.getAllBooks);

app.get("/books/:id", actions.getSingleBook);

app.post("/books", actions.createBook);

app.patch("/books/:id", actions.updateBook);

app.delete("/books/:id", actions.deleteBook);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
