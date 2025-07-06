import {UserModel} from "../mode/userSchema.js"
import TaskModel from "../mode/taskSchema.js"

export const  findUserByName= (userName)=>{
  return UserModel.findOne({userName})
}


export const registerUser = (userdata)=>{
    return UserModel.create(userdata);
}

export const findById = async(id)=>{
  return TaskModel.findById(id);
}

export const addTask = (taskdata)=>{
  return TaskModel.create(taskdata)
}

export const getTask =(userid)=>{
 return TaskModel.find({user:userid});
}

export const updateTask = (id,updateTask)=>{
  return TaskModel.findByIdAndUpdate(id,updateTask,{new:true});
}

export const deleteTask = (id)=>{
  return TaskModel.findByIdAndDelete(id);
}