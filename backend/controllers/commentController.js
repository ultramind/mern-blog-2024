import asyncHandler from 'express-async-handler'
import Comment from '../models/commentModel.js'
import Post from '../models/postModel.js'

// @desc for the post add
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

// @desc fot the all posts
// route GET => /api/posts
// access public routes
export const getAllComments = asyncHandler(async (req, res) => {
  const posts = await Comment.find().sort({ _id: -1 })
  res.status(200).json(posts)
})
