import React from 'react';
import {Redirect} from 'react-router-dom';

class Error extends React.Component{
    constructor(){
        super();
        this.state={
            count:2
        }
    }
    componentDidMount(){
        let timer=setInterval(()=>{
            this.setState((preState)=>({
                count:preState.count-1
            }),()=>{
                if(this.state.count===0){
                    clearInterval(timer)
                }
            })
        },1000)
    }
    render(){
        const {isAdmin}=this.props;
        let {count}=this.state;
        return (
            <div>
                权限不足
                {count===0?(isAdmin===null?<Redirect to='login'/>:<Redirect to='/'/>):''}
            </div>
        )
    }
}
export default Error;