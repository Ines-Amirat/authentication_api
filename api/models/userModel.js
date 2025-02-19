const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type : String,
            require : true
        },
        email : {
            type : String,
            require : true,
            unique : true
        },
        password : {
            type : String,
            require : true,
            minlength: [6,'Too short password']
        },
        phoneNumber :{
            type : String,
            require : true
        },
        role:{
            type : String,
            enum : ['user' , 'admin'],
            default: 'user'
        },
        profileImg: String
        
});

const user = mongoose.model('user', userSchema);
module.export = user; 

