import React, {lazy} from 'react'
import { HomeOutlined, UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import BlankLayout from '../layouts/blankLayout'
import BasicLayout from '../layouts/basicLayout'
import UserLayout from '../layouts/userLayout'

const router = [
    {
        path: '/',
        component: BlankLayout,
        children: [
            {
                path: '/user',
                component: UserLayout,
                children: [
                    {
                        path: '/user/login',
                        name: '登陆',
                        component: lazy(() => import('../pages/user/login'))
                    },
                    {
                        path: '/user/register',
                        name: '注册',
                        component: lazy(() => import('../pages/user/register'))
                    },
                    {
                        path: '/user/registerResult',
                        name: '注册结果',
                        component: lazy(() => import('../pages/user/registerResult'))
                    },
                    {
                        path: '/user',
                        redirect: '/user/login',
                        hidden: true
                    },
                ]
            },
            {
                path: '/',
                component: BasicLayout,
                children: [
                    {
                        path: '/home',
                        name: '主页',
                        icon: <HomeOutlined />,
                        component: lazy(() => import('../pages/home'))
                    },
                    {
                        path: '/demo1',
                        name: 'demo1',
                        children: [
                            {
                                path: '/demo1/option1',
                                name: 'option1',
                                component: lazy(() => import('../pages/demo1/option1'))
                            },
                            {
                                path: '/demo1/option3',
                                name: 'option3',
                                component: lazy(() => import('../pages/demo1/option3'))
                            },
                            {
                                path: '/demo1',
                                redirect: '/demo1/option1',
                                hidden: true
                            }
                        ]
                    },
                    {
                        path: '/machine',
                        name: '广告机',
                        children: [
                            {
                                path: '/machine/list',
                                name: '机器列表',
                                component: lazy(() => import('../pages/machine/list'))
                            },
                            {
                                path: '/machine',
                                redirect: '/machine/list',
                                hidden: true
                            }
                        ]
                    },
                    {
                        path: '/authority',
                        name: '权限设置',
                        icon: <SafetyCertificateOutlined />,
                        children: [
                            {
                                path: '/authority/role',
                                name: '角色管理',
                                component: lazy(() => import('../pages/authority/role'))
                            },
                            {
                                path: '/authority/role1',
                                name: '角色管理1',
                                component: lazy(() => import('../pages/authority/role1'))
                            },
                            {
                                path: '/authority/apiScope',
                                name: '接口权限',
                                component: lazy(() => import('../pages/authority/apiScope'))
                            },
                            {
                                path: '/authority',
                                redirect: '/authority/role',
                                hidden: true
                            }
                        ]
                    },
                    {
                        path: '/account',
                        name: '个人信息',
                        icon: <UserOutlined />,
                        children: [
                            {
                                path: '/account/settings',
                                name: '个人设置',
                                component: lazy(() => import('../pages/account/settings'))
                            },
                            {
                                path: '/account',
                                redirect: '/account/settings',
                                hidden: true
                            },
                        ]
                    },
                    {
                        path: '/404',
                        name: '404',
                        hidden: true,
                        component: lazy(() => import('../pages/exception/pageNotFound'))
                    },
                    { path: '/', exact: true, redirect: '/home' },
                    { path: '*', exact: true, redirect: '/404' },
                ]
            }
        ]
    }
]

export default router