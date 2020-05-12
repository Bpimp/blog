const Koa=require('koa');
const router=require('koa-router')();
const User=require('../schema/user');

router.get('/user',async(ctx,next)=>{
    ctx.body="user"
    await next();
})
module.exports=router;