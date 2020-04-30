import React from 'react';
import Login from '../components/login';
import Reg from '../components/reg';

class LoginPage extends React.Component{
    constructor(){
        super();
        this.state={
            isLogin:true
        }
        this.changeStatus=this.changeStatus.bind(this);
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
            <div className="login">
                {this.state.isLogin?<Login changeStatus={this.changeStatus}/>:<Reg changeStatus={this.changeStatus}/>}
            </div>
        )
    }
}
export default LoginPage;