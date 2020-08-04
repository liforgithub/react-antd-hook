import React, { useState, useEffect, useMemo } from 'react'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BellOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from '@ant-design/icons';
import { Layout, Breadcrumb, Space, Avatar, Badge, Menu, Dropdown } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import './style.css'
const { Sider, Header, Content } = Layout

const renderMenuItem = (routes) => {
    if (!Array.isArray(routes)) {
        return null;
    }

    return routes
            .filter(r => r.hidden != true)
            .map((item, index) => {
                if (item.children && item.children.length > 0) {
                    return <Menu.SubMenu key={item.path} icon={item.icon} title={item.name}>{ renderMenuItem(item.children) }</Menu.SubMenu>
                } else {
                    return <Menu.Item key={item.path} icon={item.icon}><Link to={item.path}>{item.name}</Link></Menu.Item>
                }
            })
}

const BasicLayout = ({route, children}) => {

    const [collapsed, setCollapsed] = useState(false)

    const { pathname } = useLocation()
    const [openKeys, setOpenKeys] = useState([]);

    useEffect(() => {
        const list = pathname.split('/').splice(1);
        setOpenKeys(list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`));
    }, []);

    const getSelectedKeys = useMemo(() => {
        const list = pathname.split('/').splice(1);
        return list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
    }, [pathname]);

    return (
        <Layout className="customer-component-layout">
            <Sider trigger={null} collapsible collapsed={collapsed} className="sider">
                <div className="logo" />
                <Menu 
                    theme="dark" 
                    mode="inline"
                    openKeys={openKeys}
                    selectedKeys={getSelectedKeys}
                >
                    {renderMenuItem(route.children)}
                </Menu>
            </Sider>
            <Layout 
                className="right-main-layout"
                style={{
                    marginLeft: !collapsed ? 200 : 80,
                }}
            >
                <Header className="header">
                    {
                        React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })
                    }
                </Header>
                <Content className="content">
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout