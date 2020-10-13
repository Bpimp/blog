import axios from 'axios';

/*axios基础配置 */
const instance=axios.create({
    baseURL:'http://localhost:8080/',
    timeout:2000,
    //withCredentials:true,
    responseType:'json',
    header:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})
/* instance.interceptors.response.use(function(res){
    if(res.data){
        setResponse(res.data)
    }else if(res.data.status){
        setResponse(res.data.status)
    }
    return res;
}) */
export const postAxios=(url,params)=>{
    return new Promise((resolve,reject)=>{
        instance.post(url,params)
        .then((res)=>{
                resolve(res.data)
            },(err)=>{
                reject(err)
            }
        )
        .catch((error)=>{
            reject(error)
        })
    })
}
export const getAxios=(url,params)=>{
    return new Promise((resolve,reject)=>{
        instance(url,params)
        .then(res=>{
                resolve(res.data)
            },err=>{
                reject(err)
            }
        )
        .catch(error=>{
            reject(error)
        })
    })
}
export const delAxios=(url,params)=>{
    return new Promise((resolve,reject)=>{
        instance.delete(url,{data:{params}})
        .then(res=>{
            resolve(res)
        },err=>{
            reject(err)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export default{
    //公共接口
    //获取文章分类
    getCategory(){
        return getAxios('/getCategory')
    },
    //获取文章内容
    getDetails(params){
        return getAxios(`/content?id=${params}`)
    },
    //前端页面接口
    //注册 
    register(params){
        return postAxios('/user/register',params)
    },
    //验证用户名
    checkName(params){
        return postAxios('/user/checkName',params)
    },
    //登录 
    login(params){
        return postAxios('/user/login',params)
    },
    //获取文章列表
    getArticle(params){
        return getAxios(`/article?tab=${params}`)
    },
    //点赞功能
    addpraise(params){
        return postAxios('/praise',params)
    },
    //提交一级评论
    addComment(params){
        return postAxios('/addcomment',params)
    },
    //提交二级评论
    addseccomment(params){
        return postAxios('/addseccomment',params)
    },
    //获取评论
    getComment(params){
        return getAxios(`/getcomment?article_id=${params}`)
    },
    delComment(params){
        return delAxios('/delComment/',params)
    },
    /*
    后台管理界面接口
    获取用户或文章列表
    */
    getDataList(params){
        if(params==='user'){
            return getAxios('/admin/user')
        }
        return getAxios('/all')
    },
    //检测文章标题
    checkArticleName(params){
        return postAxios('/admin/article/checkname',params)
    },
    //添加文章
    addArticle(params){
        return postAxios('/admin/article/add',params)
    },
    //修改文章信息
    edit(params){
        return postAxios('/edit',params)
    },
    //删除用户
    delete(params){
        return delAxios(`/delete/${params.id}`,{_id:params._id})
    }
}