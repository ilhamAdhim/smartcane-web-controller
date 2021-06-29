import React, { useEffect, useState } from 'react';
import { Layout, Breadcrumb, Spin, Col, Row, Skeleton, Button, Tabs } from 'antd';
import Sidebar from '../components/Sidebar';
import MapLocation from '../components/MapLocation';
import { readDataFirebase } from '../firebase/services';
import { myFirebase } from '../firebase';
import TableHistoryLocation from '../components/TableHistoryLocation';
import Title from 'antd/lib/typography/Title';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const spinContainerStyle = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    borderRadius: '4px',
}


const HistorySection = props => {
    const [latitude, setLatitude] = useState("0");
    const [longitude, setLongitude] = useState("0");
    const [historyLocation, setHistoryLocation] = useState([]);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [isRecordLoaded, setIsRecordLoaded] = useState(false);

    const [datesData, setDates] = useState([]);

    const [isCurrentLocation, setIsCurrentLocation] = useState(true);

    //Get the data from firebase and update the value of those states ✔
    useEffect(() => {
        // Get Real time location
        getCurrentLocation()

        // Get history location
        getLocationData("2021-6-22")

        // Get dates
        getDatesData()
    }, []);

    const getCurrentLocation = () => {
        let ref = myFirebase.database().ref(`rtLocation`)
        readDataFirebase(ref).then(response => {
            setIsCurrentLocation(true)
            setLatitude(response.latitude)
            setLongitude(response.longitude)
            setIsMapLoaded(true)
        })
    }

    const getDatesData = () => {
        let refHistory = myFirebase.database().ref(`history`)
        readDataFirebase(refHistory).then(response => {
            if (response !== null) {
                let infoDates = Object.keys(response)
                setDates(Object.values(infoDates))
            }
        })

    }

    const callback = (key) => {
        getLocationData(key)
    }

    const getLocationData = (date) => {
        let refHistory = myFirebase.database().ref(`history/${date}`)
        readDataFirebase(refHistory).then(response => {
            if (response !== null) {
                let idTime = Object.keys(response)
                let infoPerHours = Object.values(response)
                console.log(idTime)
                setHistoryLocation(infoPerHours.map((item, index) => {
                    return { key: idTime[index], time: idTime[index], ...item }
                }))
                setIsRecordLoaded(true)
            }
        })
    }


    useEffect(() => {
        console.log(latitude, longitude)
    }, [latitude, longitude]);

    return (
        <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Row gutter={24} align="center">
                    <Col sm={24} md={24} lg={12}>
                        <Title level={2} > Maps {isCurrentLocation ? 'Current location' : ''} </Title>
                        {isMapLoaded ? (
                            <>
                                <MapLocation latitude={latitude} longitude={longitude} />
                                <Button children="Show current location" onClick={() => {
                                    getCurrentLocation()
                                    setIsCurrentLocation(true)
                                }} type="primary" style={{ marginTop: '1em' }} />
                            </>
                        ) : (
                            <div style={spinContainerStyle}>
                                <Spin tip="Loading Map..." />
                            </div>
                        )}
                    </Col>
                    <Col sm={24} md={24} lg={12}>
                        <Title level={2} > Location Record </Title>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            {isRecordLoaded ? (
                                <>
                                    {datesData.map(item => (
                                        <TabPane tab={item} key={item}>
                                            <TableHistoryLocation data={historyLocation}
                                                updateLocation={() => setIsCurrentLocation(false)}
                                                changeLatitude={(val) => setLatitude(val)}
                                                changeLongitude={(val) => setLongitude(val)}
                                            />
                                        </TabPane>
                                    ))}
                                </>
                            ) : <Skeleton active paragraph={{ rows: 6 }} />}
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </Content>
    );
};

export default HistorySection;