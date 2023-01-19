const express = require("express")
const colors = require("colors")
const dotenv = require('dotenv').config()
const port  = process.env.PORT || 5000 
const connectDB = require("./config/db")
const {errorHandler} = require('./middleware/errorMiddleware')
const bodyparser = require('body-parser')



connectDB();
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false})) 

app.use('/api/goals', require('./routes/getRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
// app.get('/api/goals ',(res,req)=> {
//     res.json({message: 'Get goals'})
// })
app.use(errorHandler)
app.listen(port, ()=> console.log(`Server started on port ${port}`))
