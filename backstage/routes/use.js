const Koa=require('koa');
const router=require('koa-router')();
const User=require('../schema/user');

router.get('/user',async(ctx,next)=>{
    ctx.body="user"
    await next();
})
router.post('/user/register',async(ctx,next)=>{
    let user=ctx.request.body;
    console.log(user);
    ctx.status=200
})
module.exports=router;