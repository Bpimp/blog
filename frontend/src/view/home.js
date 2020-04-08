import React from 'react';
import Aside from '../components/sideBar';
import List from '../components/list';

class Home extends React.Component{
    render(){
        return (
        <main>
            <Aside/>
            <div className="content">
                <List/>
            </div>
        </main>
        )
    }
}
export default Home;