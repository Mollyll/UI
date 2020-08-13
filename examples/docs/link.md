## Link 链接
常用的链接。

### 基础用法

:::demo 使用`type`、`underline`属性来定义 Link 的样式。

```html
<m-row>
  <m-link>默认按钮</m-link>
  <m-link type="primary" href="https://www.baidu.com" target="_blank">主要按钮</m-link>
  <m-link type="success">成功按钮</m-link>
  <m-link type="info">信息按钮</m-link>
  <m-link type="warning">警告按钮</m-link>
  <m-link type="danger">危险按钮</m-link>
</m-row>
<m-row>
  <m-link :underline="false">默认按钮</m-link>
  <m-link type="primary" :underline="false">主要按钮</m-link>
  <m-link type="success" :underline="false">成功按钮</m-link>
  <m-link type="info" :underline="false">信息按钮</m-link>
  <m-link type="warning" :underline="false">警告按钮</m-link>
  <m-link type="danger" :underline="false">危险按钮</m-link>
</m-row>
<m-row>
  <m-link disabled>默认按钮</m-link>
  <m-link type="primary" disabled>主要按钮</m-link>
  <m-link type="success" disabled>成功按钮</m-link>
  <m-link type="info" disabled>信息按钮</m-link>
  <m-link type="warning" disabled>警告按钮</m-link>
  <m-link type="danger" disabled>危险按钮</m-link>
</m-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
