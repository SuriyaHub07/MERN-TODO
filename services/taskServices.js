import {addTask,getTask,updateTask,findById,deleteTask} from  "../DAL/userDal.js"



export const taskService= async(taskData)=>{
    try{
    console.log("msssg",taskData)
    // return await addTask(taskData);
    }
    catch(err){
        console.log(err);
    }
}

export const getservice = async(getData)=>{
    return  await getTask(getData);
}

export const updateService = async(taskid,taskdata)=>{
    let task = await findById(taskid);
    console.log("task",task)
    if(task._id.toString() != taskid){
        throw new Error("ivalid user");
    }
   return await updateTask(taskid,taskdata);
}


export const deleteService =  async (taskid,userid) => {
    let task = await findById(taskid);
    console.log("deletetask",task)
    if(!task){
        throw new Error("invaild user")
    }
    if(task.user.toString() != userid){
        throw new Error("user invalid");
    }
    return await deleteTask(taskid);


}