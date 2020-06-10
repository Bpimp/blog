const router=require('koa-router')();
const User=require('../schemas/users');
const {Encryption}=require('../md5/index');
let responseData;

router.use(async (ctx,next)=>{
    responseData={
        code:0,
        msg:''
    }
    await next();
})
router.post('/user/checkName',async (ctx,next)=>{
    let username=ctx.request.body.value;
    await User.findOne({username})
    .then(userInfo=>{
        if(userInfo){
            responseData.code=1;
            responseData.msg="用户已存在"
            ctx.body=responseData;
            return;
        }
        responseData.msg="用户名可用";
        ctx.body=responseData;
    })
})
router.post('/user/register',async (ctx,next)=>{
    let {username,password,email}=ctx.request.body.values;
        password=Encryption(password,username)
        let user=new User({
            username,
            password,
            email
        })
        await user.save()
        .then(user=>{
            responseData.code=2;
            responseData.msg="注册成功";
            ctx.body=responseData;
        })
    })
    router.post('/user/login',async(ctx,next)=>{
        
    })
module.exports=router;