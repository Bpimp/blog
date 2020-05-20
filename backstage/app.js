const Koa=require('koa')
const router=require('koa-router')()
const bodyParser=require('koa-bodyparser')
const mongoose=require('mongoose')
const combineRouter=require('./routes/index')

let app=new Koa();
let url="mongodb://localhost:27018/blog"
app.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  await next()
})
app.use(bodyParser())
app.use(combineRouter())
mongoose.connect(url,{useNewUrlParser:true ,useUnifiedTopology: true},function(err,db){
    if(err){
        console.log(err)
    }else{
        console.log('success'); 
        app.listen(8080)
    }
})