const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalsModels")
const User = require('../models/userModels')
//desc  getGoals
//route Set/api/goals
//access Private
const getGoals = asyncHandler(async(req, res)=>{
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})
//desc  setGoals
//route Set/api/goals
//access Private
const setGoals = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)
})

//desc  updateGoals
//route PUT/api/goals/:id
//access Private
const updateGoals = asyncHandler(async (req, res)=>{
    const goal = await Goal.findById(req.params.id)
    console.log(goal)
    if(!goal){
        res.status(400)
         throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)
    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //Check that the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error("Unauthorized user")
    }
    const updatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoals)
})

//desc  deleteGoals
//route DELETE/api/goals/:id
//access Private
const deleteGoals = asyncHandler(async (req, res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
         
    }
    const user = await User.findById(req.user.id)
    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //Check that the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error("UNauthorized user")
    }
    await goal.remove()
    res.status(200).json({id: req.params.id})
}
)


module.exports = {
    getGoals,
     setGoals,
     updateGoals,
     deleteGoals
}