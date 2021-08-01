import TodoModel from '../models/todoHeaderModel.js'

const todoHeaderCtrl = {
    getTodos: async(req, res) => {
        try{
            await TodoModel.find((err,data) =>{
                if(err){
                    res.status(500).send(err).json({msg: err.message})
                }
                else {
                    res.status(201).send(data)
                }
            })
        }
        catch(err){
            return res.status(500).json({msg: err.message}) 
        }
    },
    createTodo: async(req, res) => {
        try{
            const saveTodo = req.body
            await TodoModel.create(saveTodo,(err, data) =>{
                if(err){
                    res.status(500).send(err).json({msg: err.message})
                }
                else{
                    res.status(201).send(data)
                }
            })
        }
        catch(err){
            return res.status(500).json({msg: err.message}) 
        }
    },
    deleteTodo: async(req, res) => {
        try{
            const _todoId = req.params.todoheaderid
            await TodoModel.findByIdAndDelete(_todoId)
            res.json({msg: 'Deleted a todo'})
        }   
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateTodo: async(req, res) => {
        try{
            const {header} = req.body 
            const _todoId = req.params.todoheaderid
            await TodoModel.findByIdAndUpdate({_id: _todoId}, {header})
            res.json({msg: 'Updated a todo'})
        }
        catch(err){
            return res.send(500).json({msg: err.nessage})
        }
    }
}


export default todoHeaderCtrl