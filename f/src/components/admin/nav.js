import React from 'react';
import {Link} from 'react-router-dom';

class AdminNav extends React.Component{
    render(){
        return (
            <header>
                <img className='logo' src={require('../../img/logo.png')} alt='weng'/>
                <Link className='add' to="/admin/editor">写文章</Link> 
            </header>
        )
    }
}
export default AdminNav;