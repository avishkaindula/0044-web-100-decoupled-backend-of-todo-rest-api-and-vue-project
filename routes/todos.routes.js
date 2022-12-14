const express = require("express");

const todosController = require("../controllers/todos.controller");

const router = express.Router();

router.get("/", todosController.getAllTodos);
// This is actually /todos/ get route.

router.post("/", todosController.addTodo);
// This is actually /todos/ post route.

router.patch("/:id", todosController.updateTodo);

router.delete("/:id", todosController.deleteTodo);

module.exports = router;
