//package/index.js
import VCollapsePro from "./v-collapse-pro.vue"; // 引入封装好的组件
const components = [VCollapsePro];

// 批量组件注册
const install = function (Vue) {
  components.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install;
