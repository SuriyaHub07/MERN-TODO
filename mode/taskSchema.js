import mongoose, {model,Schema} from "mongoose"

const taskSchema = new Schema({
    todo : {type:String,required:true},
    status:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
},{timestamps:true});

export const TaskModel = model("task",taskSchema);