const Koa=require('koa');
const router=require('koa-router')();
const Article=require('../schemas/articles');

router.use(async (ctx,next)=>{
    responseData={
        code:0,
        msg:''
    }
    await next()
})

router.post('/admin/article/checkname',async (ctx,next)=>{
    const title=ctx.request.body.title;
    await Article.findOne({title})
    .then(article=>{
        if(article){
            responseData.code=1;
            responseData.msg='标题重复';
            ctx.body=responseData;
            return ;
        }
        responseData.code=2;
        responseData.msg='pass'
        ctx.body=responseData
    })
})
router.post('/admin/article/add',async (ctx,next)=>{
    console.log(ctx.request.body)
})
module.exports=router;