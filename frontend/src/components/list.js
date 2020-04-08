import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component{
    render(){
        return (
            <div className="article-list">
                <h3><Link>文章标题</Link></h3>
                <p>文章简介</p>
            </div>
        )
    }
}
export default List;