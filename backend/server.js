const express = require("express")
const colors = require("colors")
const dotenv = require('dotenv').config()
const port  = process.env.PORT || 5000 
const connectDB = require("./config/db")
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()


connectDB();
app.use(express.json())
app.use(express.urlencoded({extended: false})) 

app.use('/api/goals', require('./routes/getRoutes'))
// app.get('/api/goals ',(res,req)=> {
//     res.json({message: 'Get goals'})
// })
app.use(errorHandler)
app.listen(port, ()=> console.log(`Server started on port ${port}`))
