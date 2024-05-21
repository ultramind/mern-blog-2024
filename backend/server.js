import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import postRoute from './routes/postRoute.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import connectDB from './configs/dbConn.js'

const app = express()
dotenv.config()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // send form data
app.use(cookieParser())

// dbConnection
connectDB()

//route middleware
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

// root app route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ultra Auth root page' })
})

// error handling middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000
// app listing on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
