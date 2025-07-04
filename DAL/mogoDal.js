import {UserModel} from "../mode/userSchema.js"
import {TaskModel} from "../mode/taskSchema.js"

export const  findUserByName= (userName)=>{
  return UserModel.findOne({userName})
}


export const registerUser = (userdata)=>{
    return UserModel.create(userdata);
}

export const addTask =(taskData)=>{
  return TaskModel.create(taskData)
}