const express = require('express');
const  mongoose  = require('mongoose');
require('dotenv').config();

dbPassword =  process.env.dbPassword

const app = express();

mongoose.connect(`mongodb+srv://ines:${dbPassword}@cluster1.lnkpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"`)
     .then(() =>{
          console.log("connected successfully");
     }).catch((error) =>{
          console.log(error);
     })



module.exports  = app ;


