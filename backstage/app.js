const Koa=require('koa')
const router=require('koa-router')()
const bodyParser=require('koa-bodyparser')
const mongoose=require('mongoose')

let app=new Koa();
let url="mongodb://localhost:27018/blog"
app.use(bodyParser())

const main = function(ctx) {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
  }
  
  app.use(main);
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