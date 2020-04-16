const mongoose=require('mongoose');
let UserSchema=require('./user');
let ArticleSchema=require('./article');

exports.Article=mongoose.model('Article',ArticleSchema);
exports.User=mongoose.model('User',UserSchema);