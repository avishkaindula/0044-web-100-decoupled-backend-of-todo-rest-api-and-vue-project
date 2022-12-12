const express = require("express");

const db = require("./data/database");
const todosRoutes = require("./routes/todos.routes");

const app = express();

app.use(express.json());
// This middleware is used when extracting data from the incoming request body.
// As we extract data from req.body.text in addTodo() in todos.controller.js file,
// we need this middleware up and running.
// This will scan all incoming requests for their content type and if it's json, it 
// will parse the request body as json and expose it under this req.body field, so
// that we can work with it in our other middleware functions.

app.use("/todos", todosRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

db.initDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Connecting to the database failed!");
  });
