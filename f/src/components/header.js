import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Mask from './mask';
import Login from './login';
import Reg from './reg';
import UserLogo from './userlogo';

class Nav extends React.Component{
    constructor(){
        super();
        this.tolog=this.tolog.bind(this);
        this.toreg=this.toreg.bind(this);
        this.handleHide=this.handleHide.bind(this);
    }
    tolog(){
        this.props.dispatch(dispatch=>{
            dispatch({
                type:'TO_LOG',
                data:{
                    isLog:true,
                    showMask:true
                }
                
            })
        })
    }
    toreg(){
        this.props.dispatch(dispatch=>{
            dispatch({
                type:'TO_LOG',
                data:{
                    isLog:false,
                    showMask:true
                }
            })
        })
    }
    handleHide(){
        this.props.dispatch(dispatch=>{
            dispatch({
                type:'CLOSE_MASK',
                showMask:false
            })
        })
    }
    render(){
        let {showMask,isLog}=this.props;
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
        <span onClick={this.tolog}>登录  </span>
        ·
        <span onClick={this.toreg}>  注册</span>  
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
export default connect(
    state=>state.user
)(Nav);