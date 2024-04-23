import React from 'react'
import { Row, Card, Col, Image } from 'antd';
import { Button, Form, Input } from 'antd';
import Logo from '../../assets/images/logo.jpg';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const Navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        Navigate('/home');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className='signInWrapper'>
                <Card className='loginCard'>
                    <Row>
                        <Col md={24} >
                            <div className='logoWrapper'>
                                <Image src={Logo} preview={false} className='img-fluid' alt='not found' />
                            </div>
                            <div className='formWrapper'>
                                <Form
                                    name="basic"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <div className='formItemWrapper'>
                                        <label>Username</label>
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div className='formItemWrapper'>
                                        <label>Password</label>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                    </div>
                                    <Form.Item className='submitButtonSection'>
                                        <Button type="primary" htmlType="submit">
                                            Login
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className='exitingAccount'>
                                <p>Don't have an account? <a href="/signUp">Sign Up</a></p>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>

    )
}

export default SignIn;