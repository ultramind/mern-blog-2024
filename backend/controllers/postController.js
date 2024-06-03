import cloudinary from '../configs/cloudinary.js'
import Post from '../models/postModel.js'
import { generateSlug } from '../utils/utils.js'
import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

const PAGE = 1
const LIMIT_PAGE = 9

// @desc for the post add
// route POST => /api/posts
// access private
export const addPost = asyncHandler(async (req, res) => {
  const { title, body } = req.body
  if (title === '' || body === '') {
    res.status(400)
    throw new Error('Title and Body is required', title)
  }
  const slug = generateSlug(title)

  const postExits = await Post.findOne({ slug, category: req.user.stack })
  if (postExits) {
    res.status(400)
    throw new Error('Kindly change the title of ur post')
  }

  // upload to cloudinary
  // const result = await cloudinary.uploader.upload(req.file.path)
  // if (!result) {
  //   res.status(400)
  //   throw new Error('Error uploading file')
  // }

  const result = {
    url: 'https://source.coveo.com/images/illustration-full.png'
  }

  const userStack = req.user.stack.toLowerCase()

  const post = await Post.create({
    author: {
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      id: req.user._id
    },
    title,
    slug,
    category: userStack,
    body,
    imageUrl: result.url
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

// @desc fot the all posts
// route GET => /api/posts
// access public routes
export const getAllPosts = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || PAGE
  const skip = (page - 1) * LIMIT_PAGE
  const posts = await Post.find().sort({ _id: -1 }).skip(skip).limit(LIMIT_PAGE)
  res.status(200).json(posts)
})

// @desc fot the single post
// route GET => /api/posts/slug
// access public routes
export const getPost = asyncHandler(async (req, res) => {
  const { slug } = req.params
  const post = await Post.findOne({ slug })
  if (!post) {
    res.status(404)
    throw new Error('Post not found single')
  }
  res.status(200).json(post)
})

// @desc fot the single post
// route GET => /api/posts/category/
// access public routes
export const getPostsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params
  const page = Number(req.query.page) || PAGE
  const skip = (page - 1) * LIMIT_PAGE

  const posts = await Post.find({
    category: { $regex: category, $options: 'i' }
  })
    .sort({ _id: -1 })
    .skip(skip)
    .limit(LIMIT_PAGE)
  if (!posts) {
    res.status(404)
    throw new Error('Post not found by category')
  }
  res.status(200).json(posts)
})

// @desc get post by category, search and sort
// route GET => /api/posts/
// access public routes
export const getPostsByFilter = asyncHandler(async (req, res) => {
  let query = {}
  const page = Number(req.query.page) || PAGE
  const limit = Number(req.query.limit) || LIMIT_PAGE
  const search = req.query.search || ''
  if (search) {
    query.title = { $regex: search, $options: 'i' }
  }
  let categoryText = req.query.category || ''
  const categories = await Category.find()
  if (categoryText !== '') {
    query.category = { $regex: categoryText, $options: 'i' }
  }
  const sort = req.query.sort || 'desc'
  const skip = (page - 1) * LIMIT_PAGE

  let sortQuery
  if (sort == 'asc') {
    sortQuery = { _id: 1 }
  } else {
    sortQuery = { _id: -1 }
  }

  const posts = await Post.find(query).sort(sortQuery).skip(skip).limit(limit)

  if (!posts) {
    res.status(404)
    throw new Error('Post not found filter')
  }

  const totalDocument = await Post.countDocuments(query)

  const response = {
    currentPage: page,
    totalDocument,
    limit,
    posts
  }

  res.status(200).json(response)
})

export const likePost = asyncHandler(async (req, res) => {
  const { postId } = req.params
  const post = await Post.findOne({ _id: postId })
  if (!post) {
    res.status(404)
    throw new Error('Post not found')
  }
  const hasLiked = post.stat.numOfLikes.includes(req.user._id)
  let updatedPost
  if (hasLiked) {
    updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      {
        $pull: { 'stat.numOfLikes': req.user._id }
      },
      { new: true }
    )
  } else {
    updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      {
        $push: { 'stat.numOfLikes': req.user._id }
      },
      { new: true }
    )
  }

  res.status(200).json(updatedPost)
})

export const editPost = asyncHandler(async (req, res) => {
  const { postId } = req.params

  const { title, body, id } = req.body

  const post = await Post.findOne({ _id: postId })
  if (!post) {
    res.status(404)
    throw new Error('Post to be edited not found')
  }
  if (post.author.id === req.user._id) {
    res.status(404)
    throw new Error('Verify post owner failed')
  }

  const slug = generateSlug(title)

  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId },
    {
      title,
      slug,
      body
    },
    { new: true }
  )
  res.status(200).json(updatedPost)
})

export const deletePost = asyncHandler(async (req, res) => {
  const { postId } = req.params

  const post = await Post.findOne({ _id: postId })
  if (!post) {
    res.status(404)
    throw new Error('Post to be deleted not found')
  }
  if (post.author.id === req.user._id) {
    res.status(404)
    throw new Error('Verify post owner failed')
  }

  const deletedPost = await Post.deleteOne({ _id: postId })
  res.status(200).json(deletedPost)
})
