import React, { useState, useEffect } from 'react'
import { Tree, Divider, Tabs, Space, Card, Button, Input, Table } from 'antd'
import { SearchOutlined, PlusOutlined, SwitcherOutlined } from '@ant-design/icons';
import styles from './style.less'

const inputStyle = { width: 160, borderRadius: 4 }
const borderRadius = { borderRadius: 4 }

const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
];

const columns = [
    {
        title: '租户ID',
        dataIndex: 'id',
        align: 'center',
        // sorter: true,
        width: '200px',
    },
    {
        title: '角色名称',
        dataIndex: 'name',
        align: 'center',
        // sorter: true,
        width: '200px',
    },
    {
        title: '角色别名',
        dataIndex: 'nickname',
        align: 'center',
        
    },
    {
        title: '操作',
        align: 'center',
        key: 'action',
        render: (text, record) => (
            <Space>
                <Button style={{borderRadius: '4px'}} type="primary" size="middle">查看详情</Button>
                <Button style={{borderRadius: '4px'}} type="ghost" size="middle">修改</Button>
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
        disabled: record.name === '超级管理员', 
        name: record.name,
    }),
};

const Role1 = () => {

    const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 200
    })
    const [loading, setLoading] = useState(false)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            let data = [
                {
                    id: '000000',
                    name: '超级管理员',
                    nickname: 'superAdministrator'
                },
                {
                    id: '000001',
                    name: '系统管理员',
                    nickname: 'administrator'
                },
                {
                    id: '000002',
                    name: '屏主',
                    nickname: 'machineManager'
                },
                {
                    id: '000003',
                    name: '员工',
                    nickname: 'employer'
                }
            ]
            setTableData(data)
            setLoading(false)
        }, 2000)
    }, [])
  
    const onExpand = expandedKeys => {
      console.log('onExpand', expandedKeys); 
  
      setExpandedKeys(expandedKeys);
      setAutoExpandParent(false);
    };
  
    const onCheck = checkedKeys => {
      console.log('onCheck', checkedKeys);
      setCheckedKeys(checkedKeys);
    };
  
    const onSelect = (selectedKeys, info) => {
      console.log('onSelect', info);
      setSelectedKeys(selectedKeys);
    };

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.header}>
                    <span>超级管理员</span>
                    <Button type="primary" size="small">更新</Button>
                </div>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="菜单权限" key="1">
                        <Tree
                            checkable
                            onExpand={onExpand}
                            expandedKeys={expandedKeys}
                            autoExpandParent={autoExpandParent}
                            onCheck={onCheck}
                            checkedKeys={checkedKeys}
                            onSelect={onSelect}
                            selectedKeys={selectedKeys}
                            treeData={treeData}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="数据权限" key="2">
                        <Tree
                            checkable
                            onExpand={onExpand}
                            expandedKeys={expandedKeys}
                            autoExpandParent={autoExpandParent}
                            onCheck={onCheck}
                            checkedKeys={checkedKeys}
                            onSelect={onSelect}
                            selectedKeys={selectedKeys}
                            treeData={treeData}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="接口权限" key="3">
                        <Tree
                            checkable
                            onExpand={onExpand}
                            expandedKeys={expandedKeys}
                            autoExpandParent={autoExpandParent}
                            onCheck={onCheck}
                            checkedKeys={checkedKeys}
                            onSelect={onSelect}
                            selectedKeys={selectedKeys}
                            treeData={treeData}
                        />
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <Divider type="vertical" style={{height: '100%'}} />
            <div className={styles.right}>
                <Card title="数据检索" extra={
                    <Space>
                        <Button style={borderRadius} type="primary" size="middle" icon={<SearchOutlined />}>
                                搜索
                        </Button>
                    </Space>
                }>
                    <Space>
                        <Input style={inputStyle} size="middle" placeholder="姓名" allowClear defaultValue="" />
                        <Input style={inputStyle} size="middle" placeholder="手机号" allowClear defaultValue="" />
                    </Space>
                </Card>
                <Space style={{marginTop: 12}}>
                    <Button style={borderRadius} type="primary" size="middle" icon={<SwitcherOutlined />}>
                        批量处理
                    </Button>
                    <Button style={borderRadius} type="primary" size="middle" icon={<PlusOutlined />}>
                        新增角色
                    </Button>
                </Space>
                <Table
                    style={{marginTop: 12}}
                    rowSelection={{...rowSelection}}
                    columns={columns}
                    rowKey={record => record.id}
                    dataSource={tableData}
                    pagination={pagination}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default Role1