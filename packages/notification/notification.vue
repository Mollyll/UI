<template>
    <transition name="m-notification-fade" @after-leave="afterLeave" @after-enter="afterEnter">
        <div :class='[
            "m__notification"
        ]' :style="style" v-show="visible" @mouseenter="clearTimer" @mouseleave="createTimer">
            <template v-if="!!type">
                <i :class="['m__notification--icon', 'm__notification--icon-' + type, 'm-icon-' + type]"></i>
            </template>
            <div :class="['m__notification--box', hasIcon]">
                <div class="m__notification--title">
                    <span class="content">{{title}}</span>
                </div>
                <div class="m__notification--content">
                    <p>{{ message }}</p>
                </div>
            </div>
            <div class="m__notification--close">
                <a href="" class="btn" @click.stop.prevent="handleClose"><i class="m-icon-close"></i></a>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: "MNotification",
        props: {
            type: {
                type: String
            },
            title: {
                type: String
            },
            message: {
                type: String
            },
            btn: {
                type: String,
                default: "关闭"
            }
        },
        data() {
            return {
                visible: false,
                verticalOffset: 0,
                autoClose: 3000,
                height: 0,
                zIndex: 1000,
                opacity: 1
            }
        },
        computed: {
            style() {
                return {
                    position: 'fixed',
                    right: '20px',
                    top: `${this.verticalOffset}px`,
                    zIndex: this.zIndex,
                    opacity: this.opacity
                }
            },
            hasIcon() {
                return this.type ? 'is-with-icon' : ''
            }
        },
        mounted() {
            this.createTimer()
        },
        methods: {
            handleClose(e) {
                this.opacity = 0;
                this.visible = false;
                this.$emit('close');
            },
            afterLeave() {
                this.$emit('closed');
            },
            afterEnter () {
                this.height = this.$el.offsetHeight
            },
            clearTimer() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
            },
            createTimer() {
                if (this.autoClose) {
                    this.timer = setTimeout(() => {
                        this.visible = false
                    }, this.autoClose)
                }
            }
        },
        beforeDestroy () {
            this.clearTimer()
        }
    }
</script>