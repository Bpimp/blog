import React from 'react';
import {Link} from 'react-router-dom';

function Tag(props){
    const tag=props.categories.map(item=>(
        <li key={item._id}><Link to={`/index/${item.tab}`}>{item.tab}</Link></li>
    ))
    return (
        <div id="tag" className="piece">
            <h3 className="title">标签</h3>
            <ul className="tagList clear">
                {tag}
            </ul>
        </div>
    )
}
export default Tag;