import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import { Tabs, Form, Input, Row, Col, Button, Checkbox } from 'antd';
import { LockTwoTone, MailTwoTone, MobileTwoTone, UserOutlined, AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import styles from './style.less'

const { TabPane } = Tabs;

const Login = () => {

    let history = useHistory();

    const [autoLogin, setAutoLogin] = useState(true);

    return (
        <div className={styles.main}>
            <div className={styles.login}>
                <Form>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="账户密码登录" key="1">
                            <Input size="large" prefix={<UserOutlined style={{color: '#1890ff'}} className={styles.prefixIcon} />} placeholder="请输入用户名" />
                            <Input size="large" className={styles.other} prefix={<LockTwoTone className={styles.prefixIcon} />} type='password' placeholder="请输入密码" />
                        </TabPane>
                        <TabPane tab="手机号登录" key="2">
                            <Input size="large" prefix={<MobileTwoTone className={styles.prefixIcon} />} placeholder="请输入手机号码" />
                            <Row gutter={8} className={styles.other}>
                                <Col span={16}>
                                    <Input size="large" prefix={<MailTwoTone className={styles.prefixIcon} />} placeholder="请输入验证码" />
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
                    <div style={{marginTop: 24}}>
                        <Checkbox checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)}>
                            自动登录
                        </Checkbox>
                        <a style={{float: 'right'}}>
                            忘记密码
                        </a>
                    </div>
                    <Button size="large" className={styles.submit} type="primary">登录</Button>
                    <div className={styles.other}>
                        其他登录方式
                        <AlipayCircleOutlined className={styles.icon} />
                        <TaobaoCircleOutlined className={styles.icon} />
                        <WeiboCircleOutlined className={styles.icon} />
                        <Link className={styles.register} to="/user/register">
                            注册账户
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login