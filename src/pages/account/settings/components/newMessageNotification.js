import React from 'react'
import { List, Switch } from 'antd'

const NewMessageNotification = () => {

    const switchAction = (
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          defaultChecked
        />
    );

    return (
        <List
            itemLayout="horizontal"
        >
            <List.Item actions={[switchAction]}>
                <List.Item.Meta 
                    title="账户密码"
                    description="其他用户的消息将以站内信的形式通知"
                />
            </List.Item>
            <List.Item actions={[switchAction]}>
                <List.Item.Meta 
                    title="系统消息"
                    description="系统消息将以站内信的形式通知"
                />
            </List.Item>
            <List.Item actions={[switchAction]}>
                <List.Item.Meta 
                    title="待办任务"
                    description="待办任务将以站内信的形式通知"
                />
            </List.Item>
        </List>
    )
}

export default NewMessageNotification