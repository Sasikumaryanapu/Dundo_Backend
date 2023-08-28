const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    
   
    email:{
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
    price:{
        type:Number,
    },
    rating:{
        type:Number,
    },
    count:{
        type:Number,
    }

},{timestamps:true})

module.exports=mongoose.model("cart",cartSchema)