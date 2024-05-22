import express from 'express'
import { addPost } from '../controllers/postController.js'
import protectRoute from '../middlewares/protect.js'
import upload from '../middlewares/uploadFile.js'
const router = express.Router()

router.post('/', protectRoute, upload.single('image'), addPost)

export default router
