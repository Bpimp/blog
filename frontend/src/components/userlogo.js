import React from 'react';
import {Menu,Dropdown} from 'antd';
import {withRouter} from 'react-router-dom';

class UserLogo extends React.Component{
    logout=()=>{
        window.sessionStorage.clear()
        this.props.history.go(0)
    }
    render(){
        const menu=(
            <Menu>
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