import React from 'react';
import {List,message} from 'antd';
import Comitem from './comItem';
import moment from 'moment';

class SecList extends React.Component{
    constructor(){
        super();
        this.state={
            sec_reply:[],
            value:''
        }
    }
    handleChanege=e=>{
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit=()=>{
        console.log(1)
        const {sec_reply,value}=this.state;
        const username=sessionStorage.getItem('author');
        const userId=sessionStorage.getItem('userId');
        const create_time=moment().format();
        if(!username){
            message.warning('请先登录')
            return;
        }
        this.setState({
            iseditor:false,
            value:'',
            sec_reply:[
                {
                create_time,
                username,
                content:value,
            },
            ...sec_reply
            ]
        })
    }
    render(){
        const {sec_reply,value}=this.state;
        return (
            <List
            dataSource={sec_reply}
            itemLayout='horizontal'
            renderItem={props=><Comitem 
                {...props}
                handleChanege={this.handleChanege}   
                handleSubmit={this.handleSubmit}
                value={value} 
            />}
        />
        )
    }
}
export default SecList;