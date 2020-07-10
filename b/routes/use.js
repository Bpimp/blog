const router=require('koa-router')();
const {sign}=require('jsonwebtoken');
const jwt=require('koa-jwt');
const User=require('../schemas/users');
const {Encryption}=require('../md5/index');
let responseData;

router.use(async (ctx,next)=>{
    responseData={
        code:0,
        msg:'',
        data:{
            isAdmin:false
        }
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
        responseData.code=2;
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
            const token=sign({username,},'testkey');
            responseData.data.token=token;
            ctx.body=responseData;
        })
    })
    router.post('/user/login',async(ctx,next)=>{
        let {username,password}=ctx.request.body;
        password=Encryption(password,username);
        await User.findOne({username,password},(err,doc)=>{
            if(err){
                responseData.code=1;
                responseData.msg="服务器异常";
                ctx.body=responseData;
                return;
            }
            if(!doc){
                responseData.code=1;
                responseData.msg="用户名或密码错误";
                ctx.body=responseData;
                return;
            } 
            const token=sign({username},'testkey');
            responseData.code=2;
            responseData.msg="登录成功";
            responseData.data.isAdmin=doc.isAdmin
            responseData.data.token=token;
            ctx.body=responseData
        })
    })
module.exports=router;