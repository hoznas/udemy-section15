"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'NEW TOTO created.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("todo is not found");
    }
    TODOS[todoIndex].text = updateText;
    res.json({ message: "updated!", updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("todo is not found");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "deleted!" });
};
exports.deleteTodo = deleteTodo;
/*
export const getHandler: RequestHandler = (req,res,next)=>{

    const newTodo = new Todo(Math.random().toString(), "this is sample.")
    res.status(201).json({message: 'hello world.', createdTodo: newTodo})
} */ 
