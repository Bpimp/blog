import React,{createElement} from 'react';
import {Comment,Tooltip} from 'antd';
import {LikeOutlined,LikeFilled} from '@ant-design/icons';

class ComItem extends React.Component{
    constructor(){
        super();
        this.state={
            action:null,
            iseditor:false
        }
    }
    like=()=>{

    }
    showeditor=()=>{
        this.setState({
            iseditor:!this.state.iseditor
        })
    }
    render(){
        const {likes,author,content,datetime}=this.props.comment;
        const {action,iseditor}=this.state;
        const actions=[
            <span className='deletecom'>删除</span>,
            <Tooltip title="like">
                <span onClick={this.like}>
                    {createElement(action==='like'?LikeFilled:LikeOutlined)}
                    <span>{likes}</span>
                </span>
            </Tooltip>,
            <span onClick={this.showeditor}>回复</span>
    ]
        return (
                <Comment 
                    actions={actions}
                    author={author}
                    content={content}
                    datetime={datetime}
                />
        )
    }
}
export default ComItem;