import express from 'express'
import {
  addPost,
  deletePost,
  editPost,
  getAllPosts,
  getPost,
  getPostsByCategory,
  getPostsByFilter,
  likePost
} from '../controllers/postController.js'
import protectRoute from '../middlewares/protect.js'
import optionalAuth from '../middlewares/optionalAuth.js'
const router = express.Router()

router.post('/', protectRoute, addPost)
// router.get('/', getAllPosts)
router.get('/query', getPostsByFilter)

router.get('/category/:category', getPostsByCategory)
router.get('/:slug', optionalAuth, getPost)
router.put('/:postId/edit', protectRoute, editPost)
router.put('/:postId/like', protectRoute, likePost)
router.delete('/:postId/delete', protectRoute, deletePost)

export default router
