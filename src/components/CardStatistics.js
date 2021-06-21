import React from 'react';
import { Statistic, Card, Row, Col, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const CardStatistics = props => {
    return (
        <div className="site-statistic-demo-card">
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Row gutter={16} justify="space-around">
                            <Col span={12}>
                                <Statistic title="Active Users" value={112893} />
                            </Col>
                            <Col span={12} style={{ textAlign: 'right' }}>
                                <Progress type="circle" percent={75} width={60} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CardStatistics;