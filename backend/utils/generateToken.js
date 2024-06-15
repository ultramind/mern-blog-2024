import jwt from 'jsonwebtoken'

const generateToken = async (userId, res) => {
  const token = await jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d'
  })
  res.cookie('jwt', token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'none'
  })
}

export default generateToken
