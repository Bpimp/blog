import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {
    HomeOutlined,
    DesktopOutlined,
    ContainerOutlined,
  } from '@ant-design/icons';

  class Navigation extends React.Component {
    render() {
      return (
          <Menu
            className="navigation"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
               <Link to='/admin'>首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to='/admin/user'>用户</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
            <Link to='/admin/article'>文章</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
          </Menu>
      );
    }
  }
  export default Navigation;