import React from 'react';

class Aside extends React.Component{
    render(){
        return (
            <aside>
                <div id="intro" className="piece">
                    <h2 className="title">介绍</h2>
                    <ul>
                        <li>职业：</li>
                        <li>Email：635733853@qq.com</li>
                        <li className="ellipsis">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</li>
                    </ul>
                </div>
                <div id="tag" className="piece">
                    <h3 className="title">标签</h3>
                    <ul className="tagList clear">
                        <li><a href="#">javaScript</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">node</a></li>
                        <li><a href="#">react</a></li>
                        <li><a href="#">vue</a></li>
                    </ul>
                </div>
            </aside>
        )
    }
}
export default Aside;