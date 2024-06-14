import mongoose, { Schema } from 'mongoose'

const postSchema = mongoose.Schema(
  {
    author: {
      id: String,
      firstname: String,
      lastname: String
    },
    title: {
      type: String,
      require: true
    },
    category: {
      type: String,
      require: true
    },
    slug: {
      type: String,
      unique: true,
      require: true
    },
    body: {
      type: String,
      require: true
    },
    stat: {
      numOfLikes: [{ type: Schema.Types.ObjectId }],
      viewers: [{ type: Schema.Types.ObjectId }],
      numOfViews: { type: Number, default: 0 }
    },
    comments: {
      type: Array
    },
    status: {
      type: String,
      default: 'published'
    },
    featured: {
      type: Boolean,
      default: false
    },
    imageUrl: {
      type: String
    }
  },
  { timestamps: true }
)

const Post = mongoose.model.Posts || mongoose.model('post', postSchema)
export default Post
