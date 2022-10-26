//? Dependencies
const express = require('express')
const db = require('./utils/database')
//? Files
const {port} = require('./config')
const initModels = require('./models/InitModels')

//? Routes
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const categoriesRouter = require('./categories/categories.router')
const postsRouter = require('./posts/posts.router')

//? Initial configs
const app = express()

//? Habilita el uso de json 
app.use(express.json())


db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })


initModels()
//? Probamos que funcione la conexion 
app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'All good',
        users: `localhost:${port}/api/v1/users`,
        endpoints: {
            not: 'ready yet'
        }
    })
})


//? Rutas
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/posts', postsRouter)




//? Puerto
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})