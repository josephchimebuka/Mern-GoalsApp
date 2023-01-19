const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')
const bcrypt = require('bcryptjs')
//desc  RegisterUser
//route POST/api/users
//access Public
 
 const registerUser = asyncHandler(async(req, res)=>{
   //Gets the value of the code code from the req body of the poatman
   const {name, email, password} = req.body;
   if(!name || !email || !password){
      res.status(400)
      throw new Error("Please fill out all field")
   }

   //Check if user exist
   const userExist = await User.findOne({email})
   if(userExist){
      res.status(400)
      throw new Error('User already exist')
   }

   //Hash password
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   //Create user
   const user = User.create({
      name,
      email,
      password: hashedPassword
   })

   if(user){
      res.status(201).json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id)
      })

 
   }
   else{
      res.status(400)
      throw new Error('Invalid details')
   }
    res.json({message: 'Register user'})
 })


  //desc  LoginUser
//route POST/api/users/login
//access Public
  
const loginUser = asyncHandler(async (req, res)=>{
   const {email, password} = req.body;

   //Check for user email

   const user = await User.findOne({email})
   if(user && (await bcrypt.compare(password, user.password))){
      res.json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id)
      })
   } else {
      res.status(400)
      throw new Error('User does not exist')
   }
 })

   //desc  Get user data
//route GET /api/users/me
//access Public
 
const getMe = asyncHandler(async(req, res)=>{
   const {_id, name, email} = await User.findById(req.user.id)

   res.status(201).json({
      id: _id,
      name,
      email
   })
 })
 //Generate Token
 const generateToken =(id)=>{
   return jwt.sign({id}, process.env.JWT_SECRET, {
     expiresIn: '30d'
   })
   }
 module.exports={
    registerUser,
    loginUser,
    getMe
 }