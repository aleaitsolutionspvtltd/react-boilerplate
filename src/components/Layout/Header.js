import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;

const navItems = [
  {
    key: '1',
    label: 'Home',
    path: '/home'
  },
  {
    key: '2',
    label: 'Tables',
    path: '/tables'
  },
  {
    key: '3',
    label: 'Profile',
    path: '/profile'
  }
];

const HeaderComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleMenuItemClick = (path) => {
    navigateTo(path);
  };

  const handleProfileClick = () => {
    navigateTo('/profile');
  };

  const handleLogoutClick = () => {
    navigateTo('/signIn');
  };

  return (
    <>
      <div className='headerWrapper'>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {navItems.map(item => (
              <Menu.Item key={item.key} onClick={() => handleMenuItemClick(item.path)}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
          <Menu mode="horizontal" className='rightMenu'>
            <SubMenu
              icon={<UserOutlined />}
            >
              <Menu.Item key="profile" onClick={handleProfileClick}>Profile</Menu.Item>
              <Menu.Item key="logout" onClick={handleLogoutClick}>Log Out</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </div>
    </>
  );
};

export default HeaderComponent;
