import mongoose from 'mongoose'

const todoHeaderSchema = mongoose.Schema({
    header: {
        type: String
    },
    list: [{
        todo_id: {
            type: String,
            default: Date.now()
        },
        todo_title: {
            type: String,
            require: true
        },
        todo_date: {
            type: Date,
            default: Date.now
        },
        todo_completed: {
            type: Boolean,
            default: false
        }
    }]
},
    {timestamps: true}
)

export default mongoose.model('todo_task', todoHeaderSchema)