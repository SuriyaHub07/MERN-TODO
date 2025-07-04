
export const addController = async(req,res)=>{
    try{
      const taskData ={
        user:req.user.id,
        todo:req.user.todo,
        status:user.status
        }
        console.log(taskData);
        let addVal = await addService(taskData);
        res.status(200).json({msg:"Task add sucesfully"});
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:err.message})

    }
}