import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';//引入elementUI框架
import 'element-ui/lib/theme-chalk/index.css';//引入ui的css

Vue.config.productionTip = false;

//启用UI框架
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
