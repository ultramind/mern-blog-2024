import mongoose from 'mongoose'

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
    numOfLikes: Number,
    comments: {
      type: Array
    },
    status: {
      type: String,
      default: 'published'
    },
    imageUrl: {
      type: String
    }
  },
  { timestamps: true }
)

const Post = mongoose.model.Posts || mongoose.model('post', postSchema)
export default Post
