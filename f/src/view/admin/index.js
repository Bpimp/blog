import React from 'react';
import Navigation from '../../components/admin/menu';
import AdminNav from '../../components/admin/nav';
import AdminRoute from '../../routes/admin';
import Error from './error';
import './index.css';

class Admin extends React.Component{
    render(){
        const isAdmin=sessionStorage.getItem('isAdmin');
        return (
            <div id="admin">
                {isAdmin?(
                <>
                    <AdminNav/>
                    <Navigation/>
                    <AdminRoute/>
                </>):<Error/>}
            </div>
        )
    }
}
export default Admin;