import bcrypt from "bcryptjs";
import {findUserByName,registerUser} from "../DAL/userDal.js"
import JWT from "jsonwebtoken";
import appConfig from "../config.js/config.js";

 export const registerService = async (userName, password) => {
    let user = await findUserByName(userName);
    console.log(user);
    if (user) {
        throw new Error("User already exists")
    }
    user = await registerUser({userName, password});
    return user;
   
}

export const loginService = async(userName,password)=>{

    console.log("service",userName,password)

 let user = await findUserByName(userName);
 console.log("user:",user);
 

if(!user||!(await bcrypt.compare(password,user.password))){

    console.log("erro1")
    throw new Error("invalid credentials")
}

const token = JWT.sign({id:user._id},appConfig.jwt_key,{expiresIn:"1h"});

return {user,token};
}