const mongoose=require("mongoose")

const displaySchema=mongoose.Schema({
    
   
    heading:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports=mongoose.model("users",userSchema)