import React from 'react';
import {withRouter} from 'react-router-dom';
import RouterIndex from './routes/index';
import Admin from './view/admin/index';
import Header from './components/main/header';
import Footer from './components/main/footer';

class App extends React.Component{
    render(){
        const pathname=this.props.location.pathname.match(/^\/([^/]+)/);
        return (
            <div className='App'>
                {(pathname!==null&&pathname[1]==='admin')?<Admin/>:(
                <>
                    <Header/>
                        <RouterIndex/>
                    <Footer/>
                </>)}
            </div>
        )
    }
}
export default withRouter(App);