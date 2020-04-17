import React from 'react';
import Aside from '../../components/sidebar/index';
import Header from '../../components/header';
import Footer from '../../components/footer';

class TimeLine extends React.Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <main className="clear">
                    <Aside/>
                    <div className="content">
                        <p className="year">2020</p>
                        <ul className="timelist">
                            <li className="item">
                                <span>三墩了福林酚克利夫兰</span>
                            </li>
                            <li className="item">
                                <span>三墩了福林酚克利夫兰</span>
                            </li>
                        </ul>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
export default TimeLine;