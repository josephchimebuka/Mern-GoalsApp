const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {getGoals,setGoals, updateGoals, deleteGoals} = require('../controllers/goalsController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports= router      

