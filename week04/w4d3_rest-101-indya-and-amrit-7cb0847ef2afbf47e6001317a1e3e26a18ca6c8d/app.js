import express from "express";
import rewire from "rewire";

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());

/* Tasks

You have been asked to write the request handlers which manage the coordination of astronauts in outer space. All of the models that
retrieve and manage astronaut data have been written for you, and have been imported above. You must adhere to the principles of
RESTful API design throughout the tasks. Enter 'npm run dev' in your console to start the server. Test your request handlers using 
Postman.

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

// Task 1

Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */
app.get("/astronauts", async function (req, res) {
  res.json({
    success: true,
    payload: await getAstronauts(),
  });
});

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */
app.post("/astronauts", async function (req, res) {
  const result = req.body;
  await createAstronaut(result);
  res.json({
    success: true,
    payload: await createAstronaut(result),
  });
});

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

app.get("/astronauts/:id", async function (req, res) {
  const response = await getAstronautById(req.params.id);
  res.json({
    success: true,
    payload: response,
  });
});

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

app.put("/astronauts/:id", async (req, res) => {
  const id = req.params.id;

  await replaceAstronautById(id, req.body);
  res.json({
    success: true,
    payload: await replaceAstronautById(id, req.body),
  });
});

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

app.delete("/astronauts/:id", async (req, res) => {
  const id = req.params.id;
  await deleteAstronautById(id);
  res.json({
    success: true,
    payload: await deleteAstronautById(id),
  });
});

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

app.patch("/astronauts/:id", async (req, res) => {
  await updateAstronautById(req.params.id, req.body);
  res.json({
    success: true,
    payload: await updateAstronautById(req.params.id, req.body),
  });
});

export default app;
