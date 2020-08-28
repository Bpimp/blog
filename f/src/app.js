import React from 'react';
import {withRouter} from 'react-router-dom';
import RouterIndex from './routes/index';
import Admin from './view/admin/index';
import Header from './components/main/header';

class App extends React.Component{
    render(){
        const pathname=this.props.location.pathname.match(/^\/([^/]+)/);
        return (
            <div className='App'>
                {(pathname!==null&&pathname[1]==='admin')?<Admin/>:(
                <>
                    <Header/>
                    <RouterIndex/>
                </>)}
            </div>
        )
    }
}
export default withRouter(App);