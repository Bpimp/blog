import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../view/admin/home';
import DataList from '../view/admin/dataList';
import MdEditor from '../view/admin/editor';

class AdminRoute extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/admin" exact component={Home}/>
                <Route path="/admin/list/:id" component={DataList}/>
                <Route path="/admin/editor" component={MdEditor}/>
            </Switch>
        )
    }
}
export default AdminRoute;