import express from 'express'
import {
  addComment,
  getAllComments,
  replyComment
} from '../controllers/commentController.js'
const router = express.Router()

router.post('/:postId/comment', addComment)
router.get('/:postId/comment', getAllComments)
router.put('/:commentId/reply', replyComment)

export default router
