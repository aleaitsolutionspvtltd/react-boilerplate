import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Image,
    Layout,
    Breadcrumb,
    theme
} from 'antd';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Sidebar from "../components/Layout/Sidebar";
import Avatar from "../assets/images/Avatar.jpg";
import { useLocation } from 'react-router-dom';

const { Content } = Layout;
const { Option } = Select;

const Profile = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const location = useLocation();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

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

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Split the pathname into segments
    const pathSegments = location.pathname.split('/').filter(Boolean);

    return (
        <>
            <Layout>
                <Header />
                <Content
                    style={{
                        padding: '0 48px',
                    }}
                >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {pathSegments.map((segment, index) => (
                            <Breadcrumb.Item key={index}>
                                {capitalizeFirstLetter(segment)}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <Layout
                        style={{
                            padding: '24px 0',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Sidebar />
                        <Content
                            style={{
                                padding: '0 24px',
                                minHeight: 280,
                            }}
                        >
                            <div className='profileContentWrapper'>
                                <Row>
                                    <Col md={6} className='leftSection'>
                                        <div className='imgwrapper'>
                                            <Image src={Avatar} alt="not found" className="img-fluid" preview={false} />
                                        </div>
                                        <div className='infoSection'>
                                            <h5>Loreum Ipsum</h5>
                                        </div>
                                    </Col>
                                    <Col md={14} className='rightSection'>
                                        <div className='formRow'>
                                            <Form
                                                {...formItemLayout}
                                                form={form}
                                                name="register"
                                                onFinish={onFinish}
                                                initialValues={{
                                                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                                                    prefix: '86',
                                                }}
                                                style={{
                                                    maxWidth: 600,
                                                }}
                                                scrollToFirstError
                                            >
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

                                                <Form.Item
                                                    name="password"
                                                    label="Password"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your password!',
                                                        },
                                                    ]}
                                                    hasFeedback
                                                >
                                                    <Input.Password />
                                                </Form.Item>

                                                <Form.Item
                                                    name="confirm"
                                                    label="Confirm Password"
                                                    dependencies={['password']}
                                                    hasFeedback
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please confirm your password!',
                                                        },
                                                        ({ getFieldValue }) => ({
                                                            validator(_, value) {
                                                                if (!value || getFieldValue('password') === value) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(new Error('The new password that you entered do not match!'));
                                                            },
                                                        }),
                                                    ]}
                                                >
                                                    <Input.Password />
                                                </Form.Item>

                                                <Form.Item
                                                    name="nickname"
                                                    label="Nickname"
                                                    tooltip="What do you want others to call you?"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your nickname!',
                                                            whitespace: true,
                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                    name="phone"
                                                    label="Phone Number"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your phone number!',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        addonBefore={prefixSelector}
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name="website"
                                                    label="Website"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input website!',
                                                        },
                                                    ]}
                                                >
                                                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                                                        <Input />
                                                    </AutoComplete>
                                                </Form.Item>

                                                <Form.Item
                                                    name="intro"
                                                    label="Intro"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input Intro',
                                                        },
                                                    ]}
                                                >
                                                    <Input.TextArea showCount maxLength={100} />
                                                </Form.Item>

                                                <Form.Item
                                                    name="gender"
                                                    label="Gender"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please select gender!',
                                                        },
                                                    ]}
                                                >
                                                    <Select placeholder="select your gender">
                                                        <Option value="male">Male</Option>
                                                        <Option value="female">Female</Option>
                                                        <Option value="other">Other</Option>
                                                    </Select>
                                                </Form.Item>
                                                <div className='submitBtnSection'>
                                                    <Form.Item {...tailFormItemLayout}>
                                                        <Button type="primary" htmlType="submit">
                                                            Save
                                                        </Button>
                                                    </Form.Item>
                                                </div>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Footer />
            </Layout>
        </>
    )
}

export default Profile