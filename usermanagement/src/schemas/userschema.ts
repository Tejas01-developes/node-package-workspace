import mongoose from "mongoose";

 const userschema=new mongoose.Schema({
name:{
    type:String,
    required:[true,"name is required"],
},
email:{
    type:String,
    required:[true,"email is required"],
    unique:true
},
password:{
    type:String,
    required:[true,"password is required"],
   
    
}

},{timestamps:true})

const collection1=mongoose.model("users1",userschema);
export default collection1;