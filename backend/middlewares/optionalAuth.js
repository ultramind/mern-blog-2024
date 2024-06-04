import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const optionalAuth = expressAsyncHandler(async (req, res, next) => {
  let token
  token = req.cookies.jwt
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.user = await User.findById(decoded.userId).select('-password')
      next()
    } catch (error) {
      next()
    }
  } else {
    next()
  }
})

export default optionalAuth
