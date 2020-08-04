import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import { Tabs, Form, Input, Row, Col, Button } from 'antd';
import styles from './style.less'

const { TabPane } = Tabs;

const Register = () => {

    return (
        <div className={styles.main}>
            <Form>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="注  册" key="1">
                        <Input size="large" placeholder="请输入手机号码" />
                        <Input size="large" className={styles.other} placeholder="至少6位密码，区分大小写" />
                        <Input size="large" className={styles.other} placeholder="确认密码" />
                        <Row gutter={8} className={styles.other}>
                            <Col span={16}>
                                <Input size="large" placeholder="请输入验证码" />
                            </Col>
                            <Col span={8}>
                                <Button
                                    disabled={false}
                                    className={styles.getCaptcha}
                                    size="large"
                                >
                                    获取验证码
                                </Button>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
                <div className={styles.other}>
                    <Button size="large" className={styles.submit} type="primary">注册</Button>
                    <Link className={styles.login} to="/user/login">
                        使用已有账户登录
                    </Link>
                </div>
            </Form>
        </div>
    )
}

export default Register