import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {List,Space} from 'antd';
import {MessageOutlined} from '@ant-design/icons';
import api from '../../api/api';


const IconText=({icon,text})=>(
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)
class ArtList extends React.Component{
    constructor(props){
        super(props)
        this.getList(this.props.tab)
    }
    getList(tab){
        this.props.dispatch(dispatch=>{
            dispatch({
                type:'ARTICLE_UPDATE'
            })
        })
        this.props.dispatch(dispatch=>{
            api.getArticle(tab)
            .then(res=>{
                dispatch({
                    type:'ARTICLE_UPDATE_SUCC',
                    data:res.data
                })
            })
            .catch(err=>{
                dispatch({
                    type:'ARTICLE_UPDATE_ERR',
                    data:err
                })
            })
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.tab!==nextProps.tab){
            this.getList(nextProps.tab)
            return false
        }
        return true
    }
    render(){
        const {data,loading}=this.props;
        return (
            <List
                loading={loading}
                itemLayout='vertical'
                dataSource={data}
                renderItem={item=>(
                    <List.Item 
                        className="article-list"
                        key={item._id}
                        actions={[
                            <Link to={`/content/${item._id}`}><IconText icon={MessageOutlined} text='20' key='list-vertical-message'/></Link>
                        ]}
                    >
                        <List.Item.Meta
                            title={<Link to={`/content/${item._id}`}>{item.title}</Link>}
                            description={
                                <ul>
                                    <li>{item.author}</li>
                                    <li>{`${item.create_time.split('T')[0]} ${item.create_time.split('T')[1].slice(0,8)}`}</li>
                                    <li>{item.tab}</li>
                                </ul>
                            }
                        >{item.content}</List.Item.Meta>
                    </List.Item>
                )}
            >
            </List>
        )
    }
}
export default connect(state=>state.article)(ArtList);