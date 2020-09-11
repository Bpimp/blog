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

router.get('/article',async (ctx,next)=>{
    const tab=ctx.request.query.tab;
    const conditions=tab==='all'?{}:{tab};
    await Article.find(conditions,{'_id':1,'tab':1,'title':1,'create_time':1,'author':1},{sort:{create_time:-1}})
    .then(article=>{
        responseData.code=2;
        responseData.msg='success';
        responseData.data=article;
        ctx.body=responseData;
    })
})
router.get('/content',async(ctx,next)=>{
    const id=ctx.request.query.id;
    await Article.findById(id)
    .then(res=>{
        responseData.code=2;
        responseData.msg='success';
        responseData.data=res;
        ctx.body=responseData;
    })
    .catch(err=>{
        ctx.body=err
    })
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
    let {tab,title,content,author}=ctx.request.body.values;
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
            tab,title,content,author
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
router.post('/edit',async(ctx,next)=>{
    const {tab,title,content,_id}=ctx.request.body.values;
    await(Article.findOneAndUpdate({_id},{tab,title,content},{useFindAndModify:false},function(){
        responseData.code=2;
        responseData.msg='success';
        ctx.body=responseData
    }))
})
router.delete('/delete/article',async(ctx,next)=>{
    const {_id}=ctx.request.body.params;
    await Article.deleteOne({_id})
    .then(res=>{
        responseData.code=3;
        responseData.msg="success";
        ctx.body=responseData;
    })
})
router.get('/all',async(ctx,next)=>{
    await Article.find().sort({'create_time':'-1'})
    .then(res=>{
        responseData.code=2;
        responseData.msg='success';
        responseData.data=res;
        ctx.body=responseData;
    })
})
module.exports=router;
