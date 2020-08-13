## Input 输入框
常用的输入框。

### 基础用法

:::demo 

```html
<m-row>
  <m-input></m-input>
</m-row>
```
:::

### 尺寸

:::demo 

```html
<m-row>
  <m-col span="6">
    <m-input suffix-icon="m-icon-calendar"></m-input>
  </m-col>
  <m-col span="6">
    <m-input size="medium" suffix-icon="m-icon-calendar"></m-input>
  </m-col>
  <m-col span="6">
    <m-input size="small" suffix-icon="m-icon-calendar"></m-input>
  </m-col>
  <m-col span="6">
    <m-input size="mini" suffix-icon="m-icon-calendar"></m-input>
  </m-col>
</m-row>
```
:::
### 禁用
:::demo
```html
<m-row>
  <m-input :disabled="true"></m-input>
</m-row>
```
:::

### 可清除
:::demo
```html
<m-row>
  <m-input v-model="input" clearable></m-input>
</m-row>
<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 带Icon
:::demo
```html
<m-row>
  <m-col span="12">
    <m-input suffix-icon="m-icon-search"></m-input>
  </m-col>
  <m-col span="12">
    <m-input prefix-icon="m-icon-search"></m-input>
  </m-col>
</m-row>
<m-row>
  <m-col span="12">
    <m-input>
      <i slot="suffix" class="m__input--icon m-icon-search"></i>
    </m-input>
  </m-col>
  <m-col span="12">
    <m-input>
      <i slot="prefix" class="m__input--icon m-icon-search"></i>
    </m-input>
  </m-col>
</m-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| clearable  | 是否可清除 | boolean   |  truer / false  |  false  |
| suffixIcon  | 后置icon | string   |  -  |  -  |
| prefixIcon  | 前置icon | string   |  -  |  -  |

### Slot
| 占位符name      | 说明    |
|---------- |-------- |
|  suffix  |  输入框后置内容  |
|  prefix  |  输入框前置内容  |

### Attributes
| 事件名称      | 说明    | 回调参数   |
|---------- |-------- |---------- |
|  blur  |  失去焦点时触发  |  (event: Event)  |
|  focus  |  聚焦时触发  |  (event: Event)  |
|  input  |  输入内容时触发  |  (value: string | number)  |
|  change  |  值发生变化时触发  |  (value: string | number)  |
|  clear  |  清除内容时触发  |  -  |

