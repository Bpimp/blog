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
            isLogin:null
        }
        this.handleShow=this.handleShow.bind(this);
        this.handleHide=this.handleHide.bind(this);
        this.changeStatus=this.changeStatus.bind(this);
    }
    handleShow(val){
        this.setState({
            showMask:true,
            isLogin:val
        })
    }
    handleHide(val){
        this.setState({
            showMask:false,
            isLogin:val
        })
    }
    changeStatus(){
        let {isLogin}=this.state;
        isLogin=!isLogin;
        this.setState({
            isLogin
        })
    }
    render(){
        let {showMask,isLogin}=this.state;
        let {state}=this.props;
        let isLogout=state?<UserLogo/>:(<>
        <span onClick={()=>this.handleShow(true)}>登录  </span>
        ·
        <span onClick={()=>this.handleShow(false)}>  注册</span>  
        {mask}
    </>)
        const mask=showMask?(
            <Mask>
                {isLogin?<Login changeStatus={this.changeStatus}/>:<Reg changeStatus={this.changeStatus}/>}
                <button 
                    className="cancel"
                    onClick={this.handleHide}    
                >X</button>
            </Mask>
        ):null
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