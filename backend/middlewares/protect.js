import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

const protectRoute = expressAsyncHandler( async (req, res, next) => {
    let token; 
    token = req.cookies.jwt;
    if (token) { 
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = await User.findById(decoded.userId).select('-password');
            next()
        } catch (error) {
            res.status(404);
            throw new Error(`Token invalid Token received -- ${error.message}`)
        }
    }else{
        res.status(401)
        throw new Error('No token - Not Authorized')
    }
});


export default protectRoute;  