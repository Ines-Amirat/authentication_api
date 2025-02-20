
const register = (req, res) =>{
      body = req.body;
      if(!body.name || !body.email || !body.password || !body.phoneNumber ){
            return res.status(400).json({message : "All fields are required"});
      }
      


}
