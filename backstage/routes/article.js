const Koa=require('koa');
const router=require('koa-router')();
const Article=require('../schema/article');

router.get('/article',async(ctx,next)=>{
    ctx.body='article'
})
module.exports=router;