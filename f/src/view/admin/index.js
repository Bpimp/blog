import React from 'react';
import Navigation from '../../components/admin/menu';
import AdminNav from '../../components/admin/nav';
import './index.css';

class Admin extends React.Component{
    render(){
        return (
            <div id="admin">
                <AdminNav/>
                <div>
                    <Navigation/>
                    <div className="admin-content">后台管理页面</div>
                </div>
            </div>
        )
    }
}
export default Admin;