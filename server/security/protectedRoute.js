import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

async function protectedRoute(req, res, next){
   const token = req.cookies.jwt;
   if(!token){ return res.status(501).json({error: "Unauthorized - No token Provided"})}

   const decode = jwt.verify( token, process.env.JWT_SECRET);

   if(!decode){return res.status(501).json({error: 'Unauthorized - Invalid token Provided'})}

    try{
        const user = await User.findById(decode.id)
        if(!user){
            return res.status(500).json({error : 'Invalid User'})
        }
        const userId = user._id.valueOf()
        req.userId = userId ;
        next();
        
    }
    catch(error){
        console.log("Error is secuiry", error.message)
        return res.status(500).json({error: 'Internal Server Error'})
    }

}

export default protectedRoute;