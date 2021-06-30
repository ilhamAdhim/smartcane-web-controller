import React, { useState } from 'react';
import { Table } from 'antd';
const columns = [{
    title: 'Latitude',
    dataIndex: 'latitude',
},
{
    title: 'Longitude',
    dataIndex: 'longitude',
},
{
    title: 'Time',
    dataIndex: 'time',
},
{
    title: 'Distance',
    dataIndex: 'distance',
},
{
    title: 'Risk',
    dataIndex: 'risk',
},

];

const rowSelection = {
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};



const TableHistoryLocation = ({ data, ...props }) => {
    const [selectionType, setSelectionType] = useState('radio');

    const updateLocation = (selectedRows) => {
        props.changeLatitude(selectedRows[0].latitude)
        props.changeLongitude(selectedRows[0].longitude)
        props.updateLocation(false)
        console.log(`selectedRowKeys: ${selectedRows[0].latitude}, longitude : ${selectedRows[0].longitude}`);
    }

    return (
        <Table
            rowSelection={{
                type: selectionType,
                onChange: (selectedRowKeys, selectedRows) => updateLocation(selectedRows),
                ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
        />
    );
};

export default TableHistoryLocation