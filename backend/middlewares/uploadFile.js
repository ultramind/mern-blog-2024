import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, './backend/public/uploads/posts')
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const cloudStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage })
export const cloudUpload = multer({ storage: cloudStorage })

export default upload
