const express = require('express');
//charger les var d'environnement
const connexionDB = require('./config/db')
const app = express();
const router = require('./api/routes/root');
const authRouter = require('./api/routes/authRoutes');
const user = require('./api/models/userModel');




connexionDB();

app.use(express.json());


app.use('/', router);
app.use('/auth', authRouter);

app.use('*',(req,res) =>{
    //const error = new Error();
    res.status(404).json({message :'404  Not Found '})
    
});



module.exports  = app ;


