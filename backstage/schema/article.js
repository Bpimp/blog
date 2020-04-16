const mongoose=require('mongoose');

let ArticleSchema=new mongoose.Schema({
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
    content:{
        type:String,
        require:true
    },
    tab:{
        type:String
    }
})
export default ArticleSchema;