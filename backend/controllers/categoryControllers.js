import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @desc to add category
// route GET => /api/category
// access public routes
export const addCategory = asyncHandler(async (req, res) => {
  const { category } = req.body
  const categoryExist = await Category.findOne({ category })
  if (categoryExist) {
    res.status(400)
    throw new Error('Category already exist')
  }
  const newCategory = await Category.create({ category })
  if (newCategory) res.status(200).json(newCategory)
})

// @desc fot the all categories
// route GET => /api/categories
// access public routes
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ _id: -1 })
  if (categories) res.status(200).json(categories)
})
