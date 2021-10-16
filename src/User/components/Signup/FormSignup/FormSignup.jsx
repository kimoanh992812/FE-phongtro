import { Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { validEmail, validPhone } from "../../../../constant/validate.js";

const { Option } = Select;

function FormSignup() {
  const [form] = Form.useForm();

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

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}>
        <Option value='84'>+84</Option>
        <Option value='86'>+86</Option>
      </Select>
    </Form.Item>
  );

  const handleCreateCustomer = () => {};

  return (
    <Form
      className='register-form'
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={handleCreateCustomer}
      initialValues={{
        prefix: "84",
      }}
      scrollToFirstError>
      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your E-mail!",
          },
          () => ({
            validator(_, value) {
              if (!value || value.match(validEmail)) {
                return Promise.resolve();
              }

              return Promise.reject();
            },
          }),
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            min: 8,
            message: "Please input your password!",
          },
        ]}
        hasFeedback>
        <Input.Password placeholder='Please input your password' />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}>
        <Input.Password placeholder='Please confirm your password' />
      </Form.Item>

      <Form.Item
        name='fullname'
        label='Fullname'
        rules={[
          {
            required: true,
            message: "Please input your fullname!",
            whitespace: true,
          },
        ]}>
        <Input placeholder='Please input your fullname' />
      </Form.Item>

      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
          () => ({
            validator(_, value) {
              if (!value || value.match(validPhone)) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}>
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
          placeholder='Please input your phone number'
        />
      </Form.Item>

      <Form.Item
        name='address'
        label='Address'
        rules={[
          {
            required: true,
            message: "Please input your address!",
            whitespace: true,
          },
        ]}>
        <Input placeholder='Please input your address' />
      </Form.Item>

      <Form.Item
        name='agreement'
        valuePropName='checked'
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}>
        <Checkbox>
          I have read the{" "}
          <Link to='' className='login-link'>
            agreement
          </Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormSignup;
