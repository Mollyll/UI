import Vue from 'vue';
import axios from 'axios';

import app from './app.vue';
import router from './router/index';
import demoBlock from './components/demo-block.vue';
import hljs from 'highlight.js';

import MUI from '../packages/index.js'
import './assets/style/global.less'
import '../packages/theme-default/lib/index.less'

Vue.use(MUI);
Vue.prototype.$axios = axios;
Vue.component('demo-block', demoBlock);

router.afterEach(route => {
    Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
    });
});

new Vue({
    el: '#root',
    router,
    render: (h) => h(app)
})