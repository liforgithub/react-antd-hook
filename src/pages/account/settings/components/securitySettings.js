import React from 'react'
import { List } from 'antd'

const SecuritySettings = () => {
    return (
        <List
            itemLayout="horizontal"
        >
            <List.Item actions={[<a>设置</a>]}>
                <List.Item.Meta 
                    title="账户密码"
                    description="当前密码强度：强"
                />
            </List.Item>
            <List.Item actions={[<a>设置</a>]}>
                <List.Item.Meta 
                    title="密保手机"
                    description="已绑定手机：138****8293"
                />
            </List.Item>
        </List>
    )
}

export default SecuritySettings