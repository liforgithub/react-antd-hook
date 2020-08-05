import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, Link } from "react-router-dom";
import { Tabs, Form, Input, Row, Col, Button, Checkbox, Alert, message } from 'antd';
import { LockTwoTone, MailTwoTone, MobileTwoTone, UserOutlined, AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import styles from './style.less'

const { TabPane } = Tabs;


const formRules = {
    username: [{ required: true, message: '请输入用户名' }],
    password: [{ required: true, message: '请输入密码' }],
    mobile: [
        {
          required: true,
          message: '请输入手机号码',
        },
        {
          pattern: /^1\d{10}$/,
          message: '手机号码格式有误',
        }
    ],
    captcha: [{ required: true, message: '请输入验证码' }]
}

const Login = () => {

    let history = useHistory();
    const [timing, setTiming] = useState(false)
    const [loginInfo, setLoginType] = useState({status: '', loginType: 'account'})
    const [tabKey, setTabKey] = useState('account')
    const [autoLogin, setAutoLogin] = useState(true);
    const [count, setCount] = useState(120)

    const [form] = Form.useForm();

    const getCaptcha = useCallback(async () => {
        form.validateFields(['mobile'])
            .then(({ mobile }) => {
                message.success(mobile + ' 获取验证码成功！验证码为：1234');
                setTiming(true)
            })
            .catch(err => {
                console.log(err)
            })
    })
    useEffect(() => {
        let interval = 0;
        if (timing) {
            interval = setInterval(() => {
                setCount(preCount => {
                    if (preCount <= 1) {
                        setTiming(false)
                        clearInterval(interval)
                        return 120
                    }

                    return preCount - 1
                })
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [timing])

    const onFinish = values => {
        history.push('/home')
        console.log(values);
      };

    return (
        <div className={styles.main}>
            <div className={styles.login}>
                <Form form={form} onFinish={onFinish}>
                    <Tabs activeKey={tabKey} onChange={e => setTabKey(e)}>
                        <TabPane tab="账户密码登录" key="account">
                            {
                                loginInfo.loginType == 'account' && loginInfo.status == 'error' && (
                                    <Alert
                                        style={{
                                            marginBottom: 24,
                                        }}
                                        message="账户或密码错误"
                                        type="error"
                                        showIcon
                                    />
                                )
                            }
                            <Form.Item name="username" rules={formRules.username}>
                                <Input size="large" prefix={<UserOutlined style={{color: '#1890ff'}} className={styles.prefixIcon} />} placeholder="请输入用户名" />
                            </Form.Item>
                            <Form.Item name="password" rules={formRules.password}>
                                <Input size="large" prefix={<LockTwoTone className={styles.prefixIcon} />} type='password' placeholder="请输入密码" />
                            </Form.Item>
                        </TabPane>
                        <TabPane tab="手机号登录" key="mobile">
                            {
                                loginInfo.loginType == 'mobile' && loginInfo.status == 'error' && (
                                    <Alert
                                        style={{
                                            marginBottom: 24,
                                        }}
                                        message="验证码错误"
                                        type="error"
                                        showIcon
                                    />
                                )
                            }
                            <Form.Item name="mobile" rules={formRules.mobile}>
                                <Input size="large" prefix={<MobileTwoTone className={styles.prefixIcon} />} placeholder="请输入手机号码" />
                            </Form.Item>
                            <Row gutter={8}>
                                <Col span={16}>
                                <Form.Item name="captcha" rules={formRules.captcha}>
                                    <Input size="large" prefix={<MailTwoTone className={styles.prefixIcon} />} placeholder="请输入验证码" />
                                </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        disabled={timing}
                                        className={styles.getCaptcha}
                                        size="large"
                                        onClick={() => getCaptcha()}
                                    >
                                        { timing ? `${count}秒` : '获取验证码'}
                                    </Button>
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                    <div>
                        <Checkbox checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)}>
                            自动登录
                        </Checkbox>
                        <a style={{float: 'right'}}>
                            忘记密码
                        </a>
                    </div>
                    <Button size="large" className={styles.submit} type="primary" htmlType="submit">登录</Button>
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