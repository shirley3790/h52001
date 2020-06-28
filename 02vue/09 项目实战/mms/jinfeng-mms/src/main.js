import Vue from "vue";//vue框架
import App from "./App.vue";//根组件
import router from "./router";//路由表
import store from "./store";//vuex存储库
import ElementUI from 'element-ui';//引入elementUI框架
import 'element-ui/lib/theme-chalk/index.css';//引入ui的css
// 按需导入 ElementUI 组件
// import { Loading, Message } from 'element-ui'

//路由守卫
import './permission.js';

//提示信息：false发出警告，true关闭警告
Vue.config.productionTip = process.env.NODE_ENV != 'development';
// console.log(process.env.NODE_ENV);//development 开发
//启用UI框架
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
