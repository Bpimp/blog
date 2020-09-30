import React from 'react';
import ComEditor from './comEditor';
import ComList from './comlist';
import api from '../../../api/api';
import {message} from 'antd';
import moment from 'moment';

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
        const create_time=moment().format();
        api.addComment({article_id,username,value,user_id})
        .then(res=>{
            this.setState({
                value:'',
                comments:[
                    {
                        create_time,
                        username,
                        content:value,
                        sec_reply:[]
                },
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
    render(){
        const {comments,value}=this.state;
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