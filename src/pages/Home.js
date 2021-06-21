import React, { useEffect, useState } from 'react';
import { Layout, Breadcrumb, Spin, BackTop } from 'antd';
import Sidebar from '../components/Sidebar';
import CardStatistics from '../components/CardStatistics';
import {
    UpOutlined,
} from '@ant-design/icons';
import { myFirebase } from '../firebase';
import { readDataFirebase } from '../firebase/services';
const { Header, Content, Footer } = Layout;

const spinContainerStyle = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px',
}

const topButtonStyle = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
}

const Home = () => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [proximity, setProximity] = useState({});

    useEffect(() => {
        document.title = 'Smartcane | Home'

        setTimeout(() => {
            setIsDataLoaded(true)
        }, 1000);

        let refProximity = myFirebase.database().ref('rtProxSensor')
        readDataFirebase(refProximity).then(response => {
            setProximity(response)
        })
    }, []);

    useEffect(() => {
        console.log(proximity)
    }, [proximity]);
    return (
        <Layout style={{ minHeight: '600vh' }}>
            <BackTop >
                <UpOutlined style={topButtonStyle} />
            </BackTop>
            <Sidebar />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div style={{ marginBottom: '2em 1em' }}> Ini home dan statistiknya </div>
                        {isDataLoaded ? (
                            <CardStatistics proximityVal={proximity.distance} proximityRisk={proximity.risk} />

                        ) :
                            <div style={spinContainerStyle}>
                                <Spin />
                            </div>
                        }

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};
export default Home;