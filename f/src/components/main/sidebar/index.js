import React from 'react';
import {Link} from 'react-router-dom';

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
                        <li><Link to="/type/javaScript">javaScript</Link></li>
                        <li><Link to="/type/CSS">CSS</Link></li>
                        <li><Link to="/type/node">node</Link></li>
                        <li><Link to="/type/react">react</Link></li>
                        <li><Link to="/type/vue">vue</Link></li>
                    </ul>
                </div>
            </aside>
        )
    }
}
export default Aside;