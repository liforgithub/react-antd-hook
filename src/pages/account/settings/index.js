import React from 'react'
import { Tabs, Radio } from 'antd';
import styles from "./style.less"
import BasicSettings from './components/basicSettings/index'
import SecuritySettings from './components/securitySettings'
import NewMessageNotification from './components/newMessageNotification'

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
                    <div className={styles.right}>
                        <div className={styles.title}>安全设置</div>
                        <SecuritySettings />
                    </div>
                </TabPane>
                <TabPane tab="新消息通知" key="newMessageNotification">
                    <div className={styles.right}>
                        <div className={styles.title}>新消息通知</div>
                        <NewMessageNotification />
                    </div>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Settings