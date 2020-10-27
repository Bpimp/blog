import React from 'react';
import {Link} from 'react-router-dom'

const NotFound=()=>{
    return (
        <>
            <div className="main">
                <main className="err-page">
                    <h1>404<br/>ERROR</h1>
                    <p>Page not found</p>
                </main>
            </div>
            <Link className="index-link" to='/'>回到首页</Link>
        </>
    )
}
export default NotFound;