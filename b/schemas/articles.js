const mongoose=require('mongoose');

let defaultTime=function(){
    let newTime=new Date();
    newTime.setTime(newTime.getTime()+1000*60*60*8);
    return newTime;
}
let ArticleSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    create_time:{
        type:Date,
        default:defaultTime
    },
    content:{
        type:String,
        required:true
    },
    tab:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
    comments:{
        type:Number,
        default:0
    },
    visits:{
        type:Number,
        default:0
    }
})
module.exports=mongoose.model('Article',ArticleSchema);