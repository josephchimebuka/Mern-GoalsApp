/*
This code called the express and routed it with the ROUTER property
const express = require('express')
const router = express.Router

but at first the code will be
for read request
router.get('/', (res, req)=> {
    res.json({ message: 'hello'})
})

for create request
router.post('/', (res, req)=> {
    res.json({ message: 'hello'})
})


for update request
router.put('/:id', (res, req)=> {
    res.json({ message:  `Updated ${req.body.params}` })
})

for delete request
router.delete('/', (res, req)=> {
  res.json({ message:  ` Updated ${req.body.params}` })})
and then put and delete for update and delete respectively
But with all of this things that are here there is need for a controller
page.
So go to the goalsController.js 
create


Then I can pass the code for the code from the controller to through the 
getRoutes so for example the get request 
./routes/getRoutes.js
const getGoals = require('./controller/goalsController.js')
 router.route('/', getGoals)


./controller/goalsController.js
const getGoal =(res,req)=>{
    res.json({message: 'hello world'})
}


export.module = [
    getGoal,
]
But to add the code on postman you require a middleware

./server.js
You can call express json 
app.use(express.json)
app.use(express.json.encoded )


Create the Error handler page next



Create mongoDB database for the project


Connect the database with the app
const moongose = require('mongoose)
const connectDB = async()=>{
    try(
  const conn = moongose.connect(process.env.MONGO_URI)
  console.log(`MongoDB connected to ${conn.connection.host}`)
    )catch(

    )
}


Create goals Schema then call it 

const mongooose = require('mongoose')
const goalSchema = mongoose.Schema(
    text:{
        text: STRING,
        required: [true, 'Please enter text']
    }
)


model.export = ('Goals', goalSchema)

To update the goals in the goal cotroller
const

Basically our project can add get retrieve and delete a response but 
now we want to create protected routes that's where JWT comes into play

Created usermodel with naem , password, email;
*/