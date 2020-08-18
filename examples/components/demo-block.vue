<template>
  <div
    class="demo-block"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default[0].children">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script type="text/babel">
import { stripScript, stripStyle, stripTemplate } from "../util";

export default {
  data() {
    return {
      jsfiddle: {
        script: "",
        html: "",
        style: ""
      },
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    };
  },

  methods: {
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
      if (!!this.fixedControl) {
        this.$refs.control.style.width = this.$refs.control.parentNode.offsetWidth - 2 + 'px';
      }
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0";
    },

    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    }
  },

  computed: {
    langConfig() {
      return {
        "hide-text": "隐藏代码",
        "show-text": "显示代码",
        "button-text": "在线运行",
        "tooltip-text": "前往 jsfiddle.net 运行此示例"
      };
    },

    blockClass() {
      return `demo-${this.$router.currentRoute.path.split("/").pop()}`;
    },

    iconClass() {
      return this.isExpanded ? "m-icon-fill-up" : "m-icon-fill-down";
    },

    controlText() {
      return this.isExpanded
        ? this.langConfig["hide-text"]
        : this.langConfig["show-text"];
    },

    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName("description").length > 0) {
        return (
          this.$el.getElementsByClassName("description")[0].clientHeight +
          this.$el.getElementsByClassName("highlight")[0].clientHeight +
          20
        );
      }
      return this.$el.getElementsByClassName("highlight")[0].clientHeight;
    }
  },

  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      
      setTimeout(() => {
        this.scrollParent = document.querySelector(
          ".page-container_scroll"
        );
        
        this.scrollParent &&
          this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    }
  },

  created() {
    /* const highlight = this.$slots.highlight;
    if (highlight && highlight[0]) {
      let code = "";
      let cur = highlight[0];
      if (cur.tag === "pre" && cur.children && cur.children[0]) {
        cur = cur.children[0];
        if (cur.tag === "code") {
          code = cur.children[0].text;
        }
      }
      if (code) {
        this.jsfiddle.html = stripTemplate(code);
        this.jsfiddle.script = stripScript(code);
        this.jsfiddle.style = stripStyle(code);
      }
    } */
  },

  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName("highlight")[0];
      if (this.$el.getElementsByClassName("description").length === 0) {
        highlight.style.width = "100%";
        highlight.borderRight = "none";
      }
    });
  },

  beforeDestroy() {
    this.removeScrollHandler();
  }
};
</script>

<style lang="less">
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    overflow: hidden;
    height: 0;
    border-top: solid 1px #eaeefb;
    transition: height 0.2s;
    background-color: #000;
  }

  .description {
    box-sizing: border-box;
    margin: 10px;
    padding: 20px;
    line-height: 22px;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    word-break: break-word;
    background-color: #2f2f2a;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      display: inline-block;
      height: 18px;
      margin: 0 4px;
      padding: 1px 5px;
      line-height: 18px;
      font-size: 12px;
      color: #fff;
      background-color: #000;
      border-radius: 3px;
    }
  }

  .highlight {
    pre {
      margin: 0;
    }

    code.hljs {
      padding: 18px 24px;
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
      background: #000;
      color: #fff;

      &::before {
        content: none;
      }
    }
    .hljs {
      padding: 0;
    }
    .hljs-name {
      color: #f30f57;
    }

    .hljs-attr {
      color: #afe805;
    }

    .hljs-string {
      color: #f9ec44;
    }

    .hljs-tag {
      color: #fff;
    }
  }

  .demo-block-control {
    position: relative;
    height: 44px;
    margin-top: -1px;
    box-sizing: border-box;
    border-top: solid 1px #eaeefb;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    color: #259af7;
    background-color: #fff;
    cursor: pointer;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      display: inline-block;
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      transform: translateX(-30px);
    }

    &:hover {
      color: #259af7;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      position: absolute;
      top: 0;
      right: 0;
      padding-left: 5px;
      padding-right: 25px;
      line-height: 26px;
      font-size: 14px;
    }
  }
}
</style>
