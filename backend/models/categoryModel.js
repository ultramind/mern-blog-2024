import mongoose, { Schema } from 'mongoose'

const categorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
)

const Category =
  mongoose.model.Categories || mongoose.model('category', categorySchema)
export default Category
