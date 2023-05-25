# vue-collapse-pro

一个 vue 组件，折叠面板，提供展开收起功能

使用方式

```bash
import vCollapsePro from "v-collapse-pro";

import "v-collapse-pro/v-collapse-pro.css";

Vue.use(vCollapsePro)
```

[展开视图](https://fangzhouzhu.github.io/v-collapse-pro/flod.jpg)![在这里插入图片描述](https://fangzhouzhu.github.io/v-collapse-pro/flod.jpg)

[收起视图](https://fangzhouzhu.github.io/v-collapse-pro/unflod.jpg)![在这里插入图片描述](https://fangzhouzhu.github.io/v-collapse-pro/unflod.jpg)
| props | 默认值 | 备注 |
| ----------- | -------- | ------------------------------------------------------------------------------------------------ |
| flod | true | 初始折叠状态 |
| unfoldText | 展开 | 展开状态文字 |
| foldText | 收起 | 收起状态文字 |
| btnPosition | top-left | 按钮位置可选（top-left;top-center;top-right;bottom-left;bottom-center;bottom-right），默认左上角 |
|

| methods          | 值         | 备注         |
| ---------------- | ---------- | ------------ |
| updateFoldStatus | true/false | 改变折叠状态 |
