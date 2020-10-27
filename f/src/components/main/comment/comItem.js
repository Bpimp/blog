import React,{createElement} from 'react';
import {Comment,Tooltip} from 'antd';
import {LikeOutlined,LikeFilled} from '@ant-design/icons';

class Comitem extends React.Component{
    constructor(){
        super();
        this.state={
            value:'',
            iseditor:false,
            action:null,
            likes:0
        }
    }
    like=()=>{
        const {action}=this.state;
        action?this.setState({action:null,likes:this.state.likes-1}):this.setState({action:'like',likes:this.state.likes+1})
    }
    showeditor=()=>{
        this.setState({
            iseditor:!this.state.iseditor
        })
    }
    handleChange=e=>{
        this.setState({
            value:e.target.value
        })
    }
    /* handleSubmit=()=>{
        const {_id}=this.props;
        const {value}=this.state;
        const username=sessionStorage.getItem('author');
        const userId=sessionStorage.getItem('userId');
        const create_time=moment().format();
        if(!username){
            message.warning('请先登录')
            return;
        }
        api.addseccomment({
            username,userId,create_time,reply_to:_id,value
        })
        .then(res=>{
            this.setState({
                value:'',
                iseditor:false
            })
        })    
    } */
    render(){
        const {action,likes}=this.state;
        const {content,username,create_time,delcomment,_id}=this.props;
        const actions=[
            <span>{`${create_time.split('T')[0]} ${create_time.split('T')[1].slice(0,8)}`}</span>,
            <span onClick={()=>delcomment(_id)} className='deletecom'>删除</span>,
            <Tooltip title='like'>
                <span onClick={this.like}>
                    {createElement(action==='like'?LikeFilled:LikeOutlined)}
                    <span>{likes}</span>
                </span>                
            </Tooltip>,
            <span onClick={this.showeditor}>回复</span>
        ]   
        return (
            <>
                <Comment 
                    author={username}
                    actions={actions}
                    content={<p>{content}</p>}
                />
                <hr/>
            </>
        )
    }
}
export default Comitem;