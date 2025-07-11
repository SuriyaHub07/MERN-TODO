import jwt from "jsonwebtoken"
import appConfig from "../config.js/config.js"

const authenticate = async(req,res,next)=>{
  //Get the token 
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  // check token is exist or not
   if(!authHeader || !authHeader.startsWith("Bearer")){
    res.status(404).json({message:"invaild Token"});
   }
  //take the token using split 
  try{
   const token = authHeader.split(" ")[1];
   const user =jwt.verify(token,appConfig.jwt_key);
   req.user = user;
   console.log("Entering middleware",user);
   next()
  }
  catch(err){
    console.log("invaild token");
    res.status(401).json({error:err.message});
  }

}





export default authenticate;