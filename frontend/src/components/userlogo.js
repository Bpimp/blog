import React from 'react';
import {Menu,Dropdown} from 'antd';

const menu=(
    <Menu>
        <Menu.Item>
            <a target='_blank' rel='noopener noreferrer'>
                退出
            </a>
        </Menu.Item>
    </Menu>
)
class UserLogo extends React.Component{
    render(){
        return (
            <Dropdown className="loginPopup" overlay={menu}>
                <a className="userlogo"></a>
            </Dropdown>
        )
    }
}
export default UserLogo;