import React from 'react';
import Aside from '../components/sideBar';

class Home extends React.Component{
    render(){
        return (
        <main>
            <Aside/>
            <div className="content"></div>
        </main>
        )
    }
}
export default Home;