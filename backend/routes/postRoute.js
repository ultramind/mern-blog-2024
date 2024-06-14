import express from 'express'
import {
  addPost,
  changePostStatus,
  deletePost,
  editPost,
  featuredPost,
  getAllPosts,
  getFeaturedPost,
  getPost,
  getPostsByCategory,
  getPostsByFilter,
  likePost
} from '../controllers/postController.js'
import optionalAuth from '../middlewares/optionalAuth.js'
import protectedRoute from '../middlewares/protectedRoute.js'
import { isAdmin } from '../middlewares/protectAdmin.js'
const router = express.Router()

router.post('/', protectedRoute, addPost)
// router.get('/', getAllPosts)
router.get('/query', getPostsByFilter)
router.get('/featured', getFeaturedPost)

router.get('/category/:category', getPostsByCategory)
router.get('/:slug', optionalAuth, getPost)
router.put('/:postId/edit', protectedRoute, editPost)
router.put('/:postId/change-status', protectedRoute, isAdmin, changePostStatus)
router.put('/:postId/like', protectedRoute, likePost)
router.put('/:postId/featured', protectedRoute, isAdmin, featuredPost)
router.delete('/:postId/delete', protectedRoute, deletePost)

export default router
