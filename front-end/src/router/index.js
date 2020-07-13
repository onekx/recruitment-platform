import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Home',
        component: Home
    }
]

const routers = new VueRouter({
    mode: 'history',
    routes
})

export default routers