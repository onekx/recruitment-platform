import Vue from 'vue'
import VueRouter from 'vue-router'

import PcHome from '../pages/pc/Home'
import WapHome from '../pages/wap/Home'

Vue.use(VueRouter)

const routes = [
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