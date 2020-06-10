import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../api/api';

const Login = (props) => {
  const onFinish = values => {
    api.login(values)
  };
  const handleChange=()=>{
    props.changeStatus()
  }
  return (
    <div className="mask">
      <Form
        name="normal_login"
        className="login-form piece"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className="login-form-forgot" to="">
            忘记密码
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          Or <button className="isLogin" onClick={handleChange}>register now!</button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;