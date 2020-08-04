import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'antd'

const Login = () => {

    let history = useHistory();


    return (
        <div>
            login
            <Button type="primary" onClick={() => history.push('/home')}>跳转至home</Button>
        </div>
    )
}

export default Login