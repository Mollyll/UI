export default {
    name: "MCol",
    props: {
        span: {
            type: String,
            default: 24
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== 'MRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        }
    },
    render (h) {
        let classList = [];
        const style = {};
        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }
        return h(this.tag, {
            class: [
                'm-col',
                `m-col-${this.span}`
            ],
            style
        }, this.$slots.default)
    }
}