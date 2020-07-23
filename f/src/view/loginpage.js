import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/main/login';
import Reg from '../components/main/reg';

const LoginPage=(props)=>{
        let {isLog}=props;
        return (
            <div className="login">
                {isLog?<Reg/>:<Login/>}
            </div>
        )
}
export default connect(state=>state.user)(LoginPage);