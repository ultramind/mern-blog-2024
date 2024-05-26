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
        name: {
          type: String,
          required: true
        },
        commentId: {
          type: Schema.Types.ObjectId,
          required: true
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
