import React,{createElement} from 'react';
import {Comment,Tooltip,message} from 'antd';
import ComEditor from './comEditor';
import moment from 'moment';
import api from '../../../api/api';
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
    
    handleChange=e=>{
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit=(id)=>{
        const {sec_reply,value}=this.state;
        const username=sessionStorage.getItem('author');
        const userId=sessionStorage.getItem('userId');
        const create_time=moment().format();
        if(!username){
            message.warning('请先登录')
            return;
        }
        api.addseccomment({
            username,userId,value,id
        })
        .then(res=>{
            this.setState({
                value:'',
                sec_reply:[
                    {
                        create_time,
                        content:value,
                        username
                    },
                    ...sec_reply
                ]
            })
        })
    }
    render(){
        const {action,likes}=this.state;
        const {content,username,create_time,showeditor}=this.props;
        const actions=[
            <span>{`${create_time.split('T')[0]} ${create_time.split('T')[1].slice(0,8)}`}</span>,
            <span className='deletecom'>删除</span>,
            <Tooltip title='like'>
                <span onClick={this.like}>
                    {createElement(action==='like'?LikeFilled:LikeOutlined)}
                    <span>{likes}</span>
                </span>                
            </Tooltip>,
            <div className="reply" onClick={showeditor}>回复</div>
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