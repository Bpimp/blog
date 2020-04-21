import React from 'react';
import {Link} from 'react-router-dom';
import Login from './login';
import Reg from './reg';

class Aside extends React.Component{
    constructor(props){
        super();
        this.state={
            isLogin:true
        };
        this.changeStatus=this.changeStatus.bind(this)
    }
    changeStatus(){
        let {isLogin}=this.state;
        isLogin=!isLogin;
        this.setState({
            isLogin
        })
    }
    render(){
        return (
            <aside>
                {this.state.isLogin?<Login changeStatus={this.changeStatus}/>:<Reg changeStatus={this.changeStatus}/>}
                <div id="intro" className="piece">
                    <h2 className="title">介绍</h2>
                    <ul>
                        <li>职业：</li>
                        <li>Email：635733853@qq.com</li>
                        <li className="ellipsis">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</li>
                    </ul>
                </div>
                <div id="tag" className="piece">
                    <h3 className="title">标签</h3>
                    <ul className="tagList clear">
                        <li><Link to="/index/javaScript">javaScript</Link></li>
                        <li><Link to="/index/CSS">CSS</Link></li>
                        <li><Link to="/index/node">node</Link></li>
                        <li><Link to="/index/react">react</Link></li>
                        <li><Link to="/index/vue">vue</Link></li>
                    </ul>
                </div>
            </aside>
        )
    }
}
export default Aside;