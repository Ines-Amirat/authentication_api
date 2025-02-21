const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
            minlength: [6,'Too short password']
        },
        phoneNumber :{
            type : String,
            required : true
        },
        role:{
            type : String,
            enum : ['user' , 'admin'],
            default: 'user'
        },
        profileImg:{
             type : String
        }
        
},{timestamps : true});

const user =  mongoose.model('user', userSchema);
module.exports = user; 

