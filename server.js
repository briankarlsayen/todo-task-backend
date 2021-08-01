import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import todoHeaderRouter from './routes/todoHeaderRouter.js'
import todoListRouter from './routes/todoListRouter.js'

//app config
const app = express()
dotenv.config()
const port = process.env.PORT || 5000

//connect to mongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})

//middlewares 
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.send('yow')
})

//routes
app.use('/', todoHeaderRouter)
app.use('/', todoListRouter)

app.listen(port, () => console.log(`You are listening to port ${port}`))