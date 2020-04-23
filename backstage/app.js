const Koa=require('koa')
const bodyParser=require('koa-bodyparser');
const mongoose=require('mongoose')

let app=new Koa();
let url="mongodb://localhost:27017/blog"
app.use(bodyParser())
app.use(async ctx=>{
    ctx.body="Hello World"
})
mongoose.connect(url,{useNewUrlParser:true ,useUnifiedTopology: true},function(err,db){
    if(err){
        console.log(err)
    }else{
        console.log('success'); 
        app.listen(8080)
    }
})