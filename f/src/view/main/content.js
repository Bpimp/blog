import React from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Aside from '../../components/main/sidebar/index';
import CodeBlock from '../../components/CodeBlock';
import Reply from '../../components/main/comment/index';
import api from '../../api/api';
import {Spin,Tag} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon=<LoadingOutlined style={{ fontSize: 24 }} spin />;
class Content extends React.Component{
    getContent=(id,isvisit)=>{
            this.props.dispatch(dispatch=>{
                dispatch({type:'CONTENT_UPDATE'})
            })
            this.props.dispatch(dispatch=>{
                api.getDetails(id,isvisit)
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
    componentDidMount(){
        const {id}=this.props.match.params;
        const visit=sessionStorage.getItem('visit');
        const isvisit=id===visit;
        this.getContent(id,isvisit);
        sessionStorage.setItem('visit',id)
    }
    render(){
        const {data,loading}=this.props;
        const {id}=this.props.match.params;
        return (
                <main className="clear">
                    <Aside/>
                    <div className='content'>
                       {loading&&<Spin className="loading" indicator={antIcon}/>}
                        <div className="article_title">
                            <h1>{data.title}</h1>
                            <ul className="article_msg clear">
                                <li>{data.create_time.split('T')[0]}</li>
                                <li>阅读数:{data.visits}</li>
                                <li><Tag>{data.tab}</Tag></li>
                            </ul>
                        </div>
                        <ReactMarkdown 
                            className="detail"
                            source={data.content}
                            renderers={{
                                code:CodeBlock
                            }}
                        />
                        <hr/>
                        <Reply article_id={id}/>
                    </div>
                </main>
        )
    }
}
export default connect(state=>state.content)(Content);