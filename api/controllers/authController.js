
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


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






module.exports = {
        register,
      
}; 




