import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/login';
import Reg from '../components/reg';

const LoginPage=(props)=>{
        let {isLog}=props;
        return (
            <div className="login">
                {isLog?<Reg/>:<Login/>}
            </div>
        )
}
export default connect(state=>state.user)(LoginPage);