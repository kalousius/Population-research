import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MenuComponent = () => {
  const menuItems = [
    {
      key: 'home',
      label: 'Home',
      href: '/',
    },
    {
      key: 'login',
      label: 'Login',
      href: '/login',
    },
    {
      key: 'register',
      label: 'Register',
      href: '/register',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#FF0000' }}>
    <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{ backgroundColor: '#FF0000' }}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>
          {/* Use Link to navigate to the specified href */}
          <Link to={item.href}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  </div>
);
};

export default MenuComponent;