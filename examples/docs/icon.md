## Icon 图标
常用的图标。

### 使用方法
直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo 
```html
<i class="m-icon-link"></i>
<i class="m-icon-edit"></i>
<i class="m-icon-download"></i>
<m-button type="primary" icon="m-icon-search">搜索</m-button>
```
:::

### 图标集合
<ul class="icon-list clearfix">
  <li v-for="name in ['success', 'error', 'info', 'warning', 'notification', 'play', 'stop', 'alarm', 'upload', 'store', 'calendar', 'calendar-check', 'cloud-off', 'contact-us', 'flag', 'line-chart', 'mail', 'mail-unread', 'pie-chart', 'fingerprint', 'phone', 'folder', 'folder-open', 'shopping-cart', 'heart-active', 'heart','download', 'eye','eye-close','filter','filter-off','forbid','delete-fill', 'delete-line', 'reply-fill', 'reply-all-fill', 'reply-all-line', 'reply-line', 'chat-1-fill', 'chat-1-line', 'chat-2-fill', 'chat-2-line', 'alert', 'information-line', 'question-fill', 'question-line', 'search', 'mima-buxianshi', 'mima-xianshi', 'vertify-selected', 'vertify-unselected', 'generallocation', 'people-location', 'fill-down', 'fill-left', 'add', 'fill-up', 'fill-right', 'line-down', 'line-left', 'remove', 'edit', 'partake', 'link', 'me', 'home', 'refresh', 'right', 'scan', 'service', 'shoppingcart', 'shop', 'time', 'news', 'up', 'share', 'signout', 'shoucang', 'lishi', 'gonggao-miaobian', 'check', 'close', 'download-cloud', 'more-2', 'more-1', 'shield-check', 'shield-cross', 'thumb-up', 'thumb-down', 'male', 'female', 'wechat', 'weibo', 'qq']" :key="name">
    <span>
      <i :class="'m-icon-' + name"></i>
      <span class="icon-name">{{'m-icon-' + name}}</span>
    </span>
  </li>
</ul>
