import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style.less'

const RegisterResult = () => {
    return (
        <Result
            className={styles.registerResult}
            status="success"
            title="你的账户：{email} 注册成功"
            extra={[
                <Link to="/home">
                    <Button type="primary" key="console">去首页</Button>
                </Link>
            ]}
        />
    )
}

export default RegisterResult