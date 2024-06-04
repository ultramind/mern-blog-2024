import express from 'express'
import {
  addCategory,
  getCategories
} from '../controllers/categoryControllers.js'
import { isAdmin } from '../middlewares/protectAdmin.js'
import protectedRoute from '../middlewares/protectedRoute.js'

const router = express.Router()

router.route('/').post(protectedRoute, isAdmin, addCategory).get(getCategories)

export default router
