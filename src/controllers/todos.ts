import { RequestHandler} from 'express'

import { Todo } from '../models/todo'

const TODOS:Todo[] = []

export const createTodo: RequestHandler = (req,res,next)=>{
    const text = (req.body as {text:string}).text
    const newTodo = new Todo(Math.random().toString(), text)

    TODOS.push(newTodo)

    res.status(201).json({message: 'NEW TOTO created.', createdTodo: newTodo})

} 

export const getHandler: RequestHandler = (req,res,next)=>{

    const newTodo = new Todo(Math.random().toString(), "this is sample.")
    res.status(201).json({message: 'hello world.', createdTodo: newTodo})
} 