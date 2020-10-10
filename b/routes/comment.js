const Koa=require('koa');
const router=require('koa-router')();
const Comment=require('../schemas/comment');
const Article=require('../schemas/articles');

router.use(async (ctx,next)=>{
    responseData={
        code:0,
        msg:''
    }
    await next()
})
router.post('/addcomment',async(ctx,next)=>{
    const {article_id,value,username,user_id}=ctx.request.body;
    const addNum=()=>new Promise((resolve,reject)=>{
        const options= {upsert:true,new:true,setDefaultsOnInsert:true,useFindAndModify:false}
        Article.findOneAndUpdate({_id:article_id},{$inc:{comments:1}},options,function(err,res){
            if(err){
                reject(err)
                return ;
            }
            resolve()
        })
    })
    const addComment=()=>new Promise((resolve,reject)=>{
        let comment=new Comment({
            article_id,
            content:value,
            username,
            user_id
        })
        comment.save()
        .then(res=>{
            resolve(res);
            return ;
        })
        .catch(err=>{
            reject(err)
        })
    })
    await Promise.all([addNum(),addComment()])
    .then(res=>{
        responseData.code=2;
        responseData.msg='success';
        responseData.data=res[1];
        ctx.body=responseData
    })
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