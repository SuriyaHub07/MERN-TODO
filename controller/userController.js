import { registerService,loginService } from "../services/userServices.js"

export const registerController = async(req,res)=>{
    try{
        console.log(req.body.userName,req.body.password)
        const resVal = await registerService(req.body.userName,req.body.password)
        res.status(200).json({msg:"user created sucessful"})
    }
    catch(err){
       res.status(400).json({error:err.message})
       console.log(err);
       
    }
}

export const loginController = async(req,res)=>{
    try{
        console.log(req.body.userName,req.body.password)
   const retVal = await loginService(req.body.userName,req.body.password)
   res.status(200).json({msg:"user login sucess",token:retVal.token})
    }
    catch(err){
      res.status(400).json({error:err.msg})
      console.log(err)
    }
}

