const mongoose=require('mongoose');

let articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    introduction:{
        type:String
    },
    create_time:{
        type:Date,
        default:Date.now
    },

})