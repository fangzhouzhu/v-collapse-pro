# v-collapse-pro

一个 vue2 折叠面板组件，提供展开收起功能，支持自定义 head

使用方式

插件式

```javascript
import VCollapsePro from "v-collapse-pro";

import "v-collapse-pro/v-collapse-pro.css";

Vue.use(VCollapsePro);
```

或者局部注册

```javascript
import { VCollapsePro } from "v-collapse-pro";
import "v-collapse-pro/v-collapse-pro.css"

export default {
  components: {
    VCollapsePro
  },
```

template 使用

```javascript
<v-collapse-pro ref="collapse" btnPosition="top-right">
  <div style="background:#198">
    <p>这是内容1111</p>
    <p>这是内容2222</p>
    <p>这是内容3333</p>
  </div>
</v-collapse-pro>
```

插槽 slot

slot="head" 自定义 head 内容

```javascript
<template>
  <div id="app">
    <v-collapse-pro ref="collapse" btnPosition="top-right">
      <template slot="head" slot-scope="{foldStatus}">
        <span @click="handleChange">切换</span>
        <div>
          <span v-if="foldStatus">这是收起</span>
          <span v-else>这是展开</span>
        </div>
      </template>
      <div style="background:#198">
        <p>哈哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈哈</p>
      </div>
    </v-collapse-pro>
  </div>
</template>

<script>
import { VCollapsePro } from "v-collapse-pro";
export default {
  data() {
    return {
      foldStatus: false
    }
  },
  components: {
    VCollapsePro
  },
  methods: {
    handleChange() {
      this.foldStatus = !this.foldStatus
      this.$refs.collapse.updateFoldStatus(this.foldStatus)
    }
  },
}
</script>

<style></style>


```

[展开视图](https://fangzhouzhu.github.io/v-collapse-pro/flod.jpg)![在这里插入图片描述](https://fangzhouzhu.github.io/v-collapse-pro/flod.jpg)

[收起视图](https://fangzhouzhu.github.io/v-collapse-pro/unflod.jpg)![在这里插入图片描述](https://fangzhouzhu.github.io/v-collapse-pro/unflod.jpg)

Attributes
| 属性值 | 默认值 | 说明 |
| ----------- | -------- | ------------------------------------------------------------------------------------------------ |
| fold | false | 初始折叠状态 ,默认展开|
| unfoldText | 展开 | 展开状态文字 |
| foldText | 收起 | 收起状态文字 |
| btnPosition | top-left | 按钮位置可选（top-left;top-center;top-right;bottom-left;bottom-center;bottom-right），默认左上角 |

Methods
| 方法名称 | 参数 | 说明 |
| ---------------- | ---------- | ------------ |
| updateFoldStatus | true/false | 改变折叠状态 |

Events
| 事件名称 | 值 | 说明 |
| ---------------- | ---------- | ------------ |
| updateFoldStatus | true/false | 改变折叠状态 |

Slots

| 名称 | 说明                                                                 |
| ---- | -------------------------------------------------------------------- |
| head | 插槽自定义 head 内容 slot-scope="{foldStatus}" foldStatus:true/false |
