import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import { Tabs, Form, Input, Row, Col, Button, Popover, Progress } from 'antd';
import styles from './style.less'

const { TabPane } = Tabs;

const formRules = {
    password: [{ required: true, message: '请输入密码' }],
    mobile: [
        {
          required: true,
          message: '是那个输入手机号码',
        },
        {
          pattern: /^1\d{10}$/,
          message: '手机号码格式有误',
        }
    ],
    captcha: [{ required: true, message: '请输入验证码' }]
}

const Register = () => {

    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [popover, setPopover] = useState(false);
    const confirmDirty = false;

    const passwordStatusMap = {
        ok: (
          <div className={styles.success}>
            强度：强
          </div>
        ),
        pass: (
          <div className={styles.warning}>
            强度：中
          </div>
        ),
        poor: (
          <div className={styles.error}>
            强度：太短
          </div>
        ),
    };

    const checkPassword = (_, value) => {
        const promise = Promise; // 没有值的情况
    
        if (!value) {
            setVisible(!!value);
            return promise.reject("请输入密码！");
        } // 有值的情况
    
        if (!visible) {
            setVisible(!!value);
        }
    
        setPopover(!popover);
    
        if (value.length < 6) {
            return promise.reject('');
        }
    
        if (value && confirmDirty) {
          form.validateFields(['confirm']);
        }
    
        return promise.resolve();
    };

    const passwordProgressMap = {
        ok: 'success',
        pass: 'normal',
        poor: 'exception',
    };

    const getPasswordStatus = () => {
        const value = form.getFieldValue('password');
    
        if (value && value.length > 9) {
          return 'ok';
        }
    
        if (value && value.length > 5) {
          return 'pass';
        }
    
        return 'poor';
      };

    const renderPasswordProgress = () => {
        const value = form.getFieldValue('password');
        const passwordStatus = getPasswordStatus();
        return value && value.length ? (
            <div className={styles[`progress-${passwordStatus}`]}>
            <Progress
                status={passwordProgressMap[passwordStatus]}
                className={styles.progress}
                strokeWidth={6}
                percent={value.length * 10 > 100 ? 100 : value.length * 10}
                showInfo={false}
            />
            </div>
        ) : null;
    };

    const checkConfirm = (_, value) => {
        const promise = Promise;
    
        if (value && value !== form.getFieldValue('password')) {
          return promise.reject('两次输入的密码不匹配!');
        }
    
        return promise.resolve();
    };

    const onSubmit = values => {
        console.log(values)
    }

    return (
        <div className={styles.main}>
            <Form form={form} onFinish={onSubmit}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="注  册" key="1">
                        <Form.Item name="mobile" rules={formRules.mobile}>
                            <Input size="large" placeholder="请输入手机号码" />
                        </Form.Item>
                        <Popover
                            content={
                                visible && (
                                    <div
                                        style={{
                                            padding: '4px 0',
                                        }}
                                    >
                                        {passwordStatusMap[getPasswordStatus()]}
                                        {renderPasswordProgress()}
                                        <div
                                            style={{
                                                marginTop: 10,
                                            }}
                                        >
                                            请至少输入 6 个字符。请不要使用容易被猜到的密码。
                                        </div>
                                    </div>
                                )
                            }
                            overlayStyle={{
                                width: 240,
                            }}
                            placement="right"
                            visible={visible}
                        >
                            <Form.Item 
                                name="password"
                                className={
                                    form.getFieldValue('password') &&
                                    form.getFieldValue('password').length > 0 &&
                                    styles.password
                                  }
                                rules={[
                                    {
                                      validator: checkPassword,
                                    },
                                ]}
                            >
                                <Input size="large" type="password" placeholder="至少6位密码，区分大小写" />
                            </Form.Item> 
                        </Popover>        
                        <Form.Item 
                            name="confirm" 
                            rules={
                                [
                                    { required: true, message: '请输入密码' },
                                    {
                                        validator: checkConfirm
                                    }  
                                ]
                            }
                        >
                            <Input size="large" type="password" placeholder="确认密码" />
                        </Form.Item>
                        <Row gutter={8}>
                            <Col span={16}>
                                <Form.Item name="captcha" rules={formRules.captcha}>
                                    <Input size="large" placeholder="请输入验证码" />
                                </Form.Item>
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
                <Form.Item>
                    <Button size="large" className={styles.submit} type="primary" htmlType="submit">注册</Button>
                    <Link className={styles.login} to="/user/login">
                        使用已有账户登录
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register