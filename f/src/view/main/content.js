import React from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Aside from '../../components/main/sidebar/index';
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
        return (
            <>
                {loading&&<Spin indicator={antIcon}/>}
                    <main className="clear">
                        <Aside/>
                        <div className='content'>
                            <h1>{data.title}</h1>
                            创建时间：<span>{data.create_time.split('T')[0]}</span>
                            <ReactMarkdown 
                                className="detail"
                                source={data.content}
                            />
                        </div>
                    </main>
            </>
        )
    }
}
export default connect(state=>state.content)(Content);