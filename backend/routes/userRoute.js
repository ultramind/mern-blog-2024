import express from 'express'
import {
  userAuth,
  userRegistration,
  getUserProfile,
  updateUserProfile,
  logoutUser
} from '../controllers/userController.js'
import protectedRoute from '../middlewares/protectedRoute.js'

const router = express.Router()

router.post('/auth', userAuth)
router.post('/', userRegistration)
router.post('/logout', logoutUser)
router.get('/:userId', getUserProfile)
router
  .route('/profile')
  .get(protectedRoute, getUserProfile)
  .put(protectedRoute, updateUserProfile)

export default router
