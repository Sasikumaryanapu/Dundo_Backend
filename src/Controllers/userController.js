const userModel=require("../Models/users")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SECRET=process.env.SECRET_KEY


const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ "msg": "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        console.log("Before userModel.create");
        const result = await userModel.create({
            email: email,
            password: hashPassword
        });
        console.log("After userModel.create");

        const token = jwt.sign({ email: email, id: result._id }, "makingitpossible");
        console.log(result)
        res.status(201).json({ user: result, token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "msg": "An error occurred" });
    }
};


const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email });

        if (!existingUser) {
            return res.status(404).json({ "msg": "User does not exist" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (matchPassword) {
            return res.status(200).json({ "msg": "Success" });
        } else {
            return res.status(401).json({ "msg": "Incorrect password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "msg": "An error occurred" });
    }
};


module.exports={signup,signin}