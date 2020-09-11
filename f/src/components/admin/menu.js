import React from 'react';
import {Menu} from 'antd';
import {Link,withRouter} from 'react-router-dom';

  class Navigation extends React.Component {
    render() {
      const selected=this.props.location.pathname;
      console.log(selected)
      return (
          <Menu
            className="navigation"
            defaultSelectedKeys={['/admin']}
            selectedKeys={[`${selected}`]}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="/admin">
               <Link to='/admin'>首页</Link>
            </Menu.Item>
            <Menu.Item key="/admin/list/user">
            <Link to='/admin/list/user'>用户</Link>
            </Menu.Item>
            <Menu.Item key="/admin/list/article">
            <Link to='/admin/list/article'>文章</Link>
            </Menu.Item>
          </Menu>
      );
    }
  }
  export default withRouter(Navigation);