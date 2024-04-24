import React from 'react';
import { Breadcrumb, Layout, theme, Row, Col, Card } from 'antd';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Sidebar from "../components/Layout/Sidebar";
import { useLocation } from 'react-router-dom';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { FcBearish, FcNegativeDynamic, FcFlowChart, FcComboChart } from "react-icons/fc";
import GraphOne from "../Helpers/GraphOne";
import GraphTwo from "../Helpers/GraphTwo";
import GraphThree from "../Helpers/GraphThree";
import GraphFour from "../Helpers/GraphFour";

const { Content } = Layout;

const HomeComponent = () => {
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Split the pathname into segments
  const pathSegments = location.pathname.split('/').filter(Boolean);


  const Widgets = [
    {
      key: 1,
      title: 'Revenue',
      label: '1.01M',
      icon: <FcBearish />
    },
    {
      key: 2,
      title: 'Market',
      label: '$50',
      icon: <FcComboChart />
    },
    {
      key: 3,
      label: '$60',
      title: 'Profit',
      icon: <FcFlowChart />
    },
    {
      key: 4,
      label: '23K',
      title: 'Users',
      icon: <FcNegativeDynamic />
    },
    {
      key: 5,
      label: '55K',
      title: 'Loss',
      icon: <FcNegativeDynamic />
    },
  ];

  return (
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
            <div className='widgetsWrapper'>
              <Row>
                {Widgets.map((item) => (
                  <Col md={4}>
                    <Card>
                      <div className='label'>
                        <h5>
                          {item.title}
                        </h5>
                        <p>
                          {item.label}
                        </p>
                      </div>
                      <div className='icon'>
                        {item.icon}
                      </div>

                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <Card className='boxShadowCard'>
              <HighchartsReact
                highcharts={Highcharts}
                options={GraphOne}
              />
            </Card>
            <Row className='splitGraphs'>
              <Col md={12}>
                <Card className='boxShadowCard'>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={GraphTwo}
                  />
                </Card>
              </Col>
              <Col md={11}>
                <Card className='boxShadowCard'>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={GraphThree}
                  />
                </Card>
              </Col>
            </Row>
            <Row className='bottomGraph'>
              <Col md={24}>
                <Card className='boxShadowCard'>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={GraphFour}
                  />
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Content>
      <Footer />
    </Layout>
  );
};
export default HomeComponent;