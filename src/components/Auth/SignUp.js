import React from 'react'
import { Row, Card, Col, Image } from 'antd';
import { Button, Form, Input } from 'antd';
import Logo from '../../assets/images/logo.jpg';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    Swal.fire(({
      title: 'Registeration Successful',
      icon: 'success'
    }));
    navigate('/home');
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className='signUpWrapper'>
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
                  <Row className='formRow'>
                    <Col md={11}>
                      <div className='formItemWrapper'>
                        <label>First Name</label>
                        <Form.Item
                          name="fname"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your first namee!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className='formItemWrapper'>
                        <label>Last Name</label>
                        <Form.Item
                          name="lname"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your last name!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                  <Row className='formRow'>
                    <Col md={11}>
                      <div className='formItemWrapper'>
                        <label>Email</label>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter your email!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className='formItemWrapper'>
                        <label>Mobile</label>
                        <Form.Item
                          name="mobile"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your mobile number!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                  <Row className='formRow'>
                    <Col md={11}>
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
                    </Col>
                    <Col md={12}>
                      <div className='formItemWrapper'>
                        <label>Confirm Password</label>
                        <Form.Item
                          name="confirm_password"
                          rules={[
                            {
                              required: true,
                              message: 'Please confirm your password!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                  <Form.Item className='submitButtonSection'>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className='exitingAccount'>
                <p>Already have an account? <a href="/signIn">Sign In</a></p>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>

  )
}

export default SignUp;