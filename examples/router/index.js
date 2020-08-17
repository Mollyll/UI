import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes.js'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});
router.beforeEach((to, from, next) => {
    next();
})

export default router