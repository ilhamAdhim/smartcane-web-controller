import React from 'react';
import { Statistic, Card, Row, Col, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const CardStatistics = props => {
    const colorStyle = {
        color: props.proximityRisk === 'HIGH' ? '#e33307' : '#3f8600'
    }
    return (
        <div className="site-statistic-demo-card">
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Risk"
                            value={props.proximityRisk}
                            precision={2}
                            valueStyle={colorStyle}
                            prefix={props.proximityRisk === 'HIGH' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}

                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Row gutter={16} justify="space-around">
                            <Col span={12}>
                                <Statistic title="Distance" value={props.proximityVal} suffix="cm" />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CardStatistics;