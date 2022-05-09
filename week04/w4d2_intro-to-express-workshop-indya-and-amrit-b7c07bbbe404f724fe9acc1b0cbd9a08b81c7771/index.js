//importing express from express
import express from "express";

//creating an instance of express
const app = express();

//declaring the port to listen on
const PORT = 3000;

//creating a get request to the root path. Sending back a response.
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/secretmessage", (req, res) => {
  res.json({ message: "Here's the secret message" });
});

//What port to listen on and console logging a message
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
