import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    stack: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    socials: [{ name: String, url: String }],
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
)

// hashing the password before saved into the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// checking password match
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model.Users || mongoose.model('Users', userSchema)
export default User
