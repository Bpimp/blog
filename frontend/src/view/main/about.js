import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

function About(){
        return (
            <div className="App">
                <Header/>
                <main className="clear">
                    <h2>我</h2>
                    <p>本人90后，生物专业出身，前端菜鸡一名</p>
                    <p>blablabla</p>
                </main> 
                <Footer/>
            </div>
        )
}
export default About;