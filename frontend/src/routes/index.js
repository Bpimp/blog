import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../view/main/home';
import TimeLine from '../view/main/timeLine';
import About from '../view/main/about';
import Content from '../view/main/content';
import Admin from '../view/admin';
import Login from '../view/loginpage';

class RouterIndex extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/index/all"/>
                )}/>
                <Route path="/index/:id" component={Home}/>
                <Route path="/time" component={TimeLine}/>
                <Route path="/about" component={About}/>
                <Route path="/content" component={Content}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/login" component={Login}/>
            </Switch>
        )
    }
}
export default RouterIndex;