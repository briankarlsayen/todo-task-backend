import express from 'express'
const router = express.Router()

import todoHeaderCtrl from '../controllers/todoHeaderCtrl.js'

router.route('/todo')
    .get(todoHeaderCtrl.getTodos)
    .post(todoHeaderCtrl.createTodo)
router.route('/todo/:todoheaderid')
    .delete(todoHeaderCtrl.deleteTodo)
    .put(todoHeaderCtrl.updateTodo)
export default router