const router=require('koa-router')();
const User=require('../schemas/users');
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
        responseData.code=200;
        responseData.msg="用户名可用";
        ctx.body=responseData;
    })
})
router.post('/user/register',async (ctx,next)=>{
    let {username,password,email}=ctx.request.body.values;
    console.log(username,password,email)
        let user=new User({
            username,
            password,
            email
        })
        //user.save()
    })
module.exports=router;