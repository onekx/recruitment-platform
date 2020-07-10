import Vue from 'vue'
import VueRouter from 'vue-router'

import PcHome from '../page_pc/Home'
import WapHome from '../page_m/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: ''
    },
    {
        path: '/index',
        name: 'pchome',
        component: PcHome
    },
    {
        path: '/index_m',
        name: 'waphome',
        component: WapHome
    }
]

const routers = new VueRouter({
    mode: 'history',
    routes
})

export default routers