import { Router } from 'express'

import {createTodo, getHandler} from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', getHandler)
router.patch('/:id')
router.delete('/:id')




export default router
