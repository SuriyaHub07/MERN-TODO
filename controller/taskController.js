import {taskService,getservice,updateService,deleteService} from "../services/taskServices.js"

//Task controller
export const taskController = async(req,res)=>{
        try{
            const taskData = {
                user:req.user.id,
                todo:req.body.todo,
                status:req.body.status,
            }
         console.log(taskData)
         const rel = await taskService(taskData)
          res.status(200).json({message:"Entering todo data",taskData})
        
       }
       catch(err){
         res.status(400).json({error:err.message})
       }
}

//GET controller


export const getController = async(req,res)=>{
    try{
        console.log("user",req.user)
        const rel = await getservice(req.user.id)
        console.log(rel);
        res.status(200).json(rel)
    }
    catch(err){
        console.log(err)
        res.status(400).json({Error:err.message});
    }


}


export const updateController = async(req,res)=>{
    console.log("user",req.user)
    console.log("body",req.body)
 try{ 
    const upd = 
    {
        user:req.user.id,
        todo:req.body.todo,
        status:req.body.status
    }
    const val = await updateService(req.params.id,upd);
    res.status(200).json(val);
}
catch(err){
    console.log(err);
    res.status(400).json({error:err.message});
}

}

export const deleteController = async(req,res)=>{
     console.log(req.params.id,req.user.id);
try{
    const task = await deleteService(req.params.id,req.user.id)
   
    res.status(200).json(task);
}
catch(err){
res.status(400).json({error:err.msg});
}

}