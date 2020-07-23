import React from 'react';

class Content extends React.Component{
    render(){
        return (
                <main className="clear">
                    <h2>标题</h2>
                    类型：<span></span>
                    创建时间：<span></span>
                    <p>内容</p>
                </main>
        )
    }
}
export default Content;