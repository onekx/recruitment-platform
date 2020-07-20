import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Home',
        component: () => import('../pages/Home')
    },
    {
        path: '/message',
        name: 'Message',
        component: () => import('../pages/Message')
    },
    {
        path: '/resume',
        name: 'Resume',
        component: () => import('../pages/Resume')
    },
    {
        path: '/recruitment',
        name: 'Recruitment',
        component: () => import('../pages/Recruitment')
    },
    {
        path: '/employee',
        name: 'Employee',
        component: () => import('../pages/Employee')
    },
    {
        path: '/employer',
        name: 'Employer',
        component: () => import('../pages/Employer')
    },
    {
        path: '/job_detail',
        name: 'JobDetail',
        component: () => import('../pages/JobDetail')
    }
]

const routers = new VueRouter({
    mode: 'history',
    routes
})

export default routers