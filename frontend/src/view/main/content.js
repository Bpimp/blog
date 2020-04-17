import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Content extends React.Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <main className="clear">
                    <h2>标题</h2>
                    类型：<span></span>
                    创建时间：<span></span>
                    <p>内容</p>
                </main>
                <Footer/>
            </div>
        )
    }
}
export default Content;