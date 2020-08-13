## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<m-row>
  <m-button>默认按钮</m-button>
  <m-button type="primary">主要按钮</m-button>
  <m-button type="success">成功按钮</m-button>
  <m-button type="info">信息按钮</m-button>
  <m-button type="warning">警告按钮</m-button>
  <m-button type="danger">危险按钮</m-button>
</m-row>
<m-row>
  <m-button plain>朴素按钮</m-button>
  <m-button type="primary" plain>主要按钮</m-button>
  <m-button type="success" plain>成功按钮</m-button>
  <m-button type="info" plain>信息按钮</m-button>
  <m-button type="warning" plain>警告按钮</m-button>
  <m-button type="danger" plain>危险按钮</m-button>
</m-row>
<m-row>
  <m-button round>圆角按钮</m-button>
  <m-button type="primary" round>主要按钮</m-button>
  <m-button type="success" round>成功按钮</m-button>
  <m-button type="info" round>信息按钮</m-button>
  <m-button type="warning" round>警告按钮</m-button>
  <m-button type="danger" round>危险按钮</m-button>
</m-row>
```
:::

### 禁用

禁用按钮。

:::demo

```html
<m-row>
  <m-button disabled>默认按钮</m-button>
  <m-button type="primary" disabled>主要按钮</m-button>
  <m-button type="success" disabled>成功按钮</m-button>
  <m-button type="info" disabled>信息按钮</m-button>
  <m-button type="warning" disabled>警告按钮</m-button>
  <m-button type="danger" disabled>危险按钮</m-button>
</m-row>
```
:::

### 图表按钮

带Icon的按钮。

:::demo

```html
<m-row>
  <m-button type="primary" icon="m-icon-search">搜索</m-button>
  <m-button type="success" icon="m-icon-edit">编辑</m-button>
  <m-button type="success" icon="m-icon-download" align="right">下载</m-button>
</m-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| align  | icon位置 | string   |  left / right  |  left  |
