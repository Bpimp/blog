const mongoose=require('mongoose');

let UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    create_time:{
        type:Date,
        default:Date.now
    },
    email:{
        type:String,
        required:true
    },
    isAdmin:{
        type:String,
        default:''
    }
})
module.exports=mongoose.model('User',UserSchema);