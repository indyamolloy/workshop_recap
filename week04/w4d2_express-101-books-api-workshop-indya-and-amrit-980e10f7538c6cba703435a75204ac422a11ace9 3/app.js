import express from "express";
import books from "./books-data.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the root path!" });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const result = books.find((book) => {
    return book.id === id;
  });

  if (result !== undefined) {
    res.json({ message: "book has been found", result: result });
  } else {
    res.json({ message: "book hasn't been found", result: "-" });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
