<template>
    <div 
        :class="[
            'm__input', 
            size ? 'm__input--'+size : '', 
            suffixIcon || $slots.suffix || showClear ? 'm__input--suffix' : '', 
            prefixIcon || $slots.prefix ? 'm__input--prefix' : '',
            disabled ? 'is-disabled' : ''
        ]"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <span 
            class="m__input__prefix"
            v-if="prefixIcon || $slots.prefix"
        >
            <span class="m__input--prefix-inner">
                <slot name="prefix"></slot>
                <i :class="['m__input--icon', prefixIcon]"></i>
            </span>
        </span>
        <input 
            type="text" 
            class="m__input--inner" 
            :placeholder="placeholder" 
            :disabled="disabled" 
            v-bind="$attrs"
            :value="nativeInputValue"
            ref="input"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
        >
        <span 
            class="m__input__suffix"
            v-if="suffixIcon || $slots.suffix || showClear"
        >
            <span class="m__input--suffix-inner">
                <template v-if="!showClear">
                    <slot name="suffix"></slot>
                    <i :class="['m__input--icon', suffixIcon]"></i>
                </template>
                <template v-else>
                    <i 
                    class="m__input--icon m-icon-close m__input--clear"
                    @click="clear"
                ></i>
                </template>
            </span>
        </span>
    </div>
</template>
<script>
export default {
    name: "MInput",
    props: {
        size: String, // mini, small, midium
        placeholder: {
            type: String,
            default: "请输入内容"
        },
        suffixIcon: String,
        prefixIcon: String,
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data () {
        return {
            hovering: false,
            focused: false
        }
    },
    computed: {
        showClear() {
            return this.clearable && this.nativeInputValue && (this.hovering || this.focused);
        },
        nativeInputValue () {
            return this.value === null || this.value === undefined ? '' : this.value;
        }
    },
    watch: {
        value(val) {

        }
    },
    methods: {
        handleInput(event) {
            if (event.target.value === this.nativeInputValue) return;
            this.$emit('input', event.target.value);
            this.$nextTick(() => {
                let input = this.getInput();
                // input.value = this.value;
                this.value = input.value;
            });
        },
        handleFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        handleBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        handleChange(event) {
            this.$emit('change', event.target.value);
        },
        getInput() {
            return this.$refs.input || this.$refs.textarea;
        },
        clear() {
            this.$emit('input', '');
            this.$emit('change', '');
            this.$emit('clear');
        }
    },
    mounted() {
    }
}
</script>