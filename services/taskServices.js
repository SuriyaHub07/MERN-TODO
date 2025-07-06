import {addTask,getTask} from  "../DAL/userDal.js"



export const taskService= async(taskData)=>{
    return await addTask(taskData);
}

export const getservice = async(getData)=>{
    return  await getTask(getData);
}