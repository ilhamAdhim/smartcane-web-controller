import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import Sidebar from '../components/Sidebar';

const { Header, Content, Footer } = Layout;

const HistoryLocation = props => {
    useEffect(() => {
        document.title = 'Smartcane | Location'
    }, []);
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Ini history location
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    );
};
export default HistoryLocation;