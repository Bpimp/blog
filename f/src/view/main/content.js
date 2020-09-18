import React from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Aside from '../../components/main/sidebar/index';
import CodeBlock from '../../components/CodeBlock';
import Reply from '../../components/main/comment/index';
import api from '../../api/api';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon=<LoadingOutlined style={{ fontSize: 24 }} spin />;
class Content extends React.Component{
    constructor(props){
        super(props);
        this.getContent(this.props.match.params.id)
    }
    getContent=(id)=>{
            this.props.dispatch(dispatch=>{
                dispatch({type:'CONTENT_UPDATE'})
            })
            this.props.dispatch(dispatch=>{
                api.getDetails(id)
                .then(res=>{
                    dispatch({
                        type:'CONTENT_UPDATE_SUCC',
                        data:res.data
                    })
                })
                .catch(err=>{
                    dispatch({
                        type:'CONTENT_UPDATE_ERR',
                        data:err
                    })
                })
            })
    }
    render(){
        const {data,loading}=this.props;
        const {id}=this.props.match.params;
        return (
                <main className="clear">
                    <Aside/>
                    <div className='content'>
                       {loading&&<Spin className="loading" indicator={antIcon}/>}
                        <h1>{data.title}</h1>
                        创建时间：<span>{data.create_time.split('T')[0]}</span>
                        <ReactMarkdown 
                            className="detail"
                            source={data.content}
                            renderers={{
                                code:CodeBlock
                            }}
                        />
                        <hr/>
                        <Reply id={id}/>
                    </div>
                </main>
        )
    }
}
export default connect(state=>state.content)(Content);