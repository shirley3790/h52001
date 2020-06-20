import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/views/login';//就相当于 ./src/views/login/index.vue ;如果你的组件名就是index.vue可以忽略不写

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login //路由用到的组件，我都统一放在views里面
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
