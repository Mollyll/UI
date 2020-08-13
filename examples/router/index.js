import VueRouter from 'vue-router'
import Vue from 'vue'
import Hello from '../components/hello.vue'

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hello',
            component: Hello
        },
        {
            path: '/layout',
            name: 'layout',
            component: () => import(/* webpackChunkName: "layout" */ '../docs/layout.md')
        },
        {
            path: '/button',
            name: 'button',
            component: () => import(/* webpackChunkName: "button" */ '../docs/button.md')
        },
        {
            path: '/icon',
            name: 'icon',
            component: () => import(/* webpackChunkName: "icon" */ '../docs/icon.md')
        },
        {
            path: '/link',
            name: 'link',
            component: () => import(/* webpackChunkName: "link" */ '../docs/link.md')
        },
        {
            path: '/notification',
            name: 'notification',
            component: () => import(/* webpackChunkName: "notification" */ '../docs/notification.md')
        },
        {
            path: '/input',
            name: 'input',
            component: () => import(/* webpackChunkName: "input" */ '../docs/input.md')
        }
    ]
})
