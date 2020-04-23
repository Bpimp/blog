const mongoose=require('mongoose');
let UserSchema=require('./user');
let ArticleSchema=require('./article');

const User=mongoose.model('User',UserSchema);
const Article=mongoose.model('Article',ArticleSchema);

module.exports={
    User,
    Article
}