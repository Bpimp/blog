import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return (
            <header>
            <div id="navbox">
                <Link className="logo" to="/">{/* <img src="./image/logo.png" alt="weng"/> */}</Link>
                <ul id='nav'>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/time">时间轴</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
                <div className="">
                    <span>登录</span>
                    ·
                    <span>注册</span>    
                </div>>
            </div>
        </header>
        )
    }
}
export default Nav;