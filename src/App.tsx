import {
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Charter from './component/Charter/Charter.tsx';
import CreateProduct from './component/Product/CreateProduct.tsx';
import Product from './component/Product/Product.tsx';
import CreateUser from './component/User/CreateUser.tsx';
import User from './component/User/User.tsx';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '95vh' }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to="/users">Người dùng</Link>,
            },
            {
              key: '2',
              icon: <ProductOutlined />,
              label: <Link to="/product">Sản phẩm</Link>,
            },
            {
              key: '3',
              icon: <LineChartOutlined />,
              label: <Link to="/chart">Thống kê</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/users" element={<User />} />
            <Route path="/product" element={<Product />} />
            <Route path="/chart" element={<Charter />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/users/create" element={<CreateUser />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
