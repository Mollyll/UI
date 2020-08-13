## Notification 消息通知
常用的消息通知。

### 基础用法

:::demo 使用属性来定义 Link 的样式。

```html
<m-row>
  <m-button plain @click="handleClick1">可自动关闭</m-button>
  <m-button plain @click="handleClick2">不会自动关闭</m-button>
</m-row>
<script>
  export default {
    data () {
      return {
        visible: true
      }
    },
    methods: {
      handleClick1 () {
        this.$notify({
          title: "提示",
          message: "成功！"
        })
      },
      handleClick2 () {
        this.$notify({
          title: "提示",
          message: "成功！",
          autoClose: false,
          close: function () {}
        })
      }
    }
  }
</script>
```
:::
### 通知类型
:::demo 

```html
<m-row>
  <m-button plain @click="handleClick('success', '成功！')">成功</m-button>
  <m-button plain @click="handleClick('error', '失败！')">失败</m-button>
  <m-button plain @click="handleClick('info', '提示！')">提示</m-button>
  <m-button plain @click="handleClick('warning', '告警！')">告警</m-button>
</m-row>
<script>
  export default {
    methods: {
      handleClick (type, message) {
        this.$notify({
          title: "提示",
          message: message,
          autoClose: false,
          type: type
        })
      },
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
