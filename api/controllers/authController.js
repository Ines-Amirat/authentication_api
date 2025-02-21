
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path : '../config/.env'});
const PORT = process.env.PORT || 8000;
const TOKEN_KEY_SECRET = process.env.TOKEN_KEY_SECRET;




const register = async (req, res) => {
    let = body = req.body;
    if (!body.name || !body.email || !body.password || !body.phoneNumber) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const foundUser = await User.find({ email: body.email }).exec();
    if (foundUser.length > 1) {
         return res.status(401).json({ message: "User Exists!" });
        
    }

    try {
        // stock a hash password in the  database
        const hashedPassword = await bcrypt.hash(body.password, 10);

        //user.create({})  applied on a model 
            user = new User({
            name: body.name,
            email: body.email,
            password: hashedPassword,
            phoneNumber: body.phoneNumber

        })
        await user.save();
        return res.status(201).json({ message: "User created successfully!" });

    }
    catch (error) {
         console.log("Error Creating user",error);
         return  res.status(500).json({ message: "Internal sever error" });
         

    }
}

const login = async (req, res) => {
    let = body = req.body;
    if (!body.email || !body.password ) {
        return res.status(400).json({ message: "All fields are required" });
    }
    let user = await User.findOne({email: body.email });
    if(!user){
        return res.status(401).json({ message: "User not Found !" });
    }
    let passwordLogin = body.password.trim();
    let compare = await bcrypt.compare(passwordLogin ,user.password);
    if (!compare){
        return res.status(401).json({ message: "Password not correct !" });
    }
    const token = jwt.sign({
        // Payload
        userId : user._id
    },TOKEN_KEY_SECRET,{
        expiresIn : 10
    });
  
   
}



module.exports = {
        register,
        login
}; 




