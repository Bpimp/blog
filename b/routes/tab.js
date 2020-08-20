const Koa=require('koa');
const router=require('koa-router')();
const Tab=require('../schemas/tab');

router.use(async (ctx,next)=>{
    responseData={
        code:0,
        data:[]
    }
    await next();
})
router.get('/admin/getTab',async (ctx,next)=>{
    await Tab.find({},{tab:true})
    .then(res=>{
        responseData.code=2;
        responseData.data=res;
        ctx.body=responseData;
    })
})
module.exports=router;