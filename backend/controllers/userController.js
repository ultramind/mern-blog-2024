import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc fot the user registration
// route POST => /api/users
// access public
const userRegistration = asyncHandler(async (req, res) => {
  const { firstname, lastname, stack, email, password } = req.body

  const userExits = await User.findOne({ email })
  if (userExits) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    firstname,
    lastname,
    stack,
    email,
    password
  })
  if (user) {
    await generateToken(user._id, res)
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      stack: user.stack,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc fot the user authentication
// route POST => /api/users/auth
// access public
const userAuth = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (email !== '' && password !== '') {
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      await generateToken(user._id, res)
      res.status(200).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        stack: user.stack,
        isAdmin: user.isAdmin
      })
    } else {
      res.status(400)
      throw new Error('Wrong Credentials')
    }
  } else {
    res.status(400)
    throw new Error('Fill all required details')
  }
})

// @desc fot the user Logout
// route POST => /api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(0),
    httpOnly: true
  })
  res.status(200).json({ message: 'Your logged out successfully' })
})

// @desc fot the user profile
// route GET => /api/users/profile
// access private routes
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email,
    stack: req.user.stack,
    isAdmin: req.user.isAdmin
  })
})

// @desc fot the user Logout
// route PUT => /api/users/profile
// access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body
  const user = await User.findById(req.user._id)

  if (user) {
    user.firstname = firstname || user.firstname
    user.lastname = lastname || user.lastname
    user.email = email || user.email
    // check if password is inlcuded in body
    if (password) {
      user.password = password || user.password
    }
  }
  const updatedUser = await user.save()
  res.status(200).json({
    _id: updatedUser._id,
    firstname: updatedUser.firstname,
    lastname: updatedUser.lastname,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin
  })
})

export {
  userAuth,
  userRegistration,
  getUserProfile,
  updateUserProfile,
  logoutUser
}
