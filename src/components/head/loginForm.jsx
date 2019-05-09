import React from 'react';
import {Form, Input } from 'antd';
// 登陆表单组建
class LoginForm extends React.Component{
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form id="loginForm">
                    <Form.Item>
                    {getFieldDecorator('username')(<Input placeholder="账号" />)}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password')(<Input.Password  placeholder="密码" />)}
                    </Form.Item>
                </Form>
        )
    }
}
export default LoginForm = Form.create()(LoginForm);
