import React from 'react';
import api from '../../../api/api';
import Tag from './tag';
import Record from './record';
class Aside extends React.Component{
    constructor(){
        super()
        this.state={
            categories:[]
        }
    }
    componentDidMount(){
        api.getCategory()
        .then(res=>{
            this.setState({
                categories:res.data
            })
        })
    }
    render(){
        const {categories}=this.state;
        return (
            <aside>
                <div id="intro" className="piece">
                    <h2 className="title">介绍</h2>
                    <ul>
                        <li>职业：小小技术员</li>
                        <li>Email：635733853@qq.com</li>
                        <li className="ellipsis">空余时间写的一个小博客</li>
                    </ul>
                </div>
                <Tag categories={categories}/>
                <Record/>
            </aside>
        )
    }
}
export default Aside;