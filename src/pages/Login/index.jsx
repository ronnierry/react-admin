import React, { Component, useEffect } from 'react'

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'
import loginImage from './images/logo.png'
import loginApi from '../../aip/login';
import { useNavigate } from "react-router-dom";
import { getCurrentUser, setCurrentUser } from '../../service/UserService';

export default function Login(props) {
    let navigate = useNavigate();

    const onFinish = async (values) => {
        let { data } = await loginApi(values)
        setCurrentUser(data)
        navigate('/', { replace: true })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        let user = getCurrentUser()
        console.log('user', user)
        if (user) {
            navigate('/', { replace: true })
        }
    }, [])

    return (
        <div className='login'>
            <header className='login-header'>
                <img src={loginImage}></img>
                <h1>React项目:后台管理系统</h1>
            </header>
            <section className='login-content'>
                <h1>用户登录</h1>
                <Form
                    name="basic"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 16 }}
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                // autoComplete="off"
                >
                    <Form.Item
                        name="username"
                    >
                        <Input size="large" placeholder="用户名" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                    >
                        <Input.Password size="large" placeholder="密码" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item
                    // wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Button block type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    );
}
