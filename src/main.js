import Vue from "vue";
import App from "./App.vue";
// import vCollapsePro from "v-collapse-pro";
// import "v-collapse-pro/v-collapse-pro.css";
// Vue.use(vCollapsePro);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
