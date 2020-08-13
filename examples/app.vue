<template>
  <div class="page-wrapper">
    <h1 class="header">M-UI</h1>
    <div class="page-container_scroll">
      <div class="page-container clearfix">
        <div class="container-left">
          <ul class="nav-box">
            <li>
              <router-link to="/">介绍</router-link>
            </li>
            <li>
              <router-link to="/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/layout">Layout 布局</router-link>
            </li>
            <li>
              <router-link to="/icon">Icon 图标</router-link>
            </li>
            <li>
              <router-link to="/link">Link 链接</router-link>
            </li>
            <li>
              <router-link to="/notification">Notification 通知</router-link>
            </li>
            <li>
              <router-link to="/input">Input 输入框</router-link>
            </li>
          </ul>
        </div>
        <div class="container-right">
          <router-view></router-view>
          <div class="back-to-top" @click="backToTop">
            <i class="m-icon-fill-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from "throttle-debounce";
export default {
  name: "app",
  data() {
    return {
      componentScrollBox: null,
      throttledScrollHandler: null,
      showBackToTop: null,
      showHeader: true,
      scrollTop: 0,
    };
  },
  methods: {
    toButton() {
      this.$router.push("/button");
    },
    handleScroll() {
      const scrollTop = this.componentScrollBox.scrollTop;
      this.showBackToTop = scrollTop >= 0.5 * document.body.clientHeight;
      if (this.showHeader !== this.scrollTop > scrollTop) {
        this.showHeader = this.scrollTop > scrollTop;
      }
      if (scrollTop === 0) {
        this.showHeader = true;
      }
      this.scrollTop = scrollTop;
    },
    backToTop() {
      var $scroll = document.querySelector('.page-container_scroll');
      let top = $scroll.scrollTop;
      let step = 20;
      let st = setInterval(() => {
        if (top - step >= 0 ) {
          top -= step;
          $scroll.scrollTop = top;
        } else {
          $scroll.scrollTop = 0;
          clearInterval(st);
        }
      }, 10)
    }
  },
  mounted() {
    this.componentScrollBar = this.$refs.componentScrollBar;
    this.componentScrollBox = document.querySelector(
      ".page-container_scroll"
    );
    this.throttledScrollHandler = throttle(300, this.handleScroll);
    this.componentScrollBox.addEventListener(
      "scroll",
      this.throttledScrollHandler
    );
  }
};
</script>
<style lang="less">
.container-left {
  position: fixed;
  width: 240px;
  height: calc(100% - 65px);
}
.container-right {
  width: calc(100% - 300px);
  padding: 40px 40px 40px 260px;
}
</style>