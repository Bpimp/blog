import React from 'react';
import {Link} from 'react-router-dom';
import Mask from './mask';
import Login from './login';
import Reg from './reg';
import UserLogo from './userlogo';

class Nav extends React.Component{
    constructor(){
        super();
        this.state={
            showMask:false,
            isLog:null
        }
        this.handleShow=this.handleShow.bind(this);
        this.handleHide=this.handleHide.bind(this);
        this.changeStatus=this.changeStatus.bind(this);
    }
    handleShow(val){
        this.setState({
            showMask:true,
            isLog:val
        })
    }
    handleHide(val){
        this.setState({
            showMask:false,
            isLog:val
        })
    }
    changeStatus(){
        let {isLog}=this.state;
        isLog=!isLog;
        this.setState({
            isLog
        })
    }
    render(){
        let {showMask,isLog}=this.state;
        let user=window.sessionStorage.getItem('token')
        const mask=showMask?(
            <Mask>
                {isLog?<Login changeStatus={this.changeStatus}/>:<Reg changeStatus={this.changeStatus}/>}
                <button 
                    className="cancel"
                    onClick={this.handleHide}    
                >X</button>
            </Mask>
        ):null
        const isLogout=user?<UserLogo/>:(<>
        <span onClick={()=>this.handleShow(true)}>登录  </span>
        ·
        <span onClick={()=>this.handleShow(false)}>  注册</span>  
        {mask}
    </>)
        return (
            <header>
            <div id="navbox">
                <Link className="logo" to="/">{/* <img src="./image/logo.png" alt="weng"/> */}</Link>
                <ul id='nav'>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/time">时间轴</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
                <div className="loginPopup">
                {isLogout}
                </div>
            </div>
        </header>
        )
    }
}
export default Nav;