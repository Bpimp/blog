const mongoose=require('mongoose');

let defaultTime=function(){
    let newTime=new Date();
    newTime.setTime(newTime.getTime()+1000*60*60*8);
    return newTime;
}
let CommentSchema=mongoose.Schema({
    article_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    create_time:{
        type:Date,
        default:defaultTime
    },
    likes:{
        type:Number,
        default:0
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    sec_reply:[{
        user_id:{type:mongoose.Schema.Types.ObjectId},
        username:{
            type:String
        },
        content:{type:String},
        likes:{
            type:Number,
            default:0
        },
        reply_to:{
            user_id:{type:mongoose.Schema.Types.ObjectId},
            name:{type:String}
        },
        create_time:{
            type:Date,
            default:defaultTime
        }
    }]
})
module.exports=mongoose.model('Comment',CommentSchema)