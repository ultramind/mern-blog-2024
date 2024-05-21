import express from 'express'
import { addPost } from '../controllers/postController.js'
import protectRoute from '../middlewares/protect.js'
const router = express.Router()

router.post('/', protectRoute, addPost)

export default router
