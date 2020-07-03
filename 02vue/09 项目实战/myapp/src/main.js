import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入vantui的js和css
import Vant from 'vant';
import 'vant/lib/index.css';

//启用vantui插件
Vue.use(Vant);
//引入swiper
// import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// Vue.use(vueSwiper)
import Swiper from 'swiper';
Vue.use(Swiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
