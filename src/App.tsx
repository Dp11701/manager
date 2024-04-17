import React, { useState } from 'react';
import {
    LineChartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, ProductOutlined,

    UserOutlined,

} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {Link, Route, Routes} from "react-router-dom";
import User from "./component/User/User.tsx";
import Product from "./component/Product/Product.tsx";
import Charter from "./component/Charter.tsx";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer,borderRadiusLG  },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'95vh'}}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to="/users">User</Link>,
                        },
                        {
                            key: '2',
                            icon:<ProductOutlined />,
                            label: <Link to="/product">Product</Link>,
                        },
                        {
                            key: '3',
                            icon: <LineChartOutlined />,
                            label: <Link to="/chart">Chart</Link>,
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

                <Content style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}><Routes>
                    <Route path='/users' element={<User/>}/>
                    <Route path='/product' element={<Product/>}/>
                    <Route path='/chart' element={<Charter />}/>
                </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;