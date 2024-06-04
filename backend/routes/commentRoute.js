import express from 'express'
import {
  addComment,
  deleteReply,
  getAllComments,
  replyComment
} from '../controllers/commentController.js'
import protectedRoute from '../middlewares/protectedRoute.js'
const router = express.Router()

router.post('/:postId/comment', addComment)
router.get('/:postId/comment', getAllComments)
router.put('/:commentId/reply', protectedRoute, replyComment)
router.put('/:commentId/reply/:replyId/delete', protectedRoute, deleteReply)

export default router
