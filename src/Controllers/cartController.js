
const Cart=require("../Models/cart")

const addToCart=async (req,res)=>{

    const {email,username,phone,service,title,rating,price,count}=req.body


    try{


        const cart=await Cart.create({
            email,
            username,
            phone,
            service,
            title,
            rating,
            price,
            count
        })

        console.log(cart, "sadab")
    }
    catch(e){
        console.log(e)
        res.status(500).json({"msg":"something went wrong"})

    }


}


const getFromCart=async (req,res)=>{

    // const {email,password,username,phone,service,title,ratings,price,image,description}=req.body


    try{


        const cart = await Cart.find({email:"hello@gmail.com"})

        res.send(cart)
        console.log(cart)
    }
    catch(e){
        console.log(e)
        res.status(500).json({"msg":"something went wrong"})

    }


}

module.exports={addToCart,getFromCart}