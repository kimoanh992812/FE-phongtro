import { Button, Checkbox, Input, Form, Space } from "antd";

import React from "react";

function FormLogin({ handlePopupSignup, handlePopupLogin }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      name='basic'
      layout='vertical'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete='off'
      style={{ width: "70%", margin: "0 auto" }}>
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Space align='center' size={120}>
        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item name='Register Now!'>
          <span
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              handlePopupLogin(e, false);
              handlePopupSignup(e, true);
            }}>
            Register Now!
          </span>
        </Form.Item>
      </Space>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormLogin;
