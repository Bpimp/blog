import React from 'react';
import ComEditor from './comEditor';
import ComItem from './comItem';
import {List,message} from 'antd';
import moment from 'moment';

class Reply extends React.Component{
    constructor(){
        super();
        this.state={
            comments:[],
            value:'',
            likes:0,
            action:null
        }
    }
    handleSubmit=()=>{
        const author=sessionStorage.getItem('author');
        if(!author){
            message.warning('请先登录')
            return ;
        }
        if(!this.state.value){
            return ;
        }
        this.setState({
            value:'',
            likes:0,
            action:null,
            comments:[
                {
                    author,
                    content:<p>{this.state.value}</p>,
                    datetime:moment().fromNow(),
                },
                ...this.state.comments
            ]
        })
    }
    handleChange=e=>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
        const {comments,value}=this.state;
        const ComList=({comments})=>(
            <List
                dataSource={comments}
                itemLayout="horizontal"
                renderItem={props=>(<ComItem comment={props}/>)}
            />
        )
        return (
            <div className="comments">
                <ComEditor
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={value}
                />
                {comments.length>0&&<ComList comments={comments}/>}
            </div>
        )
    }
}
export default Reply;