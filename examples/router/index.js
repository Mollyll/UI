import VueRouter from 'vue-router'
import Vue from 'vue'
import Hello from '../components/hello.vue'
import Layout from '../docs/layout.md'
import Button from '../docs/button.md'
import Icon from '../docs/icon.md'
import Link from '../docs/link.md'
import Notification from '../docs/notification.md'
import Input from '../docs/input.md'

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
            component: Layout
        },
        {
            path: '/button',
            name: 'button',
            component: Button
        },
        {
            path: '/icon',
            name: 'icon',
            component: Icon
        },
        {
            path: '/link',
            name: 'link',
            component: Link
        },
        {
            path: '/notification',
            name: 'notification',
            component: Notification
        },
        {
            path: '/input',
            name: 'input',
            component: Input
        }
    ]
})
