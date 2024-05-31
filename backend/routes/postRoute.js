import express from 'express'
import {
  addPost,
  getAllPosts,
  getPost,
  getPostsByCategory,
  getPostsByFilter,
  likePost
} from '../controllers/postController.js'
import protectRoute from '../middlewares/protect.js'
const router = express.Router()

router.post('/', protectRoute, addPost)
// router.get('/', getAllPosts)
router.get('/query', getPostsByFilter)
router.put('/like', protectRoute, likePost)
router.get('/category/:category', getPostsByCategory)
router.get('/:slug', protectRoute, getPost)

export default router
