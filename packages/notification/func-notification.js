import Notification from './notification.vue'

// 扩展组件，覆盖原来的组件
export default {
    extends: Notification,
    computed: {
        style () {
            return {
                position: 'fixed',
                right: '20px',
                top: `${this.verticalOffset}px`,
                zIndex: this.zIndex
            }
        }
    },
    mounted () {
        this.createTimer()
    },
    data () {
        return {
            verticalOffset: 0,
            autoClose: 3000,
            height: 0,
            zIndex: 1000
        }
    },
    methods: {
        createTimer () {
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.visible = false
                }, this.autoClose)
            }
        },
        clearTimer () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        },
        afterEnter () {
            this.height = this.$el.offsetHeight
        }
    },
    beforeDestroy () {
        this.clearTimer()
    }
}