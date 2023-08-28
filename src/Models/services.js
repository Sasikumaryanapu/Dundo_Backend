const mongoose=require("mongoose")

const servicesSchema=mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
    },
    description:{
        tyep:String,
    }, 
    cart:{
        type:Number
    }

},{timestamps:true})

module.exports=mongoose.model("services",servicesSchema)