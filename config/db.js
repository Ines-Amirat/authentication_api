const  mongoose  = require('mongoose');
require('dotenv').config({path: './config/.env'});


dbPassword =  process.env.dbPassword;
db_User =  process.env.db_User;

const connectionDB =  () => {
     mongoose.connect(`mongodb+srv://ines:${dbPassword}@cluster1.lnkpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`)
     .then((conn) =>{
          console.log(`Database Connected : ${conn.connection.host} `);
     }).catch((error) =>{
          console.log(` Database connexion error ${error}`);
     })
}

module.exports = connectionDB;
