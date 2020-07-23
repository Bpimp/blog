import React from 'react';
import {Menu,Dropdown} from 'antd';
import {Link,withRouter} from 'react-router-dom';

class UserLogo extends React.Component{
    logout=()=>{
        window.sessionStorage.clear()
        this.props.history.go(0)
    }
    render(){
        const isAdmin=Boolean(window.sessionStorage.getItem('isAdmin'));
        const menu=(
            <Menu>
                {isAdmin?(
                    <Menu.Item>
                        <Link to='/admin'>
                            后台管理
                        </Link>
                    </Menu.Item>):''
                }
                <Menu.Item>
                <span 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={this.logout}    
                >
                    退出
                </span>
            </Menu.Item>
            </Menu>
        )
        return (
            <Dropdown 
                className="loginPopup" 
                overlay={menu}>
                <span className="userlogo"></span>
            </Dropdown>
        )
    }
}
export default withRouter(UserLogo);