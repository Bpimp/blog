import React from 'react';
import ComEditor from './comEditor';
import Comitem from './comItem';
import api from '../../../api/api';
import {message,List} from 'antd';

class Reply extends React.Component{
    constructor(){
        super();
        this.state={
            comments:[],
            value:''
        }
    }
    handleSubmit=()=>{
        const {comments}=this.state;
        const username=sessionStorage.getItem('author');
        const user_id=sessionStorage.getItem('userId');
        if(!username){
            message.warning('请先登录')
            return ;
        }
        if(!this.state.value){
            return ;
        }
        const {article_id}=this.props;
        const {value}=this.state;
        api.addComment({article_id,username,value,user_id})
        .then(res=>{
            this.setState({
                value:'',
                comments:[
                    res.data,
                    ...comments
            ]
            })
        })
    }
    handleChange=e=>{
        this.setState({
            value:e.target.value
        })
    }
    componentDidMount(){
        const {article_id}=this.props;
        api.getComment(article_id)
        .then(res=>{
            if(res.code===2){
                this.setState({
                    comments:res.data
                })
            }
        })
    }
    delcomment=(_id)=>{
        api.delComment(_id)
        .then(res=>{
            let {comments}=this.state;
            comments=comments.filter(item=>item._id!==_id);
            this.setState({
                comments
            },()=>{
                message.success('删除成功')
            })
        })
    }
    render(){
        const {comments,value}=this.state;
        const ComList=({comments})=>(
            <List
                dataSource={comments}
                itemLayout='horizontal'
                renderItem={props=><Comitem delcomment={this.delcomment} {...props}/>}
            />
        )
        return (
            <div className="comments clear">
                <ComEditor
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={value}
                />
                <div className='comitem'>
                    {comments.length>0&&<ComList comments={comments}/>}
                </div>
            </div>
        )
    }
}
export default Reply;