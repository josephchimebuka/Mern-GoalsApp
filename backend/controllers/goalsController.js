const asyncHandler = require("express-async-handler")

//desc  getGoals
//route Set/api/goals
//access Private
const getGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'Get goals'})
})
//desc  setGoals
//route Set/api/goals
//access Private
const setGoals = asyncHandler(async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Please add text')
    }
})

//desc  updateGoals
//route PUT/api/goals/:id
//access Private
const updateGoals = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Update goals ${req.params.id}`})
})

//desc  deleteGoals
//route DELETE/api/goals/:id
//access Private
const deleteGoals = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Delete goals ${req.params.id}`})
}
)


module.exports = {
    getGoals,
     setGoals,
     updateGoals,
     deleteGoals
}