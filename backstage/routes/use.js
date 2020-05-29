const router=require('koa-router')();
const User=require('../schemas/users');
let responseData;

router.use((ctx,next)=>{
    responseData={
        status:0,
        msg:''
    }
    next();
})
router.post('/user/checkName',(ctx,next)=>{
    let {username}=ctx.request.body;
    let user=User.findOne({
        username:username
    })
    if(user){
        responseData.status=1;
        responseData.msg="用户已存在"
        ctx.body=responseData;
        return;
    }
    responseData.status=200;
    responseData.msg="用户名可用";
    ctx.body=responseData;
})
router.post('/user/register',async (ctx,next)=>{
    let {username,password,email}=ctx.request.body.values;
    User.findOne({
        username
    }).then(function(userInfo){
        if(userInfo){
            responseData.status=1;
            responseData.msg="用户名已存在";
            ctx.body=responseData;
            return;
        }
        let user=new User({
            username,
            password,
            email
        })
        return user.save()
    }).then(function(){
        responseData.status=200;
        responseData.msg="注册成功";
        ctx.body=responseData;
    })
    await next()
})
module.exports=router;