import mongoose, { Schema } from 'mongoose'

const commentSchema = mongoose.Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    comment: {
      type: String,
      require: true
    },
    replies: [
      {
        author: {
          id: { type: Schema.Types.ObjectId },
          name: String
        },
        reply: {
          type: String,
          required: true
        },
        createdAt: {
          type: Date,
          default: new Date().getTime()
        }
      }
    ]
  },
  { timestamps: true }
)

const Comment =
  mongoose.model.Comments || mongoose.model('comment', commentSchema)
export default Comment
