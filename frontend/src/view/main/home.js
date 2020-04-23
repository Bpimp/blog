import React from 'react';
import Aside from '../../components/sidebar/index';
import List from '../../components/list';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Home extends React.Component{
    render(){
        return (
        <>
            <Header/>
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
            <Footer/>
        </>
        )
    }
}
export default Home;