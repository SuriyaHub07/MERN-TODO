import  mongoose,{ Schema,model } from "mongoose";

 const taskSchema = new Schema({
    todo:{type:String,required:true},
    status:{type:String,rquired:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
},{timestamps:true})

const TaskModel = model("task",taskSchema);

export default TaskModel;