
const bcrypt=require("bcrypt")

const Services=require("../Models/services")


const addServices=async (req,res)=>{

    const {email,password,username,phone,service,title,ratings,price,image,description}=req.body


    try{


        const hashedPwd =await bcrypt.hash(password,10)
        const services=await Services.create({
            email,
            password:hashedPwd,
            username,
            phone,
            service,
            title,
            ratings,
            price,
            description
        })

        console.log(services)
    }
    catch(e){
        console.log(e)
        res.status(500).json({"msg":"something went wrong"})

    }


}


const getServices=async (req,res)=>{

    // const {email,password,username,phone,service,title,ratings,price,image,description}=req.body


    try{


        const services= await Services.find()

        res.send(services)
        console.log(services)
    }
    catch(e){
        console.log(e)
        res.status(500).json({"msg":"something went wrong"})

    }


}

module.exports={addServices,getServices}