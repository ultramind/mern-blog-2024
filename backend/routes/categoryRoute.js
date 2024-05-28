import express from 'express'
import protectRoute from '../middlewares/protect.js'
import {
  addCategory,
  getCategories
} from '../controllers/categoryControllers.js'
import { isAdmin } from '../middlewares/protectAdmin.js'

const router = express.Router()

router.route('/').post(protectRoute, isAdmin, addCategory).get(getCategories)

export default router
