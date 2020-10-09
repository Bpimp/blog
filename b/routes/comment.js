const Koa=require('koa');
const router=require('koa-router')();
const Comment=require('../schemas/comment');

router.use(async (ctx,next)=>{
    responseData={
        code:0,
        msg:''
    }
    await next()
})
router.post('/addcomment',async(ctx,next)=>{
    const {article_id,value,username,user_id}=ctx.request.body;
    let comment=new Comment({
        article_id,
        content:value,
        username,
        user_id
    })
    await comment.save()
    .then(res=>{
        responseData.code=2;
        responseData.msg='success';
        ctx.body=responseData
    })
})
router.post('/addseccomment',async(ctx,next)=>{
    console.log(ctx.request.body)
    ctx.body=1
})
router.get('/getcomment',async(ctx,next)=>{
    const {article_id}=ctx.request.query;
    await Comment.find({article_id}).sort({'create_time':'-1'})
    .then(res=>{
        responseData.code=2;
        responseData.msg='success';
        responseData.data=res;
        ctx.body=responseData;
    })
})
router.delete('/delComment',async(ctx,next)=>{
    const {_id}=ctx.request.body.params;
    await Comment.deleteOne({_id})
    .then(res=>{
        responseData.code=3;
        responseData.msg="success";
        ctx.body=responseData;
    })
})
module.exports=router;