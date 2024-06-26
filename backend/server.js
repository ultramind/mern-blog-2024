import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import postRoute from './routes/postRoute.js'
import commentRoute from './routes/commentRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import connectDB from './configs/dbConn.js'
import cors from 'cors'

const app = express()
dotenv.config()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // send form data
app.use(cookieParser())

// cors
app.use(
  cors({
    origin: '*',
    credentials: true
  })
)

// dbConnection
connectDB()

//route middleware
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/post', commentRoute)
app.use('/api/category', categoryRoute)

// root app route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to mytechprocess.com' })
})

// error handling middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000
// app listing on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
