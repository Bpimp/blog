import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../view/home';
import TimeLine from '../view/timeLine';

class RouterIndex extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/time" component={TimeLine}/>
            </Switch>
        )
    }
}
export default RouterIndex;