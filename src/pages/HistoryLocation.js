import React, { useEffect, useState } from 'react';
import { Layout, Breadcrumb, Spin, Col, Row, Skeleton } from 'antd';
import Sidebar from '../components/Sidebar';
import MapLocation from '../components/MapLocation';
import { readDataFirebase } from '../firebase/services';
import { myFirebase } from '../firebase';
import TableHistoryLocation from '../components/TableHistoryLocation';
import Title from 'antd/lib/typography/Title';

const { Header, Content, Footer } = Layout;

const spinContainerStyle = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    borderRadius: '4px',
}

const HistoryLocation = props => {
    const [latitude, setLatitude] = useState("0");
    const [longitude, setLongitude] = useState("0");
    const [historyLocation, setHistoryLocation] = useState([]);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [isRecordLoaded, setIsRecordLoaded] = useState(false);

    //Get the data from firebase and update the value of those states ✔
    useEffect(() => {
        document.title = 'Smartcane | Location'

        let ref = myFirebase.database().ref(`rtLocation`)
        readDataFirebase(ref).then(response => {
            setLatitude(response.latitude)
            setLongitude(response.longitude)
            setIsMapLoaded(true)
        })

        let refHistory = myFirebase.database().ref(`history/2021-6-21`)
        readDataFirebase(refHistory).then(response => {
            if (response !== null) {
                let idTime = Object.keys(response)
                let infoPerHours = Object.values(response)
                console.log(idTime)
                setHistoryLocation(infoPerHours.map((item, index) => {
                    // let array = []
                    /* let idHours = Object.keys(item)
                    let locationInfo = Object.values(item) */
                    /*  locationInfo.map((itemLoc, indexLoc) => {
                         array.push({ hour: idHours[indexLoc], ...itemLoc })
                     }) */
                    return { key: idTime[index], time: idTime[index], ...item }
                }))
                setIsRecordLoaded(true)
            }
        })
    }, []);

    useEffect(() => {
        console.log(historyLocation)
    }, [historyLocation]);

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Row gutter={16} align="center">
                                <Col sm={24} md={24} lg={12}>
                                    <Title level={2} > Maps </Title>
                                    {isMapLoaded ? (
                                        <>
                                            <MapLocation latitude={latitude} longitude={longitude} />
                                        </>
                                    ) : (
                                        <div style={spinContainerStyle}>
                                            <Spin tip="Loading Map..." />
                                        </div>
                                    )}
                                </Col>
                                <Col sm={24} md={24} lg={12}>
                                    <Title level={2} > Location Record </Title>
                                    {isRecordLoaded ? (
                                        <>
                                            <TableHistoryLocation data={historyLocation} />
                                        </>
                                    ) : <Skeleton active paragraph={{ rows: 6 }} />}
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    );
};
export default HistoryLocation;