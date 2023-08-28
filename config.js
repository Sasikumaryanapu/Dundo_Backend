const mongoose=require("mongoose")
const express = require("express")

const app=express() 
const dotenv=require("dotenv")
const Cors=require("cors")



const {signup,signin} = require("./src/Controllers/userController")
const {addServices,getServices} = require("./src/Controllers/servicesController")
const { addToCart, getFromCart } = require("./src/Controllers/cartController")

app.use( Cors({
    origin:" * "
}))


//config
dotenv.config()

//port number
PORT=process.env.PORT || 6000

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/read",(req,res)=>{

    res.send(req.query.name)
    res.send("sasi")
    
})

app.post("/signup",signup)
app.post("/signin",signin)

app.post("/addservice",addServices)
app.get("/getservices",getServices)


app.post("/addcart",addToCart)
app.get("/getcart",getFromCart)




//server connection
mongoose.connect(process.env.MONGO_URL)
.then(app.listen(PORT,()=>{
    console.log("server started on "+PORT)
}))
.catch((error)=>{
    console.log(error)
})
