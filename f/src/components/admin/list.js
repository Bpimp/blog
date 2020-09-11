import React from 'react';
import {Link} from 'react-router-dom';
import api from '../../api/api';
import {Table,Space,message} from 'antd';


class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            data:[]
        }
        this.getList()
        this.userColumns=[
            {
                title:'userName',
                dataIndex:'username',
                key:'username',
            },{
                title:'Email',
                dataIndex:'email'
            },{
                title:'isAdmin',
                dataIndex:"isAdmin",
                render:(text,record)=>(
                    <Space>
                        {record.isAdmin==="1"?"true":"false"}
                    </Space>
                )
            },{
                title:'Action',
                key:'action',
                render:(text,record)=>(
                    <Space size='middle'>
                        <button onClick={()=>this.delete(record._id)} className="delete">Delete</button>
                    </Space>
                )
            }
        ]
        this.articleColumns=[
            {
                title:'author',
                dataIndex:'author',
                key:'author',
            },{
                title:'tab',
                dataIndex:'tab'
            },{
                title:'title',
                dataIndex:'title'
            },{
                title:'Action',
                key:'action',
                render:(text,record)=>(
                    <Space size='middle'>
                        <Link to={{pathname:'/admin/editor',state:record}}>修改</Link>
                        <button onClick={()=>this.delete(record._id)} className="delete">删除</button>
                    </Space>
                )
            }
        ]
    }  
    getList=()=>{
        const {id}=this.props;
        api.getDataList(id)
        .then(res=>{
            res.data.map(item=>{
                item.key=item._id
                return item
            })
            this.setState({
                data:res.data,
                loading:false
            })
        })
    }
    delete=(_id)=>{
        const {id}=this.props;
        api.delete({id,_id})
        .then(res=>{
            if(res.data.code===3&&res.status===200){
                message.success('删除成功',2).then(()=>{
                    this.getList()
                })
            }
        })
    }
    render(){
        const {data,loading}=this.state;
        const {id}=this.props;
        return (
            <Table 
                bordered={true}
                loading={loading}
                className="admin-content" 
                columns={id==="user"?this.userColumns:this.articleColumns} 
                dataSource={data}
            />
        )
    }
}
export default List;