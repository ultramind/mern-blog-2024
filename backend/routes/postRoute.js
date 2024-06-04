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
import optionalAuth from '../middlewares/optionalAuth.js'
import protectedRoute from '../middlewares/protectedRoute.js'
const router = express.Router()

router.post('/', protectedRoute, addPost)
// router.get('/', getAllPosts)
router.get('/query', getPostsByFilter)

router.get('/category/:category', getPostsByCategory)
router.get('/:slug', optionalAuth, getPost)
router.put('/:postId/edit', protectedRoute, editPost)
router.put('/:postId/like', protectedRoute, likePost)
router.delete('/:postId/delete', protectedRoute, deletePost)

export default router
