import React from 'react';
import {Menu} from 'antd';
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
               首页
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              用户
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              文章
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
          </Menu>
      );
    }
  }
  export default Navigation;