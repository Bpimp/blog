import React from 'react';
import Navigation from './menu';
import './index.css';

class Admin extends React.Component{
    render(){
        return (
            <div id="admin">
                <Navigation/>
                <div className="admin-content">后台管理页面</div>
            </div>
        )
    }
}
export default Admin;