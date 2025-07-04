import {model,Schema} from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true}

})

userSchema.pre("save", async function hashpassword(next){
    if(!this.isModified("password")){
        return next()
    }

    this.password =await bcrypt.hash(this.password,10);
    next();
})

export const UserModel = model("user",userSchema)