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
        .catch(function(error){
            reject(error)
        })
    })
}
export const getAxios=(url,params)=>{
    return new Promise((resolve,reject)=>{
        instance(url,params)
        .then(
            function(res){
                resolve(res.data)
            },
            function(err){
                reject(err)
            }
        )
        .catch(function(error){
            reject(error)
        })
    })
}

export default{
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
    /*
    后台管理界面接口
    获取用户列表
    */
    getUserList(){
        return getAxios('/admin/userlist')
    },
    //检测文章标题
    checkArticleName(params){
        return postAxios('/admin/article/checkname',params)
    },
    //添加文章
    addArticle(params){
        return postAxios('/admin/article/add',params)
    }
}