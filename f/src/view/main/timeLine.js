import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Timeline} from 'antd';
import api from '../../api/api';
import Aside from '../../components/main/sidebar/index';

class TimeLine extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        api.getArticle('all')
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    render(){
        const {data}=this.state;
        const item=data.map(item=>(
            <Timeline.Item key={item._id} label={`${item.create_time.split('T')[0]}`}><Link to={`/content/${item._id}`}>{item.title}</Link></Timeline.Item>
        ))
        return (
                <main className="clear">
                    <Aside/>
                    <div className="content">
                        <Timeline mode={'left'}>
                            {item}
                        </Timeline>
                    </div>
                </main>
        )
    }
}
export default connect(state=>state.article)(TimeLine);