import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../view/admin/home';
import User from '../view/admin/user';
import Article from '../view/admin/article';
import MdEditor from '../view/admin/editor';

class AdminRoute extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/admin" exact component={Home}/>
                <Route path="/admin/user" component={User}/>
                <Route path="/admin/article" component={Article}/>
                <Route path="/admin/editor" component={MdEditor}/>
            </Switch>
        )
    }
}
export default AdminRoute;