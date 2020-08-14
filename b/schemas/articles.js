const mongoose=require('mongoose');

let ArticleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    create_time:{
        type:Date,
        default:Date.now
    },
    content:{
        type:String,
        require:true
    },
    tab:{
        type:String
    }
})
module.exports=mongoose.model('Article',ArticleSchema);