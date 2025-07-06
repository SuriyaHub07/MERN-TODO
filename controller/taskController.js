import {taskService,getservice} from "../services/taskServices.js"


export const taskController = async(req,res)=>{
        try{
            const taskData = {
                user:req.user.id,
                todo:req.body.todo,
                status:req.body.status,
            }
         console.log(taskData)
         const rel = await taskService(taskData)

        
       }
       catch(err){
         res.status(400).json({error:err.message})
       }
}


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