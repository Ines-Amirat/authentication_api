const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type : String,
            require : true
        },
        email : {
            type : String,
            require : true
        },
        password : {
            type : String,
            require : true
        },
        phoneNumber :{
            type : String,
            require : true
        },
        country: String,
});

const user = mongoose.model('user', userSchema);
module.export = user; 

