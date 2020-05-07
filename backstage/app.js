const Koa=require('koa')
const router=require('koa-router')()
const bodyParser=require('koa-bodyparser')
const mongoose=require('mongoose')

let app=new Koa();
let url="mongodb://localhost:27018/blog"
app.use(bodyParser())

router.get('/',async ctx=>{
    ctx.response.type="html";
    ctx.response.body='<a href="/">Index Page</a>';
})
router.get('/about', async ctx=>{
    ctx.response.body="Hello World";
})
app.use(async (ctx,next)=>{
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    await next();
})
app.use(router.routes());
app.use(router.allowedMethods());
mongoose.connect(url,{useNewUrlParser:true ,useUnifiedTopology: true},function(err,db){
    if(err){
        console.log(err)
    }else{
        console.log('success'); 
        app.listen(8080)
    }
})