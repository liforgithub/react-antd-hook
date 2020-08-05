import {lazy} from 'react'
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
                        redirect: '/user/login'
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
                        component: lazy(() => import('../pages/home'))
                    },
                    {
                        path: '/demo1',
                        name: 'demo1',
                        children: [
                            {
                                path: '/demo1',
                                redirect: '/demo1/option1',
                                hidden: true
                            },
                            {
                                path: '/demo1/option1',
                                name: 'option1',
                                component: lazy(() => import('../pages/demo1/option1'))
                            },
                            {
                                path: '/demo1/option3',
                                name: 'option3',
                                component: lazy(() => import('../pages/demo1/option3'))
                            }
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