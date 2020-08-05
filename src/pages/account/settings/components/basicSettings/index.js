import React from 'react'
import styles from './style.less'
import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import GeographicView from './geographicView'

const AvatarView = ({ avatar }) => (
    <>
      {/* <div className={styles.avatar_title}></div> */}
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload showUploadList={false}>
        <div className={styles.button_view}>
          <Button>
                <UploadOutlined />
                更换头像
          </Button>
        </div>
      </Upload>
    </>
);


const BasicSettings = () => {


    

    const handleFinish = values => {

    }

    return (
        <div className={styles.baseView}>
            <div className={styles.left}>
            <Form
                layout="vertical"
                onFinish={handleFinish}
                hideRequiredMark
                style={{width:300}}
            >
                <Form.Item
                    name="email"
                    label="邮箱"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的邮箱!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="昵称"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的昵称!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="profile"
                    label="个人简介"
                >
                    <Input.TextArea placeholder="个人简介" rows={4} />
                </Form.Item>
                <Form.Item
                    name="geographic"
                    label="所在省市"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的所在省市!"
                        }
                    ]}
                >
                    <GeographicView />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="街道地址"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的街道地址!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="联系电话"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的联系电话!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">更新基本信息</Button>
                </Form.Item>
            </Form>
            </div>
            <div className={styles.right}>
                <AvatarView avatar="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            </div>
        </div>
    )
}

export default BasicSettings