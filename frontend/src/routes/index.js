import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../view/home';
import TimeLine from '../view/timeLine';
import About from '../view/about';

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
            </Switch>
        )
    }
}
export default RouterIndex;