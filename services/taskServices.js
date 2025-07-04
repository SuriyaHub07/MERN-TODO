import {addTask} from  "../DAL/userDal.js"



export const taskAdded = async(taskData)=>{
    return await addTask(taskData);
}