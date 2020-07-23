import React from 'react';
import Aside from '../../components/main/sidebar/index';
import List from '../../components/main/list';

class Home extends React.Component{
    render(){
        return (
            <main className="clear">
                <Aside/>
                <div className="content">
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                </div>
            </main>
        )
    }
}
export default Home;