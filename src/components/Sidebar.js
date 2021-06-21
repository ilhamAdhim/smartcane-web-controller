import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation()
    console.log(location.pathname)
    return (
        <Sider collapsible collapsed={isCollapsed} onCollapse={() => setIsCollapsed(!isCollapsed)}>
            <div className="logo" style={{ height: '4.2em', display: 'block' }}>
                <div style={{ padding: '1em', color: 'white' }}>
                    Smartcane - IOT Project
                </div>
            </div>
            <Menu selectable theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                <Menu.Item key="/" icon={<PieChartOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="/HistoryLocation" icon={<DesktopOutlined />}>
                    <Link to="/HistoryLocation">Track Location</Link>
                </Menu.Item>
                <Menu.Item key="/Profile" icon={<UserOutlined />}>
                    <Link to="/Profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="/Login" icon={<FileOutlined />}>
                    <Link to="/">Logout</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;