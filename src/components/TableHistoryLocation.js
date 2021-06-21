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
}
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

const TableHistoryLocation = ({ data }) => {
    const [selectionType, setSelectionType] = useState('radio');

    return (
        <Table
            rowSelection={{
                type: selectionType,
                ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
        />
    );
};

export default TableHistoryLocation