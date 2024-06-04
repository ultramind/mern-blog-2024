import asyncHandler from 'express-async-handler'
import Comment from '../models/commentModel.js'
import Post from '../models/postModel.js'

// @desc for the adding comment
// route POST => /api/post
// access public
export const addComment = asyncHandler(async (req, res) => {
  const { postId } = req.params
  const { name, comment } = req.body

  const postExits = await Post.findOne({ _id: postId })
  if (!postExits) {
    res.status(400)
    throw new Error('Post does not exist')
  }

  const newComment = await Comment.create({
    name,
    postId,
    comment
  })
  if (newComment) {
    res.status(201).json({
      message: 'Comment added successful',
      newComment
    })
  } else {
    res.status(400)
    throw new Error('Could not add new comment')
  }
})

// @desc fot the all comment
// route GET => /api/post/:postId/comment
// access public routes
export const getAllComments = asyncHandler(async (req, res) => {
  const { postId } = req.params
  const comments = await Comment.find({ postId }).sort({ _id: -1 }).limit(3)

  // let replies = comments.map(c => {
  //   return c?.replies?.length > 0 ? c?.replies?.reverse() : []
  // })
  // const newComments = [...comments, replies]
  res.status(200).json(comments)
})

// @desc for the adding reply to comment
// route POST => /api/post/:commentId/ comment
// access public
export const replyComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params
  const { comment } = req.body

  const reply = {
    author: { id: req.user._id, name: req.user.firstname },
    reply: comment
  }

  const commentExist = await Comment.findById(commentId)
  if (!commentExist) {
    res.status(400)
    throw new Error('Comment does not exist')
  }

  const newComment = await Comment.findOneAndUpdate(
    { _id: commentId },
    { $push: { replies: reply } },
    { new: true }
  )
  if (newComment) {
    res.status(201).json({
      message: 'Comment replied successful',
      newComment
    })
  } else {
    res.status(400)
    throw new Error('Could not add new comment')
  }
})

export const deleteReply = asyncHandler(async (req, res) => {
  const { commentId, replyId } = req.params

  const comment = await Comment.findOne({ _id: commentId })
  if (!comment) {
    res.status(404)
    throw new Error('comment not found ooh')
  }

  comment.replies = comment.replies.filter(r => r._id != replyId)
  const updateComment = await comment.save()

  res.status(200).json({ message: 'Reply removed', updateComment })
})
