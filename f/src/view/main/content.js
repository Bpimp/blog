import React from 'react';
import ReactMarkdown from 'react-markdown';
import Aside from '../../components/main/sidebar/index';
import CodeBlock from '../../components/CodeBlock';
import Reply from '../../components/main/comment/index';
import api from '../../api/api';
import {Spin,Tag} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon=<LoadingOutlined style={{ fontSize: 24 }} spin />;
class Content extends React.Component{
    constructor(){
        super();
        this.state={
            data:{
                title:'',
                create_time:'',
                content:'',
                tab:'',
                comments:0,
                visits:0
            },
            loading:true
        }
    }
    getContent=(id,isvisit)=>{
        api.getDetails({id,isvisit})
        .then(res=>{
            this.setState({
                data:res.data,
                loading:false
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
     addId=(id)=>{
        const articles=sessionStorage.getItem('articles');
        if(!articles){
            sessionStorage.setItem('articles',id);
            this.getContent(id,true)
            return;
        }
        const artarr=articles.split(',');
        if(artarr.indexOf(id)===-1){
            artarr.push(id)
            sessionStorage.setItem('articles',artarr);
            this.getContent(id,true);
            return ;
        }
        this.getContent(id,false)
    }
    componentDidMount(){
        const {id}=this.props.match.params;
        const userId=sessionStorage.getItem('userId');
        if(userId){
            this.addId(id);
        }else{
            this.getContent(id,false)
        }
        
    }
    render(){
        const {data,loading}=this.state;
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
export default Content;