const mongoose=require('mongoose');

let Tab=mongoose.Schema({
    tab:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        default:1
    }
})
module.exports=mongoose.model('Tab',Tab);