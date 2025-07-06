import {addTask,getTask,updateTask} from  "../DAL/userDal.js"



export const taskService= async(taskData)=>{
    return await addTask(taskData);
}

export const getservice = async(getData)=>{
    return  await getTask(getData);
}

export const updateService = async(userid,taskdata)=>{
   return await updateTask(userid,taskdata);
}