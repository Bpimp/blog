import React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Row,
  Col,
  Button
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const Reg = (props) => {
  const onFinish = values => {
    //console.log('Received values of form: ', values);
    axios.post('http://localhost:8080/user/register',{values})
    .then(res=>{
      console.log(res)
    })
  };
  const handleChange=()=>{
      props.changeStatus()
  }
  return (
    <div className="mask">
      <Form
      className="piece"
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
      <Form.Item
      {...formItemLayout}
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
        {...formItemLayout}
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
        {...formItemLayout}
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认密码',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('两次密码不一致');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item label="验证码" extra="请输入获取的验证码.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>点击获取</Button>
          </Col>
        </Row>
      </Form.Item> */}
        <Form.Item >
          <Button type="primary" htmlType="submit" className="register-form-button">
            注册
          </Button>
          Or <button className="isLogin" onClick={handleChange}>login now!</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Reg;