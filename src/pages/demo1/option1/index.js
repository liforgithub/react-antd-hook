import React, { useState, useEffect } from 'react'
import { Row, Col, Input, Select, Button, DatePicker, Table, Space } from 'antd';
import { SearchOutlined, UserAddOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;

const inputStyle = { width: 160, borderRadius: 4 }
const blockStyle = {
    padding: 12,
    background: '#fff',
    borderRadius: 4,
    marginBottom: 12,
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .1)'
}

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        align: 'center',
        sorter: true,
        width: '200px',
    },
    {
        title: '性别',
        dataIndex: 'gender',
        align: 'center',
        render: gender => gender == 1 ? '男': '女',
        filters: [{
                text: '男',
                value: 1
            },
            {
                text: '女',
                value: 2
            },
        ],
        width: '200px',
    },
    {
        title: '邮箱',
        align: 'center',
        dataIndex: 'email',
    },
    {
        title: '操作',
        align: 'center',
        key: 'action',
        render: (text, record) => (
            <Space>
                <Button style={{borderRadius: '4px'}} type="primary" size="middle">查看详情</Button>
                <Button style={{borderRadius: '4px'}} type="ghost" size="middle">冻结</Button>
                <Button style={{borderRadius: '4px'}} type="primary" danger size="middle">删除</Button>
            </Space>
        )
    }
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === '张三02', // Column configuration not to be checked
        name: record.name,
    }),
};

const handleTableChange = (pagination, filters, sorter) => {
    console.log(pagination)
    console.log(filters)
    console.log(sorter)
}

const Demo1Option1 = () => {

    const [data, setData] = useState([])
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 200
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            let data = [
                {
                    id: 1,
                    name: "张三",
                    gender: 1,
                    email: '1@123'
                },
                {
                    id: 2,
                    name: "张三02",
                    gender: 1,
                    email: '1@123'
                },
                {
                    id: 3,
                    name: "张三03",
                    gender: 2,
                    email: '1@123'
                },
                {
                    id: 4,
                    name: "张三04",
                    gender: 2,
                    email: '1@123'
                },
                {
                    id: 5,
                    name: "张三05",
                    gender: 1,
                    email: '1@123'
                },
                {
                    id: 6,
                    name: "张三06",
                    gender: 1,
                    email: '1@123'
                }
            ]
            setData(data)
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div>
            <div style={blockStyle}>
                <Row gutter={16}>
                    <Col>
                        <Input style={inputStyle} size="middle" placeholder="姓名" allowClear defaultValue="" />
                    </Col>
                    <Col>
                        <Input style={inputStyle} size="middle" placeholder="手机号" allowClear defaultValue="" />
                    </Col>
                    <Col>
                        <Select
                            size="middle"
                            style={{borderRadius: 4}}
                            placeholder="请选择用户"
                            allowClear 
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                    <Col>
                        <RangePicker style={{borderRadius: '4px'}} size="middle" showTime={false} />
                    </Col>
                    <Col 
                        style={{position: 'absolute', right: '15px'}}
                    >
                        <Button style={{borderRadius: '4px'}} type="primary" size="middle" icon={<SearchOutlined />}>
                            搜索
                        </Button>
                    </Col>
                </Row>
            </div>
            <div
                style={blockStyle}
            >
                <Row gutter={16}>
                    <Col>
                        <Button style={{borderRadius: '4px'}} type="primary" size="middle">
                            批量处理
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{borderRadius: '4px'}} type="primary" size="middle" icon={<UserAddOutlined />}>
                            添加用户
                        </Button>
                    </Col>
                </Row>
                <div style={{marginTop: 10}}>
                    <Table
                        rowSelection={{...rowSelection}}
                        columns={columns}
                        rowKey={record => record.id}
                        dataSource={data}
                        pagination={pagination}
                        loading={loading}
                        onChange={handleTableChange}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Demo1Option1