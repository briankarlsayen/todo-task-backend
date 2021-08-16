import TodoModel from "../models/todoHeaderModel.js";

const todoListCtrl = {
    getTodoList: async(req, res) => {
        try{
            const _todoId = req.params.todoheaderid
            const dbTodo = await TodoModel.find({_id: _todoId}).sort({createdAt: -1})
            res.json(dbTodo)
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createTodoList: async(req, res) => {
        try{
            const _todoId = req.params.todoheaderid
            const {todo_id, todo_title, todo_completed} = req.body
            const dbTodo = await TodoModel.findOne({_id: _todoId})
            dbTodo.list.push({todo_id: todo_id, todo_title: todo_title, todo_completed: false})
            const create = await dbTodo.save()
            res.json(create)
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteTodoList: async(req,res) => {
        try{
            const _todolistid = req.params.todolistid
            const dbTodo = await TodoModel.findOne({"list._id": _todolistid})
            const pos = dbTodo.list.map(function(e) {return e.id}).indexOf(_todolistid)
            dbTodo.list.splice(pos, 1)
            const newList = await dbTodo.save()
            res.json({msg: "Deleted a todo list"})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateTodoList: async(req, res) => {
        try{
            const _todolistid = req.params.todolistid
            const {todo_id, todo_title, todo_completed} = req.body
            await TodoModel.updateOne({"list._id": _todolistid},
            {'$set': {
                "list.$.todo_id": todo_id,
                "list.$.todo_title": todo_title,
                "list.$.todo_completed": todo_completed
            }})
            res.json({msg: "Updated a todo list"})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

export default todoListCtrl