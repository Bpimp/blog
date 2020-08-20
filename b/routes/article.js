const Koa=require('koa');
const router=require('koa-router')();
const Article=require('../schemas/articles');
const Tab=require('../schemas/tab');

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
    let {tab,title,content}=ctx.request.body.values;
    const addTab=()=>new Promise((resolve,reject)=>{
        const options= {upsert:true,new:true,setDefaultsOnInsert:true,useFindAndModify:false}
        Tab.findOneAndUpdate({tab},{$inc:{amount:1}},options,function(err,res){
            if(err){
                reject(err)
                return ;
            }
            resolve()
        })
    })
    const addArticle=()=>new Promise((resolve,reject)=>{
        let article=new Article({
            tab,title,content
        });
        article.save()
        .then(res=>{
            resolve();
            return ;
        })
        .catch(err=>{
            reject(err)
        })
    })
    await Promise.all([addTab(),addArticle()])
    .then(article=>{
        responseData.code=2;
        responseData.msg="添加成功";
        ctx.body=responseData;
    })

})
module.exports=router;
