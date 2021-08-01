import express from 'express'
const router = express.Router()

import todoListCtrl from '../controllers/todoListCtrl.js'

router.route('/todo/:todoheaderid/todolist')
    .get(todoListCtrl.getTodoList)
    .post(todoListCtrl.createTodoList)
router.route('/todo/:todoheaderid/todolist/:todolistid')
    .delete(todoListCtrl.deleteTodoList)
    .put(todoListCtrl.updateTodoList)

export default router