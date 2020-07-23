import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../view/main/home';
import TimeLine from '../view/main/timeLine';
import About from '../view/main/about';
import Content from '../view/main/content';
//import Admin from '../view/admin/index';
//import Error from '../view/error';
import Login from '../view/loginpage';
import NotFound from '../view/main/notfound';

class RouterIndex extends React.Component{
    render(){
        const isAdmin=sessionStorage.getItem('isAdmin');
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/index/all"/>
                )}/>
                <Route path="/index/:id" component={Home}/>
                <Route path="/time" component={TimeLine}/>
                <Route path="/about" component={About}/>
                <Route path="/content" component={Content}/>
                {/* <Route path="/admin" render={()=>(
                    isAdmin?<Admin/>:<Error/>
                )}/> */}
                <Route path="/login" component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}
export default RouterIndex;