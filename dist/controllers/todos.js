"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHandler = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'NEW TOTO created.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getHandler = (req, res, next) => {
    const newTodo = new todo_1.Todo(Math.random().toString(), "this is sample.");
    res.status(201).json({ message: 'hello world.', createdTodo: newTodo });
};
exports.getHandler = getHandler;
