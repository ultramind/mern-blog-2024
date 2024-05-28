//  checking if the user is an administrator
export const isAdmin = (req, res, next) => {
  const user = req.user
  if (!user.isAdmin) {
    res.status(401)
    throw new Error('You must be an administrator')
  }
  next()
}
