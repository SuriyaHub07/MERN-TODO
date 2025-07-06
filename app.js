import exp from "express";
import appConfig from "./config.js/config.js";
import connectToMongooDB from "./db/mongoo.js";
import userRoutes from "./Routes/userRoutes.js";
import  taskRoutes from "./Routes/taskRoutes.js";
const app = exp();
app.use(exp.json());
app.use("/auth",userRoutes);
app.use("/task",taskRoutes);

const connecttodb = async ()=>{
    try{
     if(appConfig.db == "mongo"){
       await connectToMongooDB();
     }
    }
    catch(err){
     console.log("Db is not connected",err);
    }
}

app.listen(appConfig.port,()=>{
    connecttodb();
    console.log("connected sucessful",appConfig.port);
})

