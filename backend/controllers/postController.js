import Post from '../models/postModel.js'
import { generateSlug } from '../utils/utils.js'
import asyncHandler from 'express-async-handler'

// @desc for the post add
// route POST => /api/posts
// access private
export const addPost = asyncHandler(async (req, res) => {
  const { title, body } = req.body
  const slug = generateSlug(title)

  const postExits = await Post.findOne({ slug, category: req.user.stack })
  if (postExits) {
    res.status(400)
    throw new Error('Kindly change the title of ur post')
  }

  const post = await Post.create({
    author: {
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      id: req.user._id
    },
    title,
    slug,
    category: req.user.stack,
    body,
    imageUrl: req.file.filename
  })
  if (post) {
    res.status(201).json({
      author: {
        firstname: post.author.firstname,
        lastname: post.author.lastname,
        _id: post._id
      },
      title: post.title,
      slug: post.slug,
      category: post.category,
      body: post.body,
      imageUrl: post.imageUrl
    })
  } else {
    res.status(400)
    throw new Error('Could not add new post')
  }
})
