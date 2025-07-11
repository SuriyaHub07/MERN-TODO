import mon from "mongoose";
import appConfig from "../config.js/config.js";

mon.set("debug", true);
const connectToMongooDB  = async()=>{
    try{
         mon.connect(appConfig.mongo_url);
         console.log("mongo db is sucessful")
    }
    catch(err){
    throw new Error(err)
    
    }

}

export default connectToMongooDB;
