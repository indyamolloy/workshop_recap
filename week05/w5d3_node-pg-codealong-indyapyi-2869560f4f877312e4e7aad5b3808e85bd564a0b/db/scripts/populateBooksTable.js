import query from "../index.js";
import books from "../../books-data.js";

async function populateBooksTable() {
  for (let i = 0; i < books.length; i++) {
    const title = books[i].title;
    const author = books[i].author;

    const sqlString = `INSERT INTO books (title, author) VALUES ($1, $2) RETURNING title`;
    const res = await query(sqlString, ["hi", "hello"]);
    console.table(res);
  }
}

populateBooksTable();
