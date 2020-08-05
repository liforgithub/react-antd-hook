import React from 'react'
import { Tabs, Radio } from 'antd';
import styles from "./style.less"
import BasicSettings from './components/basicSettings/index'

const { TabPane } = Tabs;

const Settings = () => {
    return (
        <div className={styles.main}>
            <Tabs defaultActiveKey="basicSettings" tabPosition="left" className={styles.tab} tabBarStyle={{width: 200}} >
                <TabPane tab="基本设置" key="basicSettings">
                    <div className={styles.right}>
                        <div className={styles.title}>基本设置</div>
                        <BasicSettings />
                    </div>
                </TabPane>
                <TabPane tab="安全设置" key="securitySettings">

                </TabPane>
                <TabPane tab="账号绑定" key="accountBind">

                </TabPane>
                <TabPane tab="新消息通知" key="newMessageNotification">

                </TabPane>
            </Tabs>
        </div>
    )
}

export default Settings