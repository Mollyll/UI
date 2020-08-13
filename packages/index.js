/**
 * @author molly
 * Date: 19/03/12
 */
import MButton from './button/index.js';
import MRow from './row/index.js';
import MCol from './col/index.js';
import MLink from './link/index.js';
import MIcon from './icon/index.js';
import MInput from './input/index.js';
import MetaInfo from './meta-info/index.js';
import MNotification from './notification/index.js';
import notify from './notification/function.js'

const components = [
    MButton,
    MRow,
    MCol,
    MIcon,
    MLink,
    MNotification,
    MInput
]

const install = function(Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
    MetaInfo.install(Vue);
    Vue.prototype.$notify = notify;
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    MButton,
    MRow,
    MCol,
    MIcon,
    MLink,
    MNotification,
    MInput
}