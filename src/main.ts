import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import wrapRenderList from "./core/wrapRenderList";

Vue.use(ElementUI);
Vue.use(PiniaVuePlugin);

const vue = new Vue({
  router,
  pinia: createPinia(),
  render: h => h(App),
});
wrapRenderList(Vue.prototype);
console.log(vue);
vue.$mount("#app");
