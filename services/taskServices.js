import {addTask,getTask,updateTask,findById} from  "../DAL/userDal.js"



export const taskService= async(taskData)=>{
    return await addTask(taskData);
}

export const getservice = async(getData)=>{
    return  await getTask(getData);
}

export const updateService = async(userid,taskdata)=>{
    let task = await findById(userid);
    console.log("task",task)
    if(task._id.toString() != userid){
        throw new Error("ivalid user");
    }
   return await updateTask(userid,taskdata);
}