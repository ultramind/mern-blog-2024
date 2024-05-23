import { v2 as cloudinary } from 'cloudinary'

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET_KEY
// })

cloudinary.config({
  cloud_name: 'ultra-brain',
  api_key: '836124532939367',
  api_secret: '2OTpf8-vDakKCrpSd-x1ZYgccyA'
})

export default cloudinary
