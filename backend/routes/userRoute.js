import express from 'express'
import {
  userAuth,
  userRegistration,
  getUserProfile,
  updateUserProfile,
  logoutUser
} from '../controllers/userController.js'
import protectRoute from '../middlewares/protect.js'

const router = express.Router()

router.post('/auth', userAuth)
router.post('/', userRegistration)
router.post('/logout', logoutUser)
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile)

export default router
