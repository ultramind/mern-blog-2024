import express from 'express'
import { addComment, getAllComments } from '../controllers/commentController.js'
const router = express.Router()

router.post('/:postId/comment', addComment)
router.get('/:postId/comment', getAllComments)

export default router
