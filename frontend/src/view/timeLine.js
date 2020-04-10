import React from 'react';
import Aside from '../components/sidebar/index';

class TimeLine extends React.Component{
    render(){
        return (
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
        )
    }
}
export default TimeLine;