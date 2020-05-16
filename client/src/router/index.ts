import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        redirect: '/direct',
    },
    {
        path: '/direct',
        name: 'Direct',
        component: () => import('@/views/Direct.vue'),
    },
]

const router = new VueRouter({
    routes
})

export default router
