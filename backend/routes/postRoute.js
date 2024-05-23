import express from 'express'
import { addPost, getAllPosts, getPost } from '../controllers/postController.js'
import protectRoute from '../middlewares/protect.js'
import upload, { cloudUpload } from '../middlewares/uploadFile.js'
const router = express.Router()

router.post('/', protectRoute, cloudUpload.single('image'), addPost)
router.get('/', getAllPosts)
router.get('/:slug', getPost)

export default router
