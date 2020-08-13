<template>
  <button
    @click="$emit('click')"
    class="m__button"
    :disabled="disabled"
    :class="[
    'm__button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'm__button--size-'+size
    ]"
  >
    <i v-if="icon !== '' && align == 'left'" :class="icon"></i> 
    <span><slot></slot></span>
    <i v-if="icon !== '' && align == 'right'" :class="icon"></i> 
  </button>
</template>
<script>
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean,
    align: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      msg: "button"
    };
  }
};
</script>
