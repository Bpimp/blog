const Koa=require('koa');
const router=require('koa-router')();
const User=require('../schema/user');

router.use(function(ctx,next){
    responseData={
        status:0,
        msg:'',
        data:{}
    }
    next();
})
router.post('/user/checkName',async(ctx,next)=>{
    let userName=ctx.request.body;
    console.log(userName);
    responseData.status=200;
    responseData.msg="用户名可用"
    ctx.body=responseData;
    await next();
})
router.post('/user/register',async(ctx,next)=>{
    let user=ctx.request.body;
    console.log(user);
    ctx.status=200
})
module.exports=router;